import React from 'react'
import './widigitSm.css'
import { Visibility } from '@mui/icons-material' ;
import widigitSmImg from '../../components/Img/Image1.jpg';
import widigitSmImage from '../../components/Img/Image8.jpg';
import widigitSmImages from '../../components/Img/Image2.jpg';
import widigitSmIm from '../../components/Img/Image3.jpg';
import widigitSmimage from '../../components/Img/Image4.jpg';

export default function WidigitSm() {
  return (
    <div className='widigitSm'>
        <span className="widigitSmTitle">New Join Members</span>
        <ul className="widigitSmList">
            <li className="widigitSmListItem">
                <img src={ widigitSmImage } alt="" className="widigitSmImg" />
                <div className="widigitSmUser">
                    <span className="widigitSmUsername">Piyush Thakur</span>
                    <span className="widigitSmUserTitle">Software Engineer</span>
                </div>
              <button className="widigitSmButton">
              < Visibility className='widgetSmIcon' />
              Display
              </button>
            </li>

            <li className="widigitSmListItem">
                <img src={ widigitSmImages } alt="" className="widigitSmImg" />
                <div className="widigitSmUser">
                    <span className="widigitSmUsername">Piyush Thakur</span>
                    <span className="widigitSmUserTitle">Software Engineer</span>
                </div>
              <button className="widigitSmButton">
              < Visibility  className='widgetSmIcon' />
              Display
              </button>
            </li>

            <li className="widigitSmListItem">
                <img src={ widigitSmIm } alt="" className="widigitSmImg" />
                <div className="widigitSmUser">
                    <span className="widigitSmUsername">Piyush Thakur</span>
                    <span className="widigitSmUserTitle">Software Engineer</span>
                </div>
              <button className="widigitSmButton">
              < Visibility className='widgetSmIcon' />
              Display
              </button>
            </li>

            <li className="widigitSmListItem">
            <img src={widigitSmImg} alt="" className="widigitSmImg" />
                <div className="widigitSmUser">
                    <span className="widigitSmUsername">Piyush Thakur</span>
                    <span className="widigitSmUserTitle">Software Engineer</span>
                </div>
              <button className="widigitSmButton">
              < Visibility  className='widgetSmIcon' />
              Display
              </button>
            </li>

            <li className="widigitSmListItem">
                <img src={ widigitSmimage } alt="" className="widigitSmImg" />
                <div className="widigitSmUser">
                    <span className="widigitSmUsername">Piyush Thakur</span>
                    <span className="widigitSmUserTitle">Software Engineer</span>
                </div>
              <button className="widigitSmButton">
              < Visibility className='widgetSmIcon' />
              Display
              </button>
            </li>
        </ul>
    </div>
  )
}
