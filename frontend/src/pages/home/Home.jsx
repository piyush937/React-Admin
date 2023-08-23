import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import WidigitSm from '../../components/widigitSm/WidigitSm'
import WidigitLg from '../../components/widigitLg/WidigitLg'
import "./home.css"
import {userData} from '../../dummyData'

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userData} title='User Analytics' grid />
         <div className="homeWidgets">
          <WidigitSm />
          <WidigitLg />
         </div>
        </div>
  )
}
