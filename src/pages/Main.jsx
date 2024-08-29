import React, { useEffect, useRef } from 'react';
import "./Main.scss";
import { gsap } from 'gsap';
import Header from '../components/Header';
import { se1_t_rt, rol1,rol2,rol3,rol4,rol5,rol6,rol7,rol8,rol9 } from '../components/image';

const Main = () => {
  const h1Ref1 = useRef(null);
  const h2Ref1 = useRef(null);
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const imgRef = useRef(null);
  const rolRef = useRef(null);

  useEffect(() => {
    // h1 텍스트를 개별 문자로 분리
    const h1Chars1 = h1Ref1.current.innerText.split("").map((char1, i) => 
      `<span class="char1">${char1}</span>`
    ).join("");
    h1Ref1.current.innerHTML = h1Chars1;

    const h2Chars1 = h2Ref1.current.innerText.split("").map((char1, i) => 
      `<span class="char1">${char1}</span>`
    ).join("");
    h2Ref1.current.innerHTML = h2Chars1;

    // p 텍스트를 개별 문자로 분리하고 공백을 명시적으로 추가
    const pText1 = "CodeSandbox는 2초 만에 재개되는 연중무휴".split("").map((char2, i) => 
      char2 === " " ? `<span class="char2">&nbsp;</span>` : `<span class="char2">${char2}</span>`
    ).join("");
    pRef1.current.innerHTML = pText1;

    const pText2 = "협업 클라우드 개발 환경(CDE)을 제공합니다.".split("").map((char2, i) => 
      char2 === " " ? `<span class="char2">&nbsp;</span>` : `<span class="char2">${char2}</span>`
    ).join("");
    pRef2.current.innerHTML = pText2;

    // 두 개의 <p> 요소에서 모든 .char 요소 선택
    const allPChars = document.querySelectorAll('#section1 .char2');

    // GSAP 애니메이션 설정
    const tl = gsap.timeline();

    tl.to(h1Ref1.current.querySelectorAll('.char1'), {
      color: '#7FA1C3', // 텍스트를 채우기 위해 색상을 설정
      '-webkit-text-stroke': '0px', // 아웃라인을 제거
      duration: 1,
      ease: 'power1.out',
      stagger: 0.02, // 각 글자가 순차적으로 애니메이션되도록 설정
    })
    .to(h2Ref1.current.querySelectorAll('.char1'), {
      color: '#6482AD', // 두 번째 h1 텍스트 애니메이션
      '-webkit-text-stroke': '0px',
      duration: 1,
      ease: 'power2.out',
      stagger: 0.02,
    })
    .to(allPChars, {
      color: '#e7e7e7',
      '-webkit-text-stroke': '0px', // 아웃라인을 제거
      duration: 1,
      ease: 'circ.out',
      stagger: 0.005,
    }) // 두 개의 <p> 요소에 대해 동시에 애니메이션 적용
    .to(imgRef.current, {
      opacity: 1, // 오퍼시티를 1로 변경
      duration: 1, // 애니메이션 지속 시간
      ease: 'power2.out',
    }); // 2.7초 뒤에 애니메이션 시작
    // 롤링 애니메이션
    const images = gsap.utils.toArray(rolRef.current.children); // 롤링 이미지 배열
    const totalWidth = images.length * images[0].offsetWidth; // 모든 이미지의 총 너비 계산

    gsap.to(images, {
      x: `-=${totalWidth}`, // 이미지를 왼쪽으로 총 너비만큼 이동
      ease: 'none', // 일정한 속도로 애니메이션
      duration: 240,
      repeat: -1, // 무한 반복
      modifiers: {
        x: gsap.utils.unitize(value => parseFloat(value) % totalWidth) // 위치를 반복적으로 계산하여 무한 루프 생성
      }
      });
  }, []);



  return (
    <div id='Main'>
        <Header/>
        <div id="section1">
            <div className="section1_inner">
                 <div className="se1_t">
                 <div className="se1_t__lt">
                        <h1 ref={h1Ref1}>
                        실시간 클라우드,
                        </h1>
                        <h2 ref={h2Ref1}>
                        솔루션 최적화.
                        </h2>
                        <p ref={pRef1}>
                          CodeSandbox는 2초 만에 재개되는 연중무휴
                        </p>
                        <p ref={pRef2}>
                          협업 클라우드  개발 환경(CDE)을 제공합니다.
                        </p>
                          <button>
                              무료로 시작하세요
                          </button>
                        
                    </div>
                    <div className="se1_t__rt">
                        <img src={se1_t_rt} alt="se1_t_rt" ref={imgRef}/>
                    </div>
                 </div>
                 <div className="se1_bt">
                  <div className="se1_bt_wrap" ref={rolRef}>
                    <div className="rolling">
                      <img src={rol1} alt="rol1" />
                      <img src={rol2} alt="rol2" />
                      <img src={rol3} alt="rol3" />
                      <img src={rol4} alt="rol4" />
                      <img src={rol5} alt="rol5" />
                      <img src={rol6} alt="rol6" />
                      <img src={rol7} alt="rol7" />
                      <img src={rol8} alt="rol8" />
                      <img src={rol9} alt="rol9" />
                    </div>
                    <div className="rolling">
                      <img src={rol1} alt="rol1" />
                      <img src={rol2} alt="rol2" />
                      <img src={rol3} alt="rol3" />
                      <img src={rol4} alt="rol4" />
                      <img src={rol5} alt="rol5" />
                      <img src={rol6} alt="rol6" />
                      <img src={rol7} alt="rol7" />
                      <img src={rol8} alt="rol8" />
                      <img src={rol9} alt="rol9" />
                    </div>
                    <div className="rolling">
                      <img src={rol1} alt="rol1" />
                      <img src={rol2} alt="rol2" />
                      <img src={rol3} alt="rol3" />
                      <img src={rol4} alt="rol4" />
                      <img src={rol5} alt="rol5" />
                      <img src={rol6} alt="rol6" />
                      <img src={rol7} alt="rol7" />
                      <img src={rol8} alt="rol8" />
                      <img src={rol9} alt="rol9" />
                    </div>
                    <div className="rolling">
                      <img src={rol1} alt="rol1" />
                      <img src={rol2} alt="rol2" />
                      <img src={rol3} alt="rol3" />
                      <img src={rol4} alt="rol4" />
                      <img src={rol5} alt="rol5" />
                      <img src={rol6} alt="rol6" />
                      <img src={rol7} alt="rol7" />
                      <img src={rol8} alt="rol8" />
                      <img src={rol9} alt="rol9" />
                    </div>
                    
                  </div>
                </div>
            </div>
        </div>
        <div id="section2">
          
        </div>
    </div>
  )
}

export default Main;
