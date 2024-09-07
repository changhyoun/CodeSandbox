import React, { useState, useEffect, useRef } from 'react';
import "./Header.scss";
import { FullLogo, FullLogo_wh } from './image';
import Menu from './Menu';
import { gsap } from 'gsap';

const Header = () => {
  const [logocl, setLogocl] = useState(FullLogo);
  const [transitionClass, setTransitionClass] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollTop = useRef(0);
  const buttonRef = useRef(null);

  const toggleLogo = () => {
    setTransitionClass('fade-out');
    setTimeout(() => {
      setLogocl(logocl === FullLogo ? FullLogo_wh : FullLogo);
      setTransitionClass('fade-in');
    }, 250);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > 1) {
        setIsScrolled(true);

        if (currentScrollTop > lastScrollTop.current) {
          setIsVisible(false); // 스크롤을 내릴 때 헤더 숨기기
        } else {
          setIsVisible(true); // 스크롤을 올릴 때 헤더 보이기
        }
      } else {
        setIsScrolled(false);
        setIsVisible(true); // 처음 위치로 돌아가면 메뉴 다시 보이게
      }

      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='Header' className={`${isScrolled ? 'scrolled' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
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
          >
            무료 체험
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
