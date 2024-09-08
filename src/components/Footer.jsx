import React, { useState } from 'react';
import './Footer.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Logo_wh,Footer_t_bt_back,Logo,github_ic,github_ic_hover,twitter_ic,twitter_ic_hover,earth_ic,earth_ic_hover,youtube_ic,youtube_ic_hover } from './image.js';

const Footer = () => {
  const [githubImage, setGithubImage] = useState(github_ic);
  const [twitterImage, setTwitterImage] = useState(twitter_ic);
  const [earthImage, setEarthImage] = useState(earth_ic);
  const [youtubeImage, setYoutubeImage] = useState(youtube_ic);
  const [basiclogo, setBasiclogo] = useState(Logo);
  
  return (
   <footer id='Footer'>
      <div id="Footer_t">
        <div className="Footer_inner">
          <div className="Footer_t_t">
            <h1>미래를 만드는<br/>여정에 동참하세요.</h1>
            <Link to={'https://codesandbox.io/templates'}>
             무료로 시작하세요
            </Link>
          </div>
          <div className="Footer_t_bt">
            <img src={Footer_t_bt_back} alt="Footer_t_bt_back" />
          </div>
        </div>
      </div>
      <div id="Footer_bt">
        <div className="Footer_inner">
          <div className="Footer_bt_t">
            <div className="Footer_bt_t_lt">
              <Link to="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={basiclogo} alt="Logo"
                  onMouseEnter={() => setBasiclogo(Logo_wh)} 
                  onMouseLeave={() => setBasiclogo(Logo)} 
                />
              </Link>
          
            </div>
            <div className="Footer_bt_t_rt">
              <div class="footer-section">
                 <div class="footer-column">
                   <h4>사용 사례</h4>
                   <ul>
                     <li><a href="#">클라우드 개발 환경</a></li>
                     <li><a href="#">코드 리뷰</a></li>
                     <li><a href="#">샌드박스에서 코드 작성</a></li>
                     <li><a href="#">학습 및 실험</a></li>
                     <li><a href="#">코딩 연습</a></li>
                     <li><a href="#">즉각적인 피드백</a></li>
                   </ul>
                 </div>

                 <div class="footer-column">
                   <h4>에코시스템</h4>
                   <ul>
                     <li><a href="#">기능</a></li>
                     <li><a href="#">VS Code 확장 프로그램</a></li>
                     <li><a href="#">샌드팩</a></li>
                     <li><a href="#">상태</a></li>
                     <li><a href="#">엔터프라이즈</a></li>
                     <li><a href="#">가격</a></li>
                   </ul>
                 </div>

                 <div class="footer-column">
                   <h4>탐색</h4>
                   <ul>
                     <li><a href="#">발견하기</a></li>
                     <li><a href="#">변경 로그</a></li>
                     <li><a href="#">문서</a></li>
                     <li><a href="#">블로그</a></li>
                   </ul>
                 </div>

                 <div class="footer-column">
                   <h4>회사</h4>
                   <ul>
                     <li><a href="#">소개</a></li>
                     <li><a href="#">지원</a></li>
                     <li><a href="#">채용</a></li>
                     <li><a href="#">브랜드 키트</a></li>
                   </ul>
                 </div>
               </div>
            </div>
          </div>
          <div className="Footer_bt_bt">
            <div className="Footer_bt_t_lt">
              <span>Copyright © 2024 CodeSandbox B.V. All rights reserved.</span>
              <p><Link>Terms of Use</Link> <Link>Privacy & Cookie Policy</Link></p>
            </div>
            <div className="Footer_bt_t_rt">
              <div className="ic_warp">
                <Link>
                  <img 
                    src={githubImage} 
                    alt="github_ic" 
                    onMouseEnter={() => setGithubImage(github_ic_hover)} 
                    onMouseLeave={() => setGithubImage(github_ic)} 
                  />
                </Link>
                <Link>
                  <img 
                      src={twitterImage} 
                      alt="twitter_ic" 
                      onMouseEnter={() => setTwitterImage(twitter_ic_hover)} 
                      onMouseLeave={() => setTwitterImage(twitter_ic)} 
                  />
                </Link>
                <Link>
                  <img 
                    src={earthImage} 
                    alt="earth_ic" 
                    onMouseEnter={() => setEarthImage(earth_ic_hover)} 
                    onMouseLeave={() => setEarthImage(earth_ic)} 
                  />
                </Link>
                <Link>
                  <img 
                    src={youtubeImage} 
                    alt="youtube_ic" 
                    onMouseEnter={() => setYoutubeImage(youtube_ic_hover)} 
                    onMouseLeave={() => setYoutubeImage(youtube_ic)} 
                  />
                </Link>
              </div>
            
            </div>
          </div>
        </div>
      </div>
   </footer>
  );
};

export default Footer;
