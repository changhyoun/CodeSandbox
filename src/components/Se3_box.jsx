import React, { useEffect, useState, useRef } from 'react';
import "./Se3_box.scss";
import { gsap } from 'gsap';

const Se3_box = ({ se3_h3_tx, se3_p_tx,se3_span_tx }) => {

  return (
    <div className='Se3_box'>
      <div className='round'>
        <span class="material-symbols-rounded">
          {se3_span_tx}
        </span>
      </div>
      <h3>{se3_h3_tx}</h3>
      <p>{se3_p_tx}</p>
    </div>
  );
};

export default Se3_box;
