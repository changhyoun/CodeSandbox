import React, { forwardRef } from 'react';
import "./Se3_box.scss";
import { gsap } from 'gsap';

// Se3_box 컴포넌트를 forwardRef로 감싸서 ref를 전달받도록 수정
const Se3_box = forwardRef(({ se3_h3_tx, se3_p_tx, se3_span_tx }, ref) => {
  return (
    <div className='Se3_box' ref={ref}> {/* ref를 div에 전달 */}
      <div className='round'>
        <span className="material-symbols-rounded">
          {se3_span_tx}
        </span>
      </div>
      <h3>{se3_h3_tx}</h3>
      <p>{se3_p_tx}</p>
    </div>
  );
});

export default Se3_box;