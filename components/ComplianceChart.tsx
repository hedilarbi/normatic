"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Highcharts from "highcharts";

const HighchartsReact = dynamic(() => import("highcharts-react-official"), {
  ssr: false,
});

type RangeKey = "30j" | "90j" | "1an";

const COLORS = {
  rgpd: "#10B981", // green
  wcag: "#F59E0B", // amber
  aact: "#EF4444", // red
  dsa: "#8B5CF6", // violet
};

const ALL_MONTHS_FR = [
  "Jan",
  "Fév",
  "Mar",
  "Avr",
  "Mai",
  "Jun",
  "Jul",
  "Aoû",
  "Sep",
  "Oct",
  "Nov",
  "Déc",
];

// Base series (12 months) — tweak as you like
const SERIES_12M = {
  RGPD: [75, 78, 82, 85, 87, 89, 90, 91, 92, 92, 92, 92],
  WCAG: [65, 68, 70, 72, 74, 75, 76, 77, 78, 78, 78, 78],
  "AI Act": [30, 32, 35, 38, 40, 42, 43, 44, 45, 45, 45, 45],
  DSA: [70, 72, 75, 78, 80, 82, 83, 84, 85, 85, 85, 85],
};

function sliceForRange(range: RangeKey) {
  if (range === "1an")
    return { months: ALL_MONTHS_FR, indexStart: 0, indexEnd: 12 };
  if (range === "90j")
    return { months: ALL_MONTHS_FR.slice(6, 12), indexStart: 6, indexEnd: 12 }; // last 6 months
  // 30j → last 3 months (approx for demo)
  return { months: ALL_MONTHS_FR.slice(9, 12), indexStart: 9, indexEnd: 12 };
}

export default function ComplianceChart() {
  const [range, setRange] = useState<RangeKey>("1an");

  const { months, indexStart, indexEnd } = useMemo(
    () => sliceForRange(range),
    [range]
  );

  const lineOptions = useMemo<Highcharts.Options>(() => {
    const rgpd = SERIES_12M["RGPD"].slice(indexStart, indexEnd);
    const wcag = SERIES_12M["WCAG"].slice(indexStart, indexEnd);
    const aact = SERIES_12M["AI Act"].slice(indexStart, indexEnd);
    const dsa = SERIES_12M["DSA"].slice(indexStart, indexEnd);

    return {
      chart: { type: "line", height: 320, spacingTop: 10 },
      title: { text: "" },
      xAxis: { categories: months },
      yAxis: {
        title: { text: "Conformité (%)" },
        max: 100,
      },
      legend: { align: "center", verticalAlign: "bottom" },
      credits: { enabled: false },
      tooltip: { shared: true, valueSuffix: "%" },
      plotOptions: {
        series: {
          marker: { enabled: true, radius: 4 },
          lineWidth: 2,
        },
      },
      series: [
        {
          name: "RGPD",
          data: rgpd as number[],
          color: COLORS.rgpd,
          type: "line",
        },
        {
          name: "WCAG",
          data: wcag as number[],
          color: COLORS.wcag,
          type: "line",
        },
        {
          name: "AI Act",
          data: aact as number[],
          color: COLORS.aact,
          type: "line",
        },
        { name: "DSA", data: dsa as number[], color: COLORS.dsa, type: "line" },
      ],
      accessibility: {
        enabled: true,
        description: "Évolution de la conformité sur la période sélectionnée.",
      },
    };
  }, [months, indexStart, indexEnd]);

  // Fake “violations” split to match your labels (sum ≈ 100)
  const pieData = [
    { name: "RGPD", y: 34.8, color: COLORS.rgpd },
    { name: "WCAG", y: 52.2, color: COLORS.wcag },
    { name: "AI Act", y: 8.7, color: COLORS.aact },
    { name: "DSA/DMA", y: 4.3, color: COLORS.dsa },
  ];

  const pieOptions = useMemo<Highcharts.Options>(
    () => ({
      chart: { type: "pie", height: 320 },
      title: { text: "" },
      credits: { enabled: false },
      tooltip: {
        pointFormat: "<b>{point.y:.1f}%</b>",
      },
      accessibility: {
        enabled: true,
        description: "Répartition des non-conformités par réglementation.",
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.y:.1f}%",
          },
          showInLegend: false,
        },
      },
      series: [
        {
          type: "pie",
          name: "Violations",
          data: pieData,
        },
      ],
    }),
    []
  );

  return (
    <section id="compliance-charts" className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line chart card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Évolution de la conformité
            </h3>
            <div className="flex items-center gap-2">
              {(["30j", "90j", "1an"] as RangeKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setRange(key)}
                  className={[
                    "px-3 py-1 text-xs rounded-full",
                    range === key
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700",
                  ].join(" ")}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
          <HighchartsReact highcharts={Highcharts} options={lineOptions} />
        </div>

        {/* Pie chart card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Répartition par réglementation
          </h3>
          <HighchartsReact highcharts={Highcharts} options={pieOptions} />
        </div>
      </div>
    </section>
  );
}
