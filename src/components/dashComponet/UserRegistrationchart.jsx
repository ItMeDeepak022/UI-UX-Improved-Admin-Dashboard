"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", users: 40 },
    { month: "Feb", users: 55 },
    { month: "Mar", users: 68 },
    { month: "Apr", users: 75 },
    { month: "May", users: 88 },
    { month: "Jun", users: 100 },
];

export default function UserRegistrationChart() {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-5">
                User Registrations
            </h2>

            <div className="w-full h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        {/* X Axis = Months */}
                        <XAxis
                            dataKey="month"
                            label={{
                                value: "Months",
                                position: "insideBottom",
                                offset: -5,
                            }}
                        />

                        {/* Y Axis = Number of Users */}
                        <YAxis
                            label={{
                                value: "Users",
                                angle: -90,
                                position: "insideLeft",
                            }}
                        />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="users"
                            stroke="#4F46E5"
                            strokeWidth={3}
                            dot={{ r: 5 }}
                        />

                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}