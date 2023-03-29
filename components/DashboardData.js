import cn from 'classnames';
import Header from 'components/Header';
import HeaderMobile from 'components/HeaderMobile';
import React from 'react';
import Headroom from 'react-headroom';

import { Tabs } from 'antd';
import Resuable08 from 'components/Resuable08';
import Reusable22 from 'components/Reusable22';
import Reusable32 from 'components/Reusable32';
import ReusableTable from 'components/ReusableTable';
import ReusableTable03 from 'components/ReusableTable03';
import styles from './DashboardData.module.scss';
import ReusableDashboard01 from './ReusableDashboard01';


export default function DashboardData(props) {
  return (
    <React.Fragment>
      <Headroom tag="header" className="page-header">
        <nav className="max:show lg:hide">
          <Header />
        </nav>
        <nav className="lg:show">
          <HeaderMobile />
        </nav>
      </Headroom>

      <div className={cn(styles.root, 'dashboard-data')}>
        <div className={styles.tabs}>
          <Tabs type="line" centered>
            <Tabs.TabPane tab="Dashboard" key="Dashboard">
              <ReusableDashboard01 />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Listing" key="Listing">
              <ReusableTable title={`Listings`} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Favorites" key="Favorites">
              <Resuable08 />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Received Orders" key="Received Orders">
              <ReusableTable03 />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Placed Orders" key="Placed Orders">
              <Reusable32 />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Settings" key="Settings">
              <Reusable22 />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Sign Out" key="Sign Out"></Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  );
}

DashboardData.inStorybook = true;
