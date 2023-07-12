import React from 'react';
import Zomato from '../images/zomato.png';
import NF from '../images/neighborfood.jpeg';
import KIS from '../images/kis.png';

import '../css/folder.css';

function Project({ folderOpen }) {
  const close = () => { folderOpen(false); };

  return (
    <div className="project">
      <header>
        <div className='header_container'>
          <button className="close" onClick={close}>
            <span class="material-symbols-rounded">close</span>
          </button>
          <button className="minimize">
            <span class="material-symbols-rounded">remove</span>
          </button>
          <button className="maximize">
            <span class="material-symbols-rounded">open_in_full</span>
          </button>
          <h1>프로젝트</h1>
        </div>
      </header>
      <section className='main'>
        <div className='projects'>
          <a href='https://github.com/seung-mii/zomato-clone' target="_blank" rel="noreferrer">
            <img src={Zomato} alt='zomato'/>
            <h3>Zomato</h3>
            <p>zomato 사이트 클론코딩</p>
          </a>
        </div>
        <div className='projects'>
          <a href='https://github.com/StupidTalkingPotatoes/KIS_frontend' target="_blank" rel="noreferrer">
            <img src={KIS} alt='kneeling bus information system'/>
            <h3>KIS</h3>
            <p>저상버스 시스템</p>
          </a>
        </div>
        <div className='projects'>
          <a href='https://github.com/Neighbor-Food/NF_frontend' target="_blank" rel="noreferrer">
            <img src={NF} alt='neighborfood'/>
            <h3>Neighborfood</h3>
            <p>음식 공동 주문 앱</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Project;
