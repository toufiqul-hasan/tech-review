import React from "react";
import { Area, AreaChart,Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";
import "./MyChart.css";

const MyChart = () => {
  const data = [
    {
      month: "Mar",
      Investment: 100000,
      Sell: 241,
      Revenue: 10401,
    },
    {
      month: "Apr",
      Investment: 200000,
      Sell: 423,
      Revenue: 24500,
    },
    {
      month: "May",
      Investment: 500000,
      Sell: 726,
      Revenue: 67010,
    },
    {
      month: "Jun",
      Investment: 500000,
      Sell: 529,
      Revenue: 40405,
    },
    {
      month: "Jul",
      Investment: 600000,
      Sell: 601,
      Revenue: 50900,
    },
    {
      month: "Aug",
      Investment: 700000,
      Sell: 670,
      Revenue: 61000,
    },
  ];

  return (
    <div className="chart">
      <div>
        <LineChart width={500} height={500} data={data}>
          <Line type="monotone" dataKey="Sell" stroke="#8884d8" strokeWidth={3} />
          <XAxis dataKey="month" />
          <Legend />
          <Tooltip />
          <YAxis />
        </LineChart>
      </div>
      <div>
        <BarChart width={500} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month"/>
          <YAxis />
          <Bar dataKey="Investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="Revenue" stackId="a" fill="#82ca9d" />
          <Legend />
          <Tooltip />
        </BarChart>
      </div>
      <div>
        <AreaChart width={500} height={500} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <Legend />
          <Tooltip />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Area type="monotone" dataKey="Revenue" stroke="#8884d8" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)"/>
          <Area type="monotone" dataKey="Investment" stroke="#82ca9d" strokeWidth={2} fillOpacity={1} fill="url(#colorPv)"/>
        </AreaChart>
      </div>
      <div>
      <PieChart width={500} height={500}>
        <Pie data={data} dataKey="Investment" nameKey="month" cx="50%" cy="50%" innerRadius={10} outerRadius={50}fill="#8566AA" />
        <Pie data={data} dataKey="Sell" nameKey="month" cx="50%"cy="50%" innerRadius={50} outerRadius={100} fill="#6983AA" />
        <Pie data={data}dataKey="Revenue"nameKey="month"cx="50%"cy="50%"innerRadius={85}outerRadius={110}fill="#8EC6C5"label />
        <Tooltip />
      </PieChart>
      </div>
    </div>
  );
};

export default MyChart;