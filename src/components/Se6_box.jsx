import React, { forwardRef } from 'react';
import "./Se6_box.scss";
import { Link } from 'react-router-dom';

const Se6_box = forwardRef(({ se6_h3_tx, se6_p_tx, se6_span_tx,se6_a_tx }) => {
  return (
    <div className='Se6_box'>
      <span className="material-symbols-rounded">
        {se6_span_tx}
      </span>
      <h4>{se6_h3_tx}</h4>
      <p>{se6_p_tx}</p>
      <Link>
      {se6_a_tx}
      <span className="material-symbols-rounded">
          arrow_forward_ios
      </span>
      </Link>
    </div>
  );
});

export default Se6_box;