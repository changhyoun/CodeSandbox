import React, { useEffect, useRef, useState } from 'react';
import "./Main.scss";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';  // TextPlugin 추가
import Header from '../components/Header';
import { se1_t_rt, rol1, rol2, rol3, rol4, rol5, rol6, rol7, rol8, rol9, se2_t, se3_t,se4_bt1,se4_bt2,se4_bt3 } from '../components/image';
import Se2_box from '../components/Se2_box';
import Se3_box from '../components/Se3_box';

gsap.registerPlugin(TextPlugin);

const Main = () => {
  const h1Ref1 = useRef(null);
  const h2Ref1 = useRef(null);
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const imgRef = useRef(null);
  const rolRef = useRef(null);
  const section2Ref = useRef(null);
  const section3h2Ref = useRef(null); // 섹션 3의 h2 요소를 참조하기 위한 useRef 추가
  const section3pRef = useRef(null);  // 섹션 3의 p 요소를 참조하기 위한 useRef 추가
  const section3aRef = useRef(null);
  const se3BoxRefs = useRef([]); // 모든 Se3_box 컴포넌트를 참조하기 위한 useRef 배열
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

     // h2를 특수 문자로 초기화
     const originalText = "전체 팀을 위한 하나의 환경,";
     const scrambledText = originalText.split('').map(() => 
       String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33))
     ).join('');
     section3h2Ref.current.innerText = scrambledText; // 특수 문자로 초기화
 
     // Intersection Observer 설정
     const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect(); // 애니메이션을 한 번만 실행하도록 옵저버 연결 해제
    
          // GSAP 애니메이션 설정
          const h2Animation = gsap.timeline();
          h2Animation.to(section3h2Ref.current, {
            duration: 2,
            text: originalText, // 원래 텍스트로 변경
            ease: 'none',
            onComplete: () => {
              // 애니메이션이 끝난 후 p 요소 나타나기
              gsap.to(section3pRef.current, {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => {
                  // p 요소가 나타난 후 각 Se3_box가 아래에서 위로 나타나기
                  se3BoxRefs.current.forEach((ref, index) => {
                    gsap.fromTo(
                      ref,
                      {
                        y: 50, // 아래에서 시작
                        opacity: 0,
                      },
                      {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.out',
                        delay: index * 0.3, // 순차적으로 나타나도록 지연 시간 설정
                        onComplete: () => {
                          // 마지막 요소 애니메이션이 끝난 후 a 요소 애니메이션 실행
                          if (index === se3BoxRefs.current.length - 1) {
                            gsap.to(section3aRef.current, {
                              opacity: 1,
                              duration: 0.5,
                              ease: 'power2.out',
                            });
                          }
                        },
                      }
                    );
                  });
                },
              });
            },
          });
        }
      },
      { threshold: 0.9 } // 스크롤이 4/5 지점에 도달했을 때 실행
    );
 
     // 새로고침 후에도 현재 스크롤 위치를 확인하여 애니메이션이 시작되도록 설정
     if (window.scrollY > section2Ref.current.offsetTop + section2Ref.current.offsetHeight * 0.8) {
       setShouldAnimate(true);
 
      // GSAP 애니메이션 즉시 실행
    gsap.to(section3h2Ref.current, {
      duration: 1,
      text: originalText, // 원래 텍스트로 변경
      ease: 'none',
      onComplete: () => {
        gsap.to(section3pRef.current, {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => {
            // p 요소가 나타난 후 각 Se3_box가 아래에서 위로 나타나기
            se3BoxRefs.current.forEach((ref, index) => {
              gsap.fromTo(
                ref,
                {
                  y: 50, // 아래에서 시작
                  opacity: 0,
                },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  ease: 'power2.out',
                  delay: index * 0.3, // 순차적으로 나타나도록 지연 시간 설정
                  onComplete: () => {
                    // 마지막 요소 애니메이션이 끝난 후 a 요소 애니메이션 실행
                    if (index === se3BoxRefs.current.length - 1) {
                      gsap.to(section3aRef.current, {
                        opacity: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                      });
                    }
                  },
                }
              );
            });
          },
        });
      },
    });
    } else {
      if (section2Ref.current) observer.observe(section2Ref.current);
    }

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
              <h2 ref={section3h2Ref}>전체 팀을 위한 하나의 환경,</h2>
              <p ref={section3pRef} style={{ opacity: 0 }}>생산성을 높이고 협업을 강화할 수 있는<br/>
              일관된 개발 환경을 마련하세요.</p>
            </div>
            <div className="section3_bt">
            <div className="section3_bt_t">
                {/* Se3_box 컴포넌트들을 각각의 ref에 추가 */}
                <Se3_box 
                  ref={el => se3BoxRefs.current[0] = el}
                  se3_span_tx={'Cloud'} 
                  se3_h3_tx={'로컬보다 빠른,'} 
                  se3_p_tx={
                    <>
                      느린 빌드 시간과 컨텍스트 전환으로 인한<br/>
                      시간 낭비를 없애세요.<br />
                      우리의 강력한 VM은 로컬 환경보다<br />
                      최대 200배 빠르게 코드를 실행하며,<br />
                      모든 프로젝트를 2초 이내에 재개합니다.
                    </>
                  }
                />
                <Se3_box 
                  ref={el => se3BoxRefs.current[1] = el}
                  se3_span_tx={'Check'} 
                  se3_h3_tx={'모든 사람의 컴퓨터에서 작동,'} 
                  se3_p_tx={
                    <>
                      모든 개발자가 동일한 경험을 할 수 있도록<br />
                      각 지점을 클라우드가 아닌<br />
                      중앙 집중식 CDE에서 실행합니다.
                    </>
                  }
                />
                <Se3_box 
                  ref={el => se3BoxRefs.current[2] = el}
                  se3_span_tx={'group'} 
                  se3_h3_tx={'언제나 24시간 협업 가능,'} 
                  se3_p_tx={
                    <>
                      CodeSandbox는 팀 전체가 언제든지 동일한 환경에서<br />
                      실시간으로 코드 작업을 할 수 있는<br />
                      유일한 완전 협업 CDE입니다.
                    </>
                  }
                />
                <Se3_box 
                  ref={el => se3BoxRefs.current[3] = el}
                  se3_span_tx={'shield_locked'} 
                  se3_h3_tx={'신뢰성과 보안성,'} 
                  se3_p_tx={
                    <>
                      우리는 SOC 2 Type II를 준수하여<br />
                      코드와 데이터의 보안을 보장합니다.<br />
                      이를 통해 유연한 권한 설정, 접근 제어,<br />
                      보안 모니터링, 비공개 npm 등의 기능을 제공합니다.
                    </>
                  }
                />
              </div>
              <div className="section3_bt_bt">
                <Link ref={section3aRef} style={{ opacity: 0 }}  >
                  Start for free
                  <span className="material-symbols-rounded">
                  arrow_forward_ios
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="section4">
          <div className="section4_inner">
            <div className="section4_t">
              <span class="material-symbols-rounded">
                rebase_edit
              </span>
              <h2>워크플로를 가속화하세요.</h2>
              <p>효율적인 코드 리뷰를 위한 올인원 플랫폼으로 리뷰 주기를 단축해보세요.</p>
            </div>
            <div className="section4_bt">
              <div className='Se4_box'>
                <div className="Se4_box_t">
                  <div className="Se4_box_t_in">
                    <span class="material-symbols-rounded">
                        link
                      </span>
                      <h4>모든 PR과 브랜치가 URL입니다.</h4>
                      <p>2초 만에 시작되는 클라우드 개발 환경을 제공하고,<br/>
                      모든 코드 리뷰 도구를 하나의 플랫폼에 통합하세요.</p>
                  </div>
                   
                </div>
                <div className="Se4_box_bt">
                  <video autoPlay muted src={se4_bt1}></video>
                </div>
              </div>
              <div className='Se4_box'>
                <div className="Se4_box_t">
                  <div className="Se4_box_t_in">
                    <span class="material-symbols-rounded">
                        history
                      </span>
                      <h4>코드를 신속하게 검토하세요.</h4>
                      <p>매주 PR 리뷰에 드는 시간을 절약하세요.<br/>
                      코드, 테스트, 미리 보기를 확인하고<br/>
                      필요한 변경을 한 뒤 바로 병합하세요</p>
                  </div>
                   
                </div>
                <div className="Se4_box_bt">
                  <img src={se4_bt2} alt="se4_bt2" />
                </div>
              </div>
              <div className='Se4_box'>
                <div className="Se4_box_t">
                  <div className="Se4_box_t_in">
                    <span class="material-symbols-rounded">
                        Groups
                      </span>
                      <h4>팀 전체에 힘을 실어주세요.</h4>
                      <p>우리의 인스펙트 도구와 같은 접근 가능한 도구를 사용하여,<br/>
                      누구나 몇 번의 클릭만으로 커밋 변경을 할 수 있습니다.</p>
                  </div>
                   
                </div>
                <div className="Se4_box_bt">
                  <video autoPlay muted src={se4_bt3}></video>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main;
