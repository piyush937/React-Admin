import React from 'react'
import './widigitLg.css'
import Image5 from '../../components/Img/Image5.jpg';
import Image6 from '../../components/Img/Image6.jpg';
import Image7 from '../../components/Img/Image7.jpg';
import Image11 from '../../components/Img/Image11.webp';


export default function WidigitLg() {

const Button = ({type}) => {
  return <button className={'widigitLgButton ' + type}>{type}</button>
}

  return (
    <div className='widigitLg'>
      <h3 className="widigitLgTitle">Latest Transactions </h3>
      <table className="widigitLgTable">
        <tr className="widigitLgTr">
          <th className="widigitLgTh">Coustomer</th>
          <th className="widigitLgTh">Date</th>
          <th className="widigitLgTh">Amount</th>
          <th className="widigitLgTh">Status</th>
        </tr>
        <tr className="widigitLgTr">
          <td className="widigitLgUser">
            <img src={ Image5 } alt="" className="widigitLgImg" />
            <span className="widigitLgName">Jatin Bisht</span>
          </td>
          <td className="widigitLgDate">1 April 2023</td>
          <td className="widigitLgAmount">$2999</td>
          <td className="widigitLgStatus">
            < Button  type = 'Approved'/>
          </td>
        </tr>

        <tr className="widigitLgTr">
          <td className="widigitLgUser">
            <img src={ Image6 } alt="" className="widigitLgImg" />
            <span className="widigitLgName">Jatin Bisht</span>
          </td>
          <td className="widigitLgDate">1 April 2023</td>
          <td className="widigitLgAmount">$2999</td>
          <td className="widigitLgStatus">
            < Button  type = 'Declined'/>
          </td>
        </tr>

        <tr className="widigitLgTr">
          <td className="widigitLgUser">
            <img src={ Image7 } alt="" className="widigitLgImg" />
            <span className="widigitLgName">Jatin Bisht</span>
          </td>
          <td className="widigitLgDate">1 April 2023</td>
          <td className="widigitLgAmount">$2999</td>
          <td className="widigitLgStatus">
            < Button  type = 'Pending'/>
          </td>
        </tr>

        <tr className="widigitLgTr">
          <td className="widigitLgUser">
            <img src= { Image11 } alt="" className="widigitLgImg" />
            <span className="widigitLgName">Jatin Bisht</span>
          </td>
          <td className="widigitLgDate">1 April 2023</td>
          <td className="widigitLgAmount">$2999</td>
          <td className="widigitLgStatus">
            < Button  type = 'Approved'/>
          </td>
        </tr>

      </table>
      </div>
  )
}
