import React, { useRef } from 'react';
import "./Menu.scss";
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faMessage } from '@fortawesome/free-regular-svg-icons';
import SubMenuItem from './SubMenuItem';
import { faBookOpenReader, faBoxesPacking, faSwatchbook, faUserGraduate, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons/faFileCircleCheck';

const Menu = () => {
  const submenuRef1 = useRef(null);
  const submenuRef2 = useRef(null);

  const handleMouseEnter1 = () => {
    gsap.to(submenuRef1.current, {
      opacity: 1,
      visibility: 'visible',
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave1 = () => {
    gsap.to(submenuRef1.current, {
      opacity: 0,
      visibility: 'hidden',
      y: -20,
      duration: 0.5,
      ease: 'power2.in',
    });
  };

  const handleMouseEnter2 = () => {
    gsap.to(submenuRef2.current, {
      opacity: 1,
      visibility: 'visible',
      y: 0,
      duration: 0.5,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave2 = () => {
    gsap.to(submenuRef2.current, {
      opacity: 0,
      visibility: 'hidden',
      y: -20,
      duration: 0.5,
      ease: 'power1.in',
    });
  };

  return (
    <div className='Menu'>
      <ul>
        <li>
          <Link to="https://codesandbox.io/features">특징</Link>
        </li>
        <li
          className="has-submenu"
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <Link to="https://codesandbox.io/use-cases">사용 사례</Link>
          <div className="submenu-content" ref={submenuRef1}>
            <Link to="https://codesandbox.io/cloud-development-environments">
              <SubMenuItem
                  icon={faBoxesPacking}
                  title="클라우드 개발 환경"
                  description="모든 개발자에게 2배 더 빠른 머신을 제공하세요"
                />
            </Link>
            <Link to="https://codesandbox.io/improve-code-reviews">
              <SubMenuItem
                  icon={faMessage}
                  title="코드 리뷰"
                  description="흐름을 끊지 않고 PR을 검토하세요."
                />
            </Link>
            <Link to="https://codesandbox.io/code-in-sandboxes">
              <SubMenuItem
                  icon={faFileCode}
                  title="샌드박스의 코드"
                  description="기록적인 시간 내에 아이디어의 프로토타입을 제작해 보세요."
                />
            </Link>
            <Link to={"https://codesandbox.io/learn-and-experiment"}>
              <SubMenuItem
                  icon={faUserGraduate}
                  title="학습 및 실험"
                  description="프레임워크를 사용해 보고 새로운 도구를 실험해보세요."
                />
            </Link>
          </div>
        </li>
        <li
          className="has-submenu"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <Link to="https://codesandbox.io/resources">자원</Link>
          <div className="submenu-content" ref={submenuRef2}>
            <Link to={"https://codesandbox.io/templates"}>
              <SubMenuItem
                  icon={faSwatchbook}
                  title="템플릿"
                  description="다음 프로젝트에 대한 영감을 찾아보세요."
                />
            </Link>
            <Link to="https://codesandbox.io/blog">
              <SubMenuItem
                  icon={faBookOpenReader}
                  title="블로그"
                  description="우리 팀의 뉴스와 통찰력을 읽어보세요."
                />
            </Link>
            <Link to="https://login.circle.so/sign_in?request_host=www.codesandbox.community#email">
              <SubMenuItem
                  icon={faUserGroup}
                  title="공동체"
                  description="다른 커뮤니티 구성원과 교류하세요."
                />
            </Link>
            <Link to="https://codesandbox.io/changelog">
              <SubMenuItem
                  icon={faFileCircleCheck}
                  title="변경 내역"
                  description="최신 기능과 수정 사항을 확인하세요."
                />
            </Link>
          </div>
        </li>
        <li>
          <Link target='_blank' to="https://codesandbox.io/docs/learn">문서</Link>
        </li>
        <li>
          <Link to="https://codesandbox.io/support">지원</Link>
        </li>
        <li>
          <Link to="https://codesandbox.io/pricing">가격</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
