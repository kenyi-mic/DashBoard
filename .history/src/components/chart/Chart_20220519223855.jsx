import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import "./chart.scss";

function Chart() {
  const data = [
    {
      name: "January",
      Total: 47545,
    },
    {
      name: "February",
      Total: 71254,
    },
    {
      name: "March",
      Total: 34000,
    },
    {
      name: "April",
      Total: 74000,
    },
    {
      name: "May",
      Total: 52034,
    },
    {
      name: "Jun",
      Total: 66003,
    },
  ];

  return (
    <div className="chart">
      <div className="title">LAST 6 MONTHS (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2.0}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="ChartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
