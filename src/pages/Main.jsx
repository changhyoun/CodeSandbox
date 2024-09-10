import React, { useEffect, useRef, useState } from 'react';
import "./Main.scss";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Header from '../components/Header';
import { se1_t_rt, rol1, rol2, rol3, rol4, rol5, rol6, rol7, rol8, rol9, se2_t, se3_t, se4_bt1, se4_bt2, se4_bt3, se6_github_ic, se7_ic1, se7_ic2, se7_ic3, se7_ic4, se7_ic5, se7_ic6, se7_ic8, se7_ic9, se8_person1 } from '../components/image';
import Se2_box from '../components/Se2_box';
import Se3_box from '../components/Se3_box';
import Se6_box from '../components/Se6_box';
import Se7_box from '../components/Se7_box';
import Se8_box from '../components/Se8_box';
import Se8_count from '../components/Se8_count';
import Footer from '../components/Footer';
import "../components/Responsive.scss"

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
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const goFree = () => {
    window.open('https://codesandbox.io/templates', '_blank');
  };
  const LearnMore = () => {
    window.open('https://codesandbox.io/cloud-development-environments', '_blank');
  };

  const goLogin = () => {
    window.location.href = 'https://codesandbox.io/signin?utm_source=landingpage';
  };

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

     // 애니메이션을 제어할 수 있도록 변수에 저장
     const rollingAnimation = gsap.to(images, {
      x: `-=${totalWidth}`,
      ease: 'none',
      duration: 240,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(value => parseFloat(value) % totalWidth)
      }
    });

    // 호버 이벤트 리스너 추가
    rolRef.current.addEventListener('mouseenter', () => rollingAnimation.pause());
    rolRef.current.addEventListener('mouseleave', () => rollingAnimation.resume());

    // h2를 특수 문자로 초기화
    const originalText = "전체 팀을 위한 하나의 환경,";
    const scrambledText = originalText.split('').map(() =>
      String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33))
    ).join('');
    section3h2Ref.current.innerText = scrambledText;

    console.log('h2Ref1',h2Ref1.current)
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

      // 800px 이하의 화면 크기에서는 애니메이션을 무조건 true로 설정
  const isMobile = window.innerWidth <= 850;
  
  if (isMobile || window.scrollY > section2Ref.current.offsetTop + section2Ref.current.offsetHeight * 0.8) {
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
        gsap.to(se4BoxRefs.current[0], { opacity: 0.1, top: '30%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[1], { opacity: 0.1, top: '15%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[2], { opacity: 1, top: '0%', duration: 0.5, ease: 'power2.out' });
      
      } else if (relativeProgress >= 0.2) {
        // 시작 구간 (20% ~ 50%)
        gsap.to(se4BoxRefs.current[0], { opacity: 0.1, top: '15%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[1], { opacity: 1, top: '0%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[2], { opacity: 0, top: '0%', duration: 0.5, ease: 'power2.out' });
      } else {
        // 초기 상태 (0% ~ 20%)
        gsap.to(se4BoxRefs.current[0], { opacity: 1, top: '0%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[1], { opacity: 0, top: '0%', duration: 0.5, ease: 'power2.out' });
        gsap.to(se4BoxRefs.current[2], { opacity: 0, top: '0%', duration: 0.5, ease: 'power2.out' });
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
                           <button onClick={goFree} >
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
              <button onClick={LearnMore}>
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
                      모든 개발자가 동일한<br/>
                      경험을 할 수 있도록<br/>
                      각 지점을 클라우드가 아닌<br />
                      중앙 집중식 CDE에서<br/>
                      실행합니다.
                    </>
                  }
                />
                <Se3_box 
                  ref={el => se3BoxRefs.current[2] = el}
                  se3_span_tx={'group'} 
                  se3_h3_tx={'언제나 24시간 협업 가능,'} 
                  se3_p_tx={
                    <>
                      CodeSandbox는 팀 전체가<br />
                      언제든지 동일한 환경에서<br />
                      실시간으로 코드 작업을<br />
                      할 수 있는 유일한<br />
                      완전 협업 CDE입니다.
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
                      이를 통해 유연한 권한 설정,<br />
                      접근 제어, 보안 모니터링,<br />
                      비공개 npm 등의 기능을 제공합니다.
                    </>
                  }
                />
              </div>
              <div className="section3_bt_bt">
                <Link target='_blank' to={"https://codesandbox.io/signin?utm_source=landingpage"} ref={section3aRef} style={{ opacity: 0 }}  >
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
          <div className="section4_inner" ref={section4Ref} >
            <div className="section4_t">
              <span className="material-symbols-rounded">
                rebase_edit
              </span>
              <h2>워크플로를 가속화하세요.</h2>
              <p>효율적인 코드 리뷰를 위한 올인원 플랫폼으로 리뷰 주기를 단축해보세요.</p>
            </div>
            <div className="section4_bt">
              <div className="Se4_box" ref={el => se4BoxRefs.current[0] = el}>
                <div className="Se4_box_t">
                  <div className="Se4_box_t_in">
                    <span className="material-symbols-rounded">
                        link
                      </span>
                      <h4>모든 PR과 브랜치가 URL입니다.</h4>
                      <p>2초 만에 시작되는 클라우드 개발 환경을 제공하고,<br/>
                      모든 코드 리뷰 도구를 하나의 플랫폼에 통합하세요.</p>
                  </div>
                   
                </div>
                <div className="Se4_box_bt">
                  <video autoPlay muted playsInline src={se4_bt1}></video>
                </div>
              </div>
              <div className="Se4_box" ref={el => se4BoxRefs.current[1] = el}>
                <div className="Se4_box_t">
                  <div className="Se4_box_t_in">
                    <span className="material-symbols-rounded">
                        history
                      </span>
                      <h4>코드를 신속하게 검토하세요.</h4>
                      <p>매주 PR 리뷰에 드는 시간을 절약하세요.<br/>
                      코드, 테스트, 미리 보기를 확인하고 필요한 변경을 한 뒤 바로 병합하세요</p>
                  </div>
                   
                </div>
                <div className="Se4_box_bt">
                  <img src={se4_bt2} alt="se4_bt2" />
                </div>
              </div>
              <div className="Se4_box" ref={el => se4BoxRefs.current[2] = el}>
                <div className="Se4_box_t">
                  <div className="Se4_box_t_in">
                    <span className="material-symbols-rounded">
                        Groups
                      </span>
                      <h4>팀 전체에 힘을 실어주세요.</h4>
                      <p>우리의 인스펙트 도구와 같은 접근 가능한 도구를 사용하여,<br/>
                      누구나 몇 번의 클릭만으로 커밋 변경을 할 수 있습니다.</p>
                  </div>
                   
                </div>
                <div className="Se4_box_bt">
                  <video playsInline autoPlay muted src={se4_bt3}></video>
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
                <Se6_box se6_a={'https://codesandbox.io/vscode-extension'} se6_span_tx={'devices'} se6_h3_tx={<>원하는 에디터를 자유롭게 사용하세요.</>} se6_a_tx={'VS Code 확장 프로그램'} se6_p_tx={<>VS Code와 우리의 웹 에디터를 자유롭게 전환하며<br/>코드 작성과 협업을 끊김 없이 이어가세요.</>} />
                <Se6_box se6_a={'https://codesandbox.io/docs/learn/integrations/github-app'} se6_h3_tx={'GitHub 통합 기능'} se6_a_tx={'저희 GitHub 앱을 설치하세요.'} se6_p_tx={<>PR(풀 리퀘스트)를 신속하게 검토하고<br/>자동 배포 미리보기를 받아보세요.</>} >
                  <img src={se6_github_ic} alt="se6_github_ic" />
                </Se6_box>
                <Se6_box se6_a={'https://codesandbox.io/docs/tutorial/getting-started-with-dev-containers'} se6_h3_tx={'사전 구성된 환경'} se6_a_tx={'더 알아보기'} se6_p_tx={<>우리는 Dev 컨테이너를 사용하여 필요한 도구,<br/>라이브러리, 종속성 등이 모두<br/>사전 구성된 환경을 제공합니다.<br/>이를 통해 번거로운 설정 과정 없이<br/>바로 코딩을 시작할 수 있습니다</>} />
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
                <Link target='_blank' to={'https://codesandbox.io/templates/codeium'}>
                  <Se7_box se7_ic={se7_ic1} se7_h5_tx={'AI Code Completion'} se7_p_tx={<>Codeium으로 강화된 내장 코드 완성 기능을<br/>사용하여 더 빠르게 코드를 작성하세요.</>} se7_small={'1.7k'}/>
                </Link>
                <Link target='_blank' to={'https://codesandbox.io/templates/angular'}>
                  <Se7_box se7_ic={se7_ic2} se7_h5_tx={'Angular'} se7_p_tx={<>Angular를 빠르게 시작하는 가장 쉬운 방법이예요!</>} se7_small={'267.7k'}/>
                </Link>
                <Link target='_blank' to={'https://codesandbox.io/templates/docker'}>
                  <Se7_box se7_ic={se7_ic3} se7_h5_tx={'Docker'} se7_p_tx={<>CodeSandbox에서 Docker를 가장 쉽게 시작하는 방법이예요.</>} se7_small={'63.1k'}/>
                </Link>
                <Link target='_blank' to={'https://codesandbox.io/templates/html-css'}>
                  <Se7_box se7_ic={se7_ic4} se7_h5_tx={'HTML + CSS'} se7_p_tx={<>HTML과 CSS를 위한 템플릿.</>} se7_small={'18.8k'}/>
                </Link>
                <Link target='_blank' to={'https://codesandbox.io/templates/javascript'}>
                  <Se7_box se7_ic={se7_ic5} se7_h5_tx={'JavaScript'} se7_p_tx={<>JavaScript를 위한 템플릿.</>} se7_small={'15.8k'}/>
                </Link>
                <Link target='_blank' to={'https://codesandbox.io/templates/nextjs'}>
                  <Se7_box se7_ic={se7_ic6} se7_h5_tx={'Next.js'} se7_p_tx={<>CodeSandbox 팀이 제공하는 공식 Next.js 템플릿.</>} se7_small={'79.9k'}/>
                </Link>
                <Link target='_blank' to={'https://codesandbox.io/templates/postgres-drizzle-nextjs'}>
                  <Se7_box se7_ic={se7_ic6} se7_h5_tx={'Next.js + Postgres'} se7_p_tx={<>Next.js, Postgres, Drizzle-ORM을 사용하는<br/>풀스택 애플리케이션의 완벽한 스타터 템플릿.</>} se7_small={'1.1k'}/>
                </Link>
                <Link target='_blank' to={'https://codesandbox.io/templates/python'}>
                  <Se7_box se7_ic={se7_ic8} se7_h5_tx={'Python'} se7_p_tx={<>CodeSandbox용 Python 스타터 템플릿.</>} se7_small={'85.5k'}/>
                </Link>
                <Link target='_blank' to={'https://codesandbox.io/templates/react-vite'}>
                  <Se7_box se7_ic={se7_ic9} se7_h5_tx={'React (JS)'} se7_p_tx={<>React 애플리케이션을 가장 빠르게 시작하는 방법!<br/>서버에서는 Vite를, 브라우저에서는 create-react-app을 사용합니다.</>} se7_small={'0'}/>
                </Link>
              </div>
              <div className="section7_bt_bt">
                <Link target='_blank' to={"https://codesandbox.io/templates"}>
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
              <Se8_box se8_h3_tx={<>제 로컬환경과 보다 더<br/>좋게 느껴지네요.</>} se8_img={'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>팀원들과의 협업이 훨씬 쉬워졌어요.<br/>실시간으로 코드를 공유하고 수정할 수 있어서 회의나 피드백이 훨씬 더 효율적이에요.</>} se8_img={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'홍길동'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>아이디어를 빠르게 시각화하고 테스트할 수 있어요.<br/>새로운 프로젝트의 프로토타입을 만드는 데 CodeSandbox만큼 빠르고 쉬운 도구는 없을 거예요.</>} se8_img={'https://images.unsplash.com/photo-1706373193792-52fc0b8b22e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'김미루'} se8_span_tx={'퍼블리셔'}  />
              <Se8_box se8_h3_tx={<>설치 없이 브라우저에서 바로 작업할 수 있어서 언제 어디서나 코딩할 수 있어요.<br/>출퇴근길에도 코드를 손볼 수 있어서 너무 좋아요!</>} se8_img={'https://images.unsplash.com/photo-1577880216142-8549e9488dad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'한동근'} se8_span_tx={'백엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>제 로컬환경과 보다 더 좋게 느껴지네요.</>} se8_img={'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'김창현'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>팀원들과의 협업이 훨씬 쉬워졌어요.<br/>실시간으로 코드를 공유하고 수정할 수 있어서 회의나 피드백이 훨씬 더 효율적이에요.</>} se8_img={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'홍길동'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>아이디어를 빠르게 시각화하고 테스트할 수 있어요.<br/>새로운 프로젝트의 프로토타입을 만드는 데 CodeSandbox만큼 빠르고 쉬운 도구는 없을 거예요.</>} se8_img={'https://images.unsplash.com/photo-1706373193792-52fc0b8b22e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'김미루'} se8_span_tx={'퍼블리셔'}  />
              <Se8_box se8_h3_tx={<>설치 없이 브라우저에서 바로 작업할 수 있어서 언제 어디서나 코딩할 수 있어요.<br/>출퇴근길에도 코드를 손볼 수 있어서 너무 좋아요!</>} se8_img={'https://images.unsplash.com/photo-1577880216142-8549e9488dad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'한동근'} se8_span_tx={'백엔드 개발자'}  />
              
              {/* 동일한 박스가 반복됩니다 */}
            </div>
            <div className="section8_t_bt"> {/* 오른쪽으로 회전할 박스들 */}
              <Se8_box se8_h3_tx={<>여러 프레임워크와 라이브러리 템플릿을 지원해서<br/>새 프로젝트를 시작할 때 많은 시간을 절약할 수 있었어요.</>} se8_img={'https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'한수희'} se8_span_tx={'풀스텍 개발자'}  />
              <Se8_box se8_h3_tx={<>코드를 작성하는 즉시 자동으로 저장돼서 실수로 저장하지 못해도 걱정할 필요가 없어요.<br/>덕분에 프로젝트의 진행 속도가 빨라졌어요</>} se8_img={'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'이철희'} se8_span_tx={'블록체인 개발자'}  />
              <Se8_box se8_h3_tx={<>VS Code와 비슷한 확장 기능들을 사용할 수 있어서 익숙한 개발 환경처럼 느껴져요.<br/>플러그인 덕분에 생산성이 더 높아졌어요.</>} se8_img={'https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'김나희'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>CodeSandbox는 무료로 클라우드 서버를 제공해서<br/>개발과 테스트를 할 수 있어요.</>} se8_img={'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'김재덕'} se8_span_tx={'백엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>여러 프레임워크와 라이브러리 템플릿을 지원해서<br/>새 프로젝트를 시작할 때 많은 시간을 절약할 수 있었어요.</>} se8_img={'https://images.unsplash.com/photo-1539614474468-f423a2d2270c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'한수희'} se8_span_tx={'풀스텍 개발자'}  />
              <Se8_box se8_h3_tx={<>코드를 작성하는 즉시 자동으로 저장돼서 실수로 저장하지 못해도 걱정할 필요가 없어요.<br/>덕분에 프로젝트의 진행 속도가 빨라졌어요</>} se8_img={'https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'이철희'} se8_span_tx={'블록체인 개발자'}  />
              <Se8_box se8_h3_tx={<>VS Code와 비슷한 확장 기능들을 사용할 수 있어서 익숙한 개발 환경처럼 느껴져요.<br/>플러그인 덕분에 생산성이 더 높아졌어요.</>} se8_img={'https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'김나희'} se8_span_tx={'프론트엔드 개발자'}  />
              <Se8_box se8_h3_tx={<>CodeSandbox는 무료로 클라우드 서버를 제공해서<br/>개발과 테스트를 할 수 있어요.</>} se8_img={'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} se8_p_tx={'김재덕'} se8_span_tx={'백엔드 개발자'}  />
          
                      
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
