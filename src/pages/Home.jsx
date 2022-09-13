import React from 'react'
import Charts from '../components/Charts'
import FeaturedInfo from '../components/FeaturedInfo'

import {userData} from '../data/dataAnalytic'

export default function Home() {
  console.log(userData);
  return (
    <div className="Home">
      <FeaturedInfo />
      <Charts data={userData} title={userData[0].name} grid dataKey={'Active User'} />
    </div>
  );
}
