import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItems">
            <span className="featuredTitle">Revenue</span>
             <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2499</span>
                <span className="featuredMoneyRate">
                    -11.4 < ArrowDownward className='featuredIconnegative'/>
                    </span>
             </div>
             <span className="featuredSub">Compared to last month </span>
        </div>

        <div className="featuredItems">
            <span className="featuredTitle">Sales</span>
             <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4299</span>
                <span className="featuredMoneyRate">
                    -1.4 < ArrowDownward className='featuredIconnegative'/>
                    </span>
             </div>
             <span className="featuredSub">Compared to last month </span>
        </div>

        <div className="featuredItems">
            <span className="featuredTitle">Cost</span>
             <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3499</span>
                <span className="featuredMoneyRate">
                    4.4 < ArrowUpward className='featuredIconpositive'/>
                    </span>
             </div>
             <span className="featuredSub">Compared to last month </span>
        </div>

        </div>
  )
}
