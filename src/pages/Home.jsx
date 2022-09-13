import React from 'react'
import Charts from '../components/Charts'
import FeaturedInfo from '../components/FeaturedInfo'
import WidgetLarge from '../components/WidgetLarge';
import WidgetSmall from '../components/WidgetSmall';

import {userData} from '../data/dataAnalytic'

export default function Home() {
  console.log(userData);
  return (
    <div className="Home">
      <FeaturedInfo />
      <Charts data={userData} title={userData[0].name} grid dataKey={'Active User'} />
      <div className="homeWidget">
        <WidgetSmall/>
        <WidgetLarge/>
      </div>
      
    </div>
  );
}
