import React, { useEffect, useRef, useState } from 'react';
import "./Main.scss";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Header from '../components/Header';
import { se1_t_rt, rol1, rol2, rol3, rol4, rol5, rol6, rol7, rol8, rol9, se2_t, se3_t, se4_bt1, se4_bt2, se4_bt3,se6_github_ic,se7_ic1,se7_ic2,se7_ic3,se7_ic4,se7_ic5,se7_ic6,se7_ic8,se7_ic9,se8_person1 } from '../components/image';
import Se2_box from '../components/Se2_box';
import Se3_box from '../components/Se3_box';
import Se6_box from '../components/Se6_box';
import Se7_box from '../components/Se7_box';
import Se8_box from '../components/Se8_box';
import Se8_count from '../components/Se8_count';
import Footer from '../components/Footer';


gsap.registerPlugin(TextPlugin);

const Main = () => {
  const h1Ref1 = useRef(null);
  const h2Ref1 = useRef(null);
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const imgRef = useRef(null);
  const rolRef = useRef(null);
  const section2Ref = useRef(null);
  const section3h2Ref = useRef(null);
  const section3pRef = useRef(null);
  const section3aRef = useRef(null);
  const se3BoxRefs = useRef([]);
  const section4Ref = useRef(null);
  const se4BoxRefs = useRef([]);
  const [isFixed, setIsFixed] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const section4TopRef = useRef(0);

  useEffect(() => {
    // 기존 애니메이션 설정
    const h1Chars1 = h1Ref1.current.innerText.split("").map((char1) =>
      `<span class="char1">${char1}</span>`
    ).join("");
    h1Ref1.current.innerHTML = h1Chars1;

    const h2Chars1 = h2Ref1.current.innerText.split("").map((char1) =>
      `<span class="char1">${char1}</span>`
    ).join("");
    h2Ref1.current.innerHTML = h2Chars1;

    const pText1 = "CodeSandbox는 2초 만에 재개되는 연중무휴".split("").map((char2) =>
      char2 === " " ? `<span class="char2">&nbsp;</span>` : `<span class="char2">${char2}</span>`
    ).join("");
    pRef1.current.innerHTML = pText1;

    const pText2 = "협업 클라우드 개발 환경(CDE)을 제공합니다.".split("").map((char2) =>
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
    section3h2Ref.current.innerText = scrambledText;

    // Intersection Observer 설정
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();

          // GSAP 애니메이션 설정
          const h2Animation = gsap.timeline();
          h2Animation.to(section3h2Ref.current, {
            duration: 2,
            text: originalText,
            ease: 'none',
            onComplete: () => {
              gsap.to(section3pRef.current, {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => {
                  se3BoxRefs.current.forEach((ref, index) => {
                    gsap.fromTo(
                      ref,
                      { y: 50, opacity: 0 },
                      {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.out',
                        delay: index * 0.3,
                        onComplete: () => {
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
      { threshold: 0.9 }
    );

    if (window.scrollY > section2Ref.current.offsetTop + section2Ref.current.offsetHeight * 0.8) {
      setShouldAnimate(true);

      gsap.to(section3h2Ref.current, {
        duration: 1,
        text: originalText,
        ease: 'none',
        onComplete: () => {
          gsap.to(section3pRef.current, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
              se3BoxRefs.current.forEach((ref, index) => {
                gsap.fromTo(
                  ref,
                  { y: 50, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    delay: index * 0.3,
                    onComplete: () => {
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

    const handleScroll = () => {
      const section4Top = section4Ref.current.offsetTop; // 섹션4의 시작 위치
      const section4Height = section4Ref.current.offsetHeight; // 섹션4의 높이
      const section5Top = document.getElementById('section5').offsetTop; // 섹션5의 시작 위치
      const section5Height = document.getElementById('section5').offsetHeight; // 섹션5의 높이
      const scrollY = window.scrollY; // 현재 스크롤 위치
      const section3Bottom = document.getElementById('section3').offsetTop + document.getElementById('section3').offsetHeight; // 섹션3의 끝 위치
        
      // 섹션4를 고정시키는 로직
      if (scrollY >= section3Bottom && scrollY < section5Top) {
        section4Ref.current.style.position = 'fixed';
        section4Ref.current.style.top = '0';
      } else {
        section4Ref.current.style.position = 'relative';
      }
    
      // 섹션 5의 시작 위치부터 높이까지의 스크롤 기준으로 애니메이션 설정
      const relativeScroll = scrollY - section3Bottom; // section4의 중간부터 스크롤 위치를 계산
      const relativeProgress = relativeScroll / section4Height; // 스크롤 진행 비율 (0 ~ 1)
    
      // 애니메이션 초기화
      gsap.killTweensOf([se4BoxRefs.current[0], se4BoxRefs.current[1], se4BoxRefs.current[2]]);
    
      // 애니메이션 상태에 대한 조건 설정
      if (relativeProgress >= 0.6) {
        // 마지막 구간 (80% ~ 100%)
        gsap.to(se4BoxRefs.current[0], { opacity: 0.1, left: '30%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[1], { opacity: 0.1, left: '15%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[2], { opacity: 1, left: '0%', duration: 0.5, ease: 'power2.out' });
      
      } else if (relativeProgress >= 0.2) {
        // 시작 구간 (20% ~ 50%)
        gsap.to(se4BoxRefs.current[0], { opacity: 0.1, left: '15%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[1], { opacity: 1, left: '0%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[2], { opacity: 0, left: '0%', duration: 0.5, ease: 'power2.out' });
      } else {
        // 초기 상태 (0% ~ 20%)
        gsap.to(se4BoxRefs.current[0], { opacity: 1, left: '0%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[1], { opacity: 0, left: '0%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[2], { opacity: 0, left: '0%', duration: 0.5, ease: 'power2.out' });
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
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
          <div className="section4_inner"  ref={section4Ref} >
            <div className="section4_t">
              <span class="material-symbols-rounded">
                rebase_edit
              </span>
              <h2>워크플로를 가속화하세요.</h2>
              <p>효율적인 코드 리뷰를 위한 올인원 플랫폼으로 리뷰 주기를 단축해보세요.</p>
            </div>
            <div className="section4_bt">
              <div className="Se4_box" ref={el => se4BoxRefs.current[0] = el}>
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
              <div className="Se4_box" ref={el => se4BoxRefs.current[1] = el}>
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
              <div className="Se4_box" ref={el => se4BoxRefs.current[2] = el}>
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
        {/* 여백용 */}
        <div id="section5">

        </div>
        <div id="section6">
            <div className="section6_inner">
              <div className="section6_t">
                <p>연결 후 바로 사용해보세요</p>
                <h2>귀하의 개발 환경에 자연스럽게 통합되어,<br/>
                추가 설정이나 복잡한 구성 없이 바로 사용할 수 있습니다.</h2>
                <span>클라우드 개발의 모든 혜택을 귀하의 현재 환경과 완벽하게 조화를 이루며 누릴 수 있습니다.<br/>
                추가적인 설정 없이도 안정적으로 작동하며, 기존 개발 환경에 맞춰 최적화된 성능을 제공합니다.</span>
              </div>
              <div className="section6_bt">
                <Se6_box se6_span_tx={'devices'} se6_h3_tx={<>원하는 에디터를 자유롭게 사용하세요.</>} se6_a_tx={'VS Code 확장 프로그램'} se6_p_tx={<>VS Code와 우리의 웹 에디터를 자유롭게 전환하며<br/>코드 작성과 협업을 끊김 없이 이어가세요.</>} />
                <Se6_box se6_h3_tx={'GitHub 통합 기능'} se6_a_tx={'저희 GitHub 앱을 설치하세요.'} se6_p_tx={<>PR(풀 리퀘스트)를 신속하게 검토하고<br/>자동 배포 미리보기를 받아보세요.</>} >
                  <img src={se6_github_ic} alt="se6_github_ic" />
                </Se6_box>
                <Se6_box se6_h3_tx={'사전 구성된 환경'} se6_a_tx={'더 알아보기'} se6_p_tx={<>우리는 Dev 컨테이너를 사용하여 필요한 도구,<br/>라이브러리, 종속성 등이 모두<br/>사전 구성된 환경을 제공합니다.<br/>이를 통해 번거로운 설정 과정 없이<br/>바로 코딩을 시작할 수 있습니다</>} />
              </div>
            </div>
        </div>
        <div id="section7">
          <div className="section7_inner">
            <div className="section7_t">
                <p>템플릿의 세계,</p>
                <h2>당신이 선호하는<br/>
                스택으로 시작하세요.</h2>
            </div>
            <div className="section7_bt">
              <div className="section7_bt_t">
                <Link>
                  <Se7_box se7_ic={se7_ic1} se7_h5_tx={'AI Code Completion'} se7_p_tx={<>Codeium으로 강화된 내장 코드 완성 기능을<br/>사용하여 더 빠르게 코드를 작성하세요.</>} se7_small={'1.7k'}/>
                </Link>
                <Link>
                  <Se7_box se7_ic={se7_ic2} se7_h5_tx={'AI Code Completion'} se7_p_tx={<>Codeium으로 강화된 내장 코드 완성 기능을<br/>사용하여 더 빠르게 코드를 작성하세요.</>} se7_small={'267.7k'}/>
                </Link>
                <Link>
                  <Se7_box se7_ic={se7_ic3} se7_h5_tx={'AI Code Completion'} se7_p_tx={<>Codeium으로 강화된 내장 코드 완성 기능을<br/>사용하여 더 빠르게 코드를 작성하세요.</>} se7_small={'63.1k'}/>
                </Link>
                <Link>
                  <Se7_box se7_ic={se7_ic4} se7_h5_tx={'AI Code Completion'} se7_p_tx={<>Codeium으로 강화된 내장 코드 완성 기능을<br/>사용하여 더 빠르게 코드를 작성하세요.</>} se7_small={'18.8k'}/>
                </Link>
                <Link>
                  <Se7_box se7_ic={se7_ic5} se7_h5_tx={'AI Code Completion'} se7_p_tx={<>Codeium으로 강화된 내장 코드 완성 기능을<br/>사용하여 더 빠르게 코드를 작성하세요.</>} se7_small={'15.8k'}/>
                </Link>
                <Link>
                  <Se7_box se7_ic={se7_ic6} se7_h5_tx={'AI Code Completion'} se7_p_tx={<>Codeium으로 강화된 내장 코드 완성 기능을<br/>사용하여 더 빠르게 코드를 작성하세요.</>} se7_small={'79.9k'}/>
                </Link>
                <Link>
                  <Se7_box se7_ic={se7_ic6} se7_h5_tx={'AI Code Completion'} se7_p_tx={<>Codeium으로 강화된 내장 코드 완성 기능을<br/>사용하여 더 빠르게 코드를 작성하세요.</>} se7_small={'1.1k'}/>
                </Link>
                <Link>
                  <Se7_box se7_ic={se7_ic8} se7_h5_tx={'AI Code Completion'} se7_p_tx={<>Codeium으로 강화된 내장 코드 완성 기능을<br/>사용하여 더 빠르게 코드를 작성하세요.</>} se7_small={'85.5k'}/>
                </Link>
                <Link>
                  <Se7_box se7_ic={se7_ic9} se7_h5_tx={'AI Code Completion'} se7_p_tx={<>Codeium으로 강화된 내장 코드 완성 기능을<br/>사용하여 더 빠르게 코드를 작성하세요.</>} se7_small={'0'}/>
                </Link>
              </div>
              <div className="section7_bt_bt">
                <Link>
                  Explore templates
                </Link>
              </div>
            </div>

          </div>
          
        </div>
        <div id="section8">
         <div className="section8_inner">
          <div className="section8_t">
            <div className="section8_t_t"> {/* 왼쪽으로 회전할 박스들 */}
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              {/* 동일한 박스가 반복됩니다 */}
            </div>
            <div className="section8_t_bt"> {/* 오른쪽으로 회전할 박스들 */}
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>It feels much more like<br/>my local environment.</>} se8_img={se8_person1} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
                      
              {/* 동일한 박스가 반복됩니다 */}
            </div>
          </div>
          <div className="section8_bt">
            <Se8_count Se8_count_h3={'400만 +'} Se8_count_p={'유저들'}/>
            <Se8_count Se8_count_h3={'10,000+'} Se8_count_p={'연결된 저장소'}/>
            <Se8_count Se8_count_h3={'20,000+'} Se8_count_p={'단체'}/>
            <Se8_count Se8_count_h3={'100만 +'} Se8_count_p={'작성한 코드 라인'}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Main;
