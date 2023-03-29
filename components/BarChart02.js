import dynamic from 'next/dynamic';
import styles from './BarChart02.module.scss';
const Bar = dynamic(() => import('@ant-design/plots').then(({ Bar }) => Bar), { ssr: false, });

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

  return (<div className='maxContent'>
    <h1 className={styles.title}>Top Geographics</h1>
    <Bar {...config} />
  </div>)
};
