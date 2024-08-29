import React, { useEffect, useRef } from 'react';
import "./Main.scss";
import { gsap } from 'gsap';
import Header from '../components/Header';
import { se1_t_rt } from '../components/image';

const Main = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    // h1 텍스트를 개별 문자로 분리
    const h1Chars = h1Ref.current.innerText.split("").map((char, i) => 
      `<span class="char">${char}</span>`
    ).join("");
    h1Ref.current.innerHTML = h1Chars;

    // p 텍스트를 개별 문자로 분리
    const pChars = pRef.current.innerText.split("").map((char, i) => 
      `<span class="char">${char}</span>`
    ).join("");
    pRef.current.innerHTML = pChars;

    // GSAP 애니메이션 설정
    const tl = gsap.timeline();

    tl.to(h1Ref.current.querySelectorAll('.char'), {
      color: '#66c2ec', // 텍스트를 채우기 위해 색상을 설정
      '-webkit-text-stroke': '0px', // 아웃라인을 제거
      duration: 1,
      ease: 'power2.out',
      stagger: 0.05, // 각 글자가 순차적으로 애니메이션되도록 설정
    })
    .to(pRef.current.querySelectorAll('.char'), {
      color: '#f0f0f0',
      '-webkit-text-stroke': '0px', // 아웃라인을 제거
      duration: 1,
      ease: 'power2.out',
      stagger: 0.05,
    }, "+=0.5"); // h1 애니메이션이 끝난 후 p 애니메이션 시작

  }, []);

  return (
    <div id='Main'>
        <Header/>
        <div id="section1">
            <div className="section1_inner">
                 <div className="se1_t">
                    <div className="se1_t__lt">
                        <h1 ref={h1Ref}>
                        즉시 클라우드<br/>
                        <span>개발.</span>
                        </h1>
                        <p ref={pRef}>
                        CodeSandbox는 2초 만에 재개되는 연중무휴<br/>
                        협업 클라우드 개발 환경(CDE)을 제공합니다.
                        <button>
                            무료로 시작하세요
                        </button>
                        </p>
                    </div>
                    <div className="se1_t__rt">
                        <img src={se1_t_rt} alt="se1_t_rt" />
                    </div>
                 </div>
                 <div className="se1_bt">

                 </div>
            </div>
            
        </div>
    </div>
  )
}

export default Main;
