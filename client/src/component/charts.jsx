import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Charts({ data }) {
  return (
    <ResponsiveContainer>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="transactionDate" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="total_Income"
          fill="#1e293b"
          activeBar={<Rectangle fill="#cbd5e1" stroke="black" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Charts;
