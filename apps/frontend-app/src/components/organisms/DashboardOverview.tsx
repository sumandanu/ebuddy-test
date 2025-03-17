import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DashboardOverview = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "42%",
        borderRadius: [6],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },

    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
    },
    xaxis: {
      categories: ["16/08", "17/08", "18/08"],
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart: any = [
    {
      name: "Eanings this month",
      data: [355, 390, 300],
    },
    {
      name: "Expense this month",
      data: [280, 250, 325],
    },
  ];

  return (
    <Card>
      <CardHeader>
        <Typography variant="h5">Card</Typography>
      </CardHeader>
      <CardContent sx={{ height: "100%" }}>
        {/* <Typography variant="h5">Card</Typography> */}
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type="bar"
          height={370}
          width={"100%"}
        />
      </CardContent>
    </Card>
  );
};

export default DashboardOverview;
