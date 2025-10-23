import React from "react";
import { Card } from "./shadcn/Card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", students: 40 },
  { name: "Tue", students: 30 },
  { name: "Wed", students: 50 },
  { name: "Thu", students: 70 },
  { name: "Fri", students: 60 },
  { name: "Sat", students: 80 },
];

export default function GraphSection() {
  return (
    <Card className="p-4">
      <h3 className="text-xl font-semibold mb-3">Weekly Seat Bookings</h3>
      <div className="w-full min-h-[280px] flex justify-center items-center">
        {/* Important: ResponsiveContainer must have a height */}
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="students" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
