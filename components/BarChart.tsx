import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Month 1', value: 40 },
  { name: 'Month 2', value: 55 },
  { name: 'Month 3', value: 45 },
  { name: 'Month 4', value: 70 },
  { name: 'Month 5', value: 60 },
  { name: 'Month 6', value: 90 },
];

const SimpleBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <Bar dataKey="value" radius={[2, 2, 0, 0]}>
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={index === data.length - 1 ? '#1A1A1A' : '#e5e7eb'} 
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;