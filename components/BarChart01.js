import dynamic from 'next/dynamic';
import styles from './BarChart01.module.scss';
const Column = dynamic(() => import('@ant-design/plots').then(({ Column }) => Column), { ssr: false, });

export default function BarChart01() {
  const data = [
    {
      name: 'Male',
      age: '13',
      percentage: 10,
    },
    {
      name: 'Male',
      age: '14',
      percentage: 20,
    },
    {
      name: 'Male',
      age: '15',
      percentage: 30,
    },
    {
      name: 'Male',
      age: '16',
      percentage: 40,
    },
    {
      name: 'Male',
      age: '17',
      percentage: 50,
    },
    {
      name: 'Male',
      age: '18',
      percentage: 60,
    },
    {
      name: 'Female',
      age: '13',
      percentage: 20,
    },
    {
      name: 'Female',
      age: '14',
      percentage: 30,
    },
    {
      name: 'Female',
      age: '15',
      percentage: 40,
    },
    {
      name: 'Female',
      age: '16',
      percentage: 50,
    },
    {
      name: 'Female',
      age: '17',
      percentage: 60,
    },
    {
      name: 'Female',
      age: '18',
      percentage: 70,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: 'age',
    yField: 'percentage',
    seriesField: 'name',
    autoFit: true,
    /** 设置颜色 */
    color: ['#F51782', '#0569EF'],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return (<div className='maxContent'>
    <div className={styles.chart}>
      <h1 className={styles.title}>Age and Gender</h1>
      <Column {...config} />;
    </div>
  </div>)

};

