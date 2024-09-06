import React from 'react';
import "./Se7_box.scss";
import { Link } from 'react-router-dom';

const Se7_box = ({se7_ic,se7_h5_tx,se7_p_tx,se7_small}) => {
  return (
    <div className='Se7_box'>
      <div className="Se7_box_inner">
        <div className="Se7_box_lt">
            <div className="Se7_box_lt_t">
              <img src={se7_ic} alt={se7_ic} />
            </div>
            <div className="Se7_box_lt_bt">
              <h5>{se7_h5_tx}</h5>
              <p>{se7_p_tx}</p>
            </div>
        </div>
        <div className="Se7_box_rt">
          <div className="Se7_box_rt_t">
            <span class="material-symbols-rounded">
              widgets
            </span>
          </div>
          <div className="Se7_box_rt_bt">
            <span class="material-symbols-rounded">
            Network_Node
            </span>
            <small>
              {se7_small}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Se7_box;