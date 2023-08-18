import Chart from 'react-apexcharts'

/*
 * Placeholder Charts
 * Data input here are fake
 */

const height = 300 // pixels, height of each chart

export function BarChart() {
  const data = {
    options: {
      chart: { id: 'Example 1', toolbar: { show: false } },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  }

  return (
    <Chart
      options={data.options}
      series={data.series}
      type="bar"
      height={height}
    />
  )
}

export function LineChart() {
  const data = {
    chart: {
      toolbar: { show: false },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#99C2A2', '#C5EDAC', '#66C7F4'],
    series: [
      {
        name: 'Column A',
        type: 'column',
        data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5],
      },
      {
        name: 'Column B',
        type: 'column',
        data: [10, 19, 27, 26, 34, 35, 40, 38],
      },
      {
        name: 'Line C',
        type: 'line',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
      },
    ],
    stroke: {
      width: [4, 4, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
      },
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    yaxis: [
      {
        seriesName: 'Column A',
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: 'Columns',
        },
      },
      {
        seriesName: 'Column A',
        show: false,
      },
      {
        opposite: true,
        seriesName: 'Line C',
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: 'Line',
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      offsetX: 40,
    },
  }

  return (
    <Chart options={data} series={data.series} type="line" height={height} />
  )
}

export function BarChart2() {
  const data = {
    series: [
      {
        name: 'Actual',
        data: [
          {
            x: '2011',
            y: 1292,
            goals: [
              {
                name: 'Expected',
                value: 1400,
                strokeHeight: 5,
                strokeColor: '#775DD0',
              },
            ],
          },
          {
            x: '2012',
            y: 4432,
            goals: [
              {
                name: 'Expected',
                value: 5400,
                strokeHeight: 5,
                strokeColor: '#775DD0',
              },
            ],
          },
          {
            x: '2013',
            y: 5423,
            goals: [
              {
                name: 'Expected',
                value: 5200,
                strokeHeight: 5,
                strokeColor: '#775DD0',
              },
            ],
          },
          {
            x: '2014',
            y: 6653,
            goals: [
              {
                name: 'Expected',
                value: 6500,
                strokeHeight: 5,
                strokeColor: '#775DD0',
              },
            ],
          },
          {
            x: '2015',
            y: 8133,
            goals: [
              {
                name: 'Expected',
                value: 6600,
                strokeHeight: 13,
                strokeWidth: 0,
                strokeLineCap: 'round',
                strokeColor: '#775DD0',
              },
            ],
          },
          {
            x: '2016',
            y: 7132,
            goals: [
              {
                name: 'Expected',
                value: 7500,
                strokeHeight: 5,
                strokeColor: '#775DD0',
              },
            ],
          },
          {
            x: '2017',
            y: 7332,
            goals: [
              {
                name: 'Expected',
                value: 8700,
                strokeHeight: 5,
                strokeColor: '#775DD0',
              },
            ],
          },
          {
            x: '2018',
            y: 6553,
            goals: [
              {
                name: 'Expected',
                value: 7300,
                strokeHeight: 2,
                strokeDashArray: 2,
                strokeColor: '#775DD0',
              },
            ],
          },
        ],
      },
    ],
    chart: {
      toolbar: { show: false },
      height: 350,
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
      },
    },
    grid: { show: false },
    colors: ['#00E396'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ['Actual', 'Expected'],
      markers: {
        fillColors: ['#00E396', '#775DD0'],
      },
    },
    yaxis: { labels: { show: false } },
  }

  return (
    <Chart options={data} series={data.series} type="bar" height={height} />
  )
}

const generateDayWiseTimeSeries = function (
  baseval: number,
  count: number,
  yrange: { max: number; min: number }
) {
  let i = 0
  const series = []
  while (i < count) {
    const x = baseval
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push([x, y])
    baseval += 86400000
    i++
  }
  return series
}

export function AreaChart() {
  const data = {
    series: [
      {
        name: 'USA',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          20,
          {
            min: 10,
            max: 60,
          }
        ),
      },
      {
        name: 'Europe',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          20,
          {
            min: 10,
            max: 20,
          }
        ),
      },
      {
        name: 'Asia',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          20,
          {
            min: 10,
            max: 15,
          }
        ),
      },
    ],
    chart: {
      height: 350,
      stacked: true,
      toolbar: { show: false },
    },
    grid: {
      show: true,
    },
    colors: ['#008FFB', '#00E396', '#CED4DC'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      //curve: 'smooth',
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.8,
        opacityTo: 1,
      },
    },
    xaxis: { labels: { show: false } },
  }
  return (
    <Chart options={data} series={data.series} type="area" height={height} />
  )
}
