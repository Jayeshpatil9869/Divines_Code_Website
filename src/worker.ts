
interface Env {
    ASSETS: {
        fetch: (request: Request) => Promise<Response>;
    };
}

export default {
    async fetch(request: Request, env: Env): Promise<Response> {
        const url = new URL(request.url);

        // 1. Try to fetch the static asset from Cloudflare Assets (dist folder)
        //    We clone the request because we might need it again for the fallback
        let response = await env.ASSETS.fetch(request);

        // 2. SPA Routing Fallback
        //    If the file is not found (404) and it's not a file request (doesn't have an extension),
        //    serve index.html instead.
        if (response.status === 404 && !url.pathname.includes('.')) {
            const indexUrl = new URL(url);
            indexUrl.pathname = '/index.html';
            response = await env.ASSETS.fetch(new Request(indexUrl, request));
        }

        // 3. Security & Performance Headers
        //    Re-create response to modify headers (Response objects are immutable-ish in some contexts)
        const newHeaders = new Headers(response.headers);

        // Cache Control
        if (url.pathname.startsWith('/assets/')) {
            // Hashed assets (Vite default) can be cached forever (1 year)
            newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
        } else if (url.pathname.endsWith('.html')) {
            // HTML files should revalidate frequently
            newHeaders.set('Cache-Control', 'public, max-age=0, must-revalidate');
        }

        // Security
        newHeaders.set('X-Content-Type-Options', 'nosniff');
        newHeaders.set('X-Frame-Options', 'DENY');
        newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders,
        });
    },
};
