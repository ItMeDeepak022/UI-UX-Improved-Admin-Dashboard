"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Active", value: 70 },
  { name: "Pending", value: 20 },
  { name: "Inactive", value: 10 },
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

export default function UserStatusChart() {
  const totalUsers = data.reduce(
    (total, item) => total + item.value,
    0
  );

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">

      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          User Registration Status
        </h2>

        <p className="text-sm text-gray-500">
          Total Registered Users: {totalUsers}
        </p>
      </div>

      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={65}
              paddingAngle={3}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}