import React, { useEffect, useState, useRef } from 'react';
import "./Se2_box.scss";
import { gsap } from 'gsap';

const Se2_box = ({ se2_h2_tx, se2_p_tx, se2_span_tx, shouldAnimate }) => {
  const [displayText, setDisplayText] = useState("00"); // 초기 텍스트 상태를 '00'으로 설정
  const pRef = useRef(null); // p 요소 참조
  const spanRef = useRef(null); // span 요소 참조

  useEffect(() => {
    if (!shouldAnimate) return; // 애니메이션 조건 확인

    const numberMatch = se2_h2_tx.match(/\d+/); // 숫자만 추출
    const nonNumberPart = se2_h2_tx.replace(/\d+/g, ""); // 기호만 추출

    if (numberMatch) {
      const targetNumber = numberMatch[0]; // 애니메이션의 목표 숫자
      const numDigits = targetNumber.length;

      const tl = gsap.timeline(); // 타임라인 생성

      if (numDigits === 1) {
        // 한 자리 수 애니메이션
        tl.to({ val: 0 }, {
          val: parseInt(targetNumber, 10),
          duration: 0.8,
          ease: 'power4.out',
          onUpdate: function () {
            setDisplayText(Math.round(this.targets()[0].val) + nonNumberPart); // 현재 숫자 업데이트
          }
        });
      } else if (numDigits === 2) {
        // 첫째 자리 수 애니메이션 (아래에서 위로)
        tl.to({ val: 0 }, {
          val: parseInt(targetNumber[0], 10),
          duration: 0.3,
          ease: 'power4.out',
          onUpdate: function () {
            const updatedFirstDigit = Math.round(this.targets()[0].val);
            setDisplayText(`${updatedFirstDigit}0${nonNumberPart}`); // 첫째 자리 업데이트, 둘째 자리 초기화
          }
        });

        // 둘째 자리 수 애니메이션 (위에서 아래로)
        tl.to({ val: 9 }, {
          val: parseInt(targetNumber[1], 10),
          duration: 0.4,
          ease: 'power4.in',
          onUpdate: function () {
            const updatedSecondDigit = Math.round(this.targets()[0].val);
            setDisplayText(prev => `${prev[0]}${updatedSecondDigit}${nonNumberPart}`); // 두 번째 자리 업데이트
          }
        }, '+=0.1'); // 첫째 자리 애니메이션이 끝난 후에 시작
      }

      // 숫자 애니메이션이 끝난 후 p와 span의 오퍼시티 애니메이션
      tl.to([pRef.current, spanRef.current], {
        opacity: 1,
        duration: 1, // p와 span의 오퍼시티 전환 시간
        ease: 'power2.out'
      });
    }
  }, [se2_h2_tx, shouldAnimate]); // shouldAnimate 변경 시 실행

  return (
    <div className='Se2_box'>
      <h2>{displayText}</h2> {/* 애니메이션 상태에 따라 업데이트되는 텍스트 */}
      <p ref={pRef} style={{ opacity: 0 }}>{se2_p_tx}</p> {/* p 요소의 초기 opacity를 0으로 설정 */}
      <span ref={spanRef} style={{ opacity: 0 }}>{se2_span_tx}</span> {/* span 요소의 초기 opacity를 0으로 설정 */}
    </div>
  );
};

export default Se2_box;
