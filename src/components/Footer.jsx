import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { Footer_t_bt_back } from './image.js';

const Footer = () => {
  return (
   <footer id='Footer'>
      <div id="Footer_t">
        <div className="Footer_inner">
          <div className="Footer_t_t">
            <h1>미래를 만드는<br/>여정에 동참하세요.</h1>
            <Link>
             무료로 시작하세요
            </Link>
          </div>
          <div className="Footer_t_bt">
            <img src={Footer_t_bt_back} alt="Footer_t_bt_back" />
          </div>
        </div>
      </div>
      <div id="Footer_bt">
        <div className="Footer_inner">
        </div>
      </div>
   </footer>
  );
};

export default Footer;
