"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* ─── Data ─────────────────────────────────────────────────── */

const monthlyTrainees = [
  { month: "Jan", value: 120 },
  { month: "Feb", value: 185 },
  { month: "Mar", value: 210 },
  { month: "Apr", value: 165 },
  { month: "May", value: 240 },
  { month: "Jun", value: 290 },
  { month: "Jul", value: 320 },
  { month: "Aug", value: 275 },
  { month: "Sep", value: 350 },
  { month: "Oct", value: 410 },
  { month: "Nov", value: 380 },
  { month: "Dec", value: 430 },
];

const programData = [
  { name: "Teknik Mesin", value: 38 },
  { name: "Teknik Listrik", value: 27 },
  { name: "Teknik Kimia", value: 19 },
  { name: "Teknik Industri", value: 16 },
];

/* ─── Sub-components ────────────────────────────────────────── */

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
      <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {label}
      </span>
      <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {value}
      </span>
      <span className="text-xs text-zinc-400 dark:text-zinc-500">{sub}</span>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────── */

export default function FeaturedSectionStats() {
  return (
    <section className="w-full bg-[#f7f7fa] py-16 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-10 flex flex-col items-start gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:bg-blue-950 dark:text-blue-400">
            Data & Statistik
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-4xl">
            Capaian BBPPMPV BMTI
          </h2>
          <p className="max-w-xl text-base text-zinc-500 dark:text-zinc-400">
            Statistik perkembangan pelatihan, sertifikasi, dan layanan
            kompetensi vokasi tahun berjalan.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard label="Total Peserta Pelatihan" value="3.284" sub="Sepanjang tahun 2024" />
          <StatCard label="Program Pelatihan" value="48" sub="Berbagai bidang kompetensi" />
          <StatCard label="Tingkat Kelulusan" value="94,6%" sub="Rata-rata seluruh program" />
          <StatCard label="Mitra Industri" value="126" sub="Nasional & Internasional" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Area Chart – full width on md */}
          <div className="col-span-1 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 md:col-span-2">
            <p className="mb-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              Jumlah Peserta per Bulan
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={monthlyTrainees}>
                <defs>
                  <linearGradient id="traineeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: "#a1a1aa" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#a1a1aa" }}
                  axisLine={false}
                  tickLine={false}
                  width={35}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "0.75rem",
                    border: "1px solid #e4e4e7",
                    fontSize: "12px",
                  }}
                  labelStyle={{ fontWeight: 600, color: "#18181b" }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="url(#traineeGradient)"
                  dot={false}
                  activeDot={{ r: 5, fill: "#3b82f6" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart – sidebar */}
          <div className="col-span-1 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
            <p className="mb-4 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              Distribusi Program (%)
            </p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={programData} layout="vertical" barSize={14}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" horizontal={false} />
                <XAxis
                  type="number"
                  tick={{ fontSize: 11, fill: "#a1a1aa" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "#a1a1aa" }}
                  axisLine={false}
                  tickLine={false}
                  width={90}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "0.75rem",
                    border: "1px solid #e4e4e7",
                    fontSize: "12px",
                  }}
                  formatter={(v) => [`${v}%`, "Porsi"]}
                />
                <Bar dataKey="value" fill="#6366f1" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
