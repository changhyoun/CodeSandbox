import React, { useState, useRef } from 'react';
import "./Header.scss";
import { FullLogo, FullLogo_wh } from './image';
import Menu from './Menu';
import { gsap } from 'gsap';

const Header = () => {
  const [logocl, setLogocl] = useState(FullLogo);
  const [transitionClass, setTransitionClass] = useState('');
  const buttonRef = useRef(null); // 버튼을 참조하는 ref 생성

  const toggleLogo = () => {
    setTransitionClass('fade-out');
    setTimeout(() => {
      setLogocl(logocl === FullLogo ? FullLogo_wh : FullLogo);
      setTransitionClass('fade-in');
    }, 250);
  };

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scaleX: 1.15, // 버튼을 살짝 확대
      duration: 0.15,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1, // 원래 크기로 복귀
      duration: 0.15,
      ease: 'power2.in'
    });
  };

  return (
    <div id='Header'>
      <div className="header_inner">
        <div className="hd_lt">
          <img 
            src={logocl}  
            alt="FullLogo" 
            onClick={toggleLogo}
            onMouseEnter={toggleLogo}  
            onMouseLeave={toggleLogo}
            className={transitionClass}
          />
          <Menu />
        </div>
        <div className="hd_rt">
          <p>로그인</p>
          <button
            ref={buttonRef} // 버튼 요소에 ref 연결
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            무료 체험
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
