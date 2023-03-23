import { Bar } from '@ant-design/plots';

export default function BarChart02() {
  const data = [
    {
      year: 'United States',
      value: 38,
    },
    {
      year: 'India',
      value: 52,
    },
    {
      year: 'China',
      value: 61,
    },
    {
      year: 'Pakistan',
      value: 145,
    },
    {
      year: 'Bangladesh',
      value: 48,
    },
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: {
      position: 'top-left',
    },
  };
  return <Bar {...config} />;
};
