import React from 'react';
import "./Se8_box.scss";

const Se8_box = ({se8_h3_tx,se8_img,se8_p_tx,se8_span_tx}) => {
  return (
    <div className='Se8_box'>
      <div className="Se8_box_inner">
        <div className="Se8_box_t">
          <h3>{se8_h3_tx}</h3>
        </div>
        <div className="Se8_box_bt">
          <div className="Se8_box_bt_lt">
            <img src={se8_img} alt={se8_img} />
          </div>
          <div className="Se8_box_bt_rt">
            <p>
              {se8_p_tx}
            </p>
            <span>
               {se8_span_tx}
            </span>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Se8_box;