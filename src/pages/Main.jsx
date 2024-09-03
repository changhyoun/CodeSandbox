import React, { useEffect, useRef, useState } from 'react';
import "./Main.scss";
import { gsap } from 'gsap';
import Header from '../components/Header';
import { se1_t_rt, rol1, rol2, rol3, rol4, rol5, rol6, rol7, rol8, rol9, se2_t, se3_t } from '../components/image';
import Se2_box from '../components/Se2_box';
import Se3_box from '../components/Se3_box';

const Main = () => {
  const h1Ref1 = useRef(null);
  const h2Ref1 = useRef(null);
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const imgRef = useRef(null);
  const rolRef = useRef(null);
  const section2Ref = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false); // 애니메이션 트리거 상태 추가

  useEffect(() => {
    // 기존 애니메이션 설정
    const h1Chars1 = h1Ref1.current.innerText.split("").map((char1, i) => 
      `<span class="char1">${char1}</span>`
    ).join("");
    h1Ref1.current.innerHTML = h1Chars1;

    const h2Chars1 = h2Ref1.current.innerText.split("").map((char1, i) => 
      `<span class="char1">${char1}</span>`
    ).join("");
    h2Ref1.current.innerHTML = h2Chars1;

    const pText1 = "CodeSandbox는 2초 만에 재개되는 연중무휴".split("").map((char2, i) => 
      char2 === " " ? `<span class="char2">&nbsp;</span>` : `<span class="char2">${char2}</span>`
    ).join("");
    pRef1.current.innerHTML = pText1;

    const pText2 = "협업 클라우드 개발 환경(CDE)을 제공합니다.".split("").map((char2, i) => 
      char2 === " " ? `<span class="char2">&nbsp;</span>` : `<span class="char2">${char2}</span>`
    ).join("");
    pRef2.current.innerHTML = pText2;

    const allPChars = document.querySelectorAll('#section1 .char2');

    const tl = gsap.timeline();

    tl.to(h1Ref1.current.querySelectorAll('.char1'), {
      color: '#80AF81',
      '-webkit-text-stroke': '0px',
      duration: 1,
      ease: 'power1.out',
      stagger: 0.02,
    })
    .to(h2Ref1.current.querySelectorAll('.char1'), {
      color: '#D6EFD8',
      '-webkit-text-stroke': '0px',
      duration: 1,
      ease: 'power2.out',
      stagger: 0.02,
    })
    .to(allPChars, {
      color: '#e7e7e7',
      '-webkit-text-stroke': '0px',
      duration: 1,
      ease: 'circ.out',
      stagger: 0.005,
    })
    .to(imgRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    });

    const images = gsap.utils.toArray(rolRef.current.children);
    const totalWidth = images.length * images[0].offsetWidth;

    gsap.to(images, {
      x: `-=${totalWidth}`,
      ease: 'none',
      duration: 240,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(value => parseFloat(value) % totalWidth)
      }
    });

    // Intersection Observer 설정
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true); // 스크롤 위치에 따라 애니메이션 트리거 설정
          observer.disconnect(); // 한 번 실행 후 감지 중지
        }
      },
      { threshold: 0.67 } // 스크롤이 2/3 지점에 도달했을 때 실행
    );

    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => observer.disconnect();
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
        <div id="section2" ref={section2Ref}>
          <div className="section2_inner">
            <div className="se2_t">
              <img src={se2_t} alt="se2_t" />
              <h1>영향력을 발휘하는 CDE를<br />
                경험해 보세요.</h1>
            </div>
            <div className="se2_m">
              <Se2_box se2_h2_tx={'5+'} se2_p_tx={'시간절약,'} se2_span_tx={'개발자 한 명당, 매 주마다.'} shouldAnimate={shouldAnimate} />
              <Se2_box se2_h2_tx={'90%'} se2_p_tx={'절감,'} se2_span_tx={'개발자 적응 시간.'} shouldAnimate={shouldAnimate} />
              <Se2_box se2_h2_tx={'60%'} se2_span_tx={`2026년까지 CDE를 통해 구축 및 배포되는 클라우드 워크로드 비율,\n Gartner에 따르면.`} shouldAnimate={shouldAnimate} />
            </div>
            <div className="se2_b">
              <button>
                CDE에 대해 자세히 알아보기
                <span className="material-symbols-rounded">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          </div>
        </div>
        <div id="section3">
          <div className="section3_inner">
            <div className="section3_t">
              <img src={se3_t} alt="se3_t" />
              <h2>전체 팀을 위한 하나의 환경,</h2>
              <p>생산성을 높이고 협업을 강화할 수 있는<br/>
              일관된 개발 환경을 마련하세요.</p>
            </div>
            <div className="section3_bt">
              <div className="section3_bt_t">
                <Se3_box se3_span_tx={'cloud'} se3_h3_tx={'안녕'} se3_p_tx={'안녕하세요'}/>
                <Se3_box se3_span_tx={'cloud'} se3_h3_tx={'안녕'} se3_p_tx={'안녕하세요'}/>
                <Se3_box se3_span_tx={'cloud'} se3_h3_tx={'안녕'} se3_p_tx={'안녕하세요'}/>
              </div>
              <div className="section3_bt_bt">
                
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main;
