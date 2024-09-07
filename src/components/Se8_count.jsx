// src/components/Se8_count.jsx
import React, { useEffect, useRef } from 'react';
import "./Se8_count.scss";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Se8_count = ({ Se8_count_h3, Se8_count_p }) => {
  const countRef = useRef();
  const numberRef = useRef();

  useEffect(() => {
    const number = parseInt(Se8_count_h3.replace(/[^\d]/g, '')); // 숫자만 추출

    // 초기 숫자 설정
    numberRef.current.innerText = 0; // 초기 숫자를 0으로 설정

    // 카운팅 애니메이션
    gsap.fromTo(numberRef.current, { innerText: 0 }, {
      innerText: number,
      duration: 2,
      ease: 'power1.inOut',
      snap: { innerText: 1 },
      onUpdate: function () {
        numberRef.current.innerText = Math.ceil(this.targets()[0].innerText).toLocaleString(); // 숫자 포맷 적용
      },
      scrollTrigger: {
        trigger: '#section8', // 섹션 7의 3/4 지점을 트리거로 설정
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });
  }, [Se8_count_h3]);

  return (
    <div className='Se8_count'>
      <h3 ref={countRef}>
        <span ref={numberRef}></span> {/* 숫자만 애니메이션을 적용할 부분 */}
        {Se8_count_h3.replace(/[0-9,]+/, '')} {/* 숫자를 제외한 텍스트 부분을 표시 */}
      </h3>
      <p>
        {Se8_count_p}
      </p>
    </div>
  );
};

export default Se8_count;