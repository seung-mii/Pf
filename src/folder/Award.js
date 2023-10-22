import React from 'react';
import Skillspan from '../images/Skillspan_award.png';
import KIS from '../images/KIS_award.png';
import NF from '../images/NF_award.png';
import KIS2 from '../images/KIS_award2.jpg';

import '../css/folder.css';

function Award({ folderOpen }) {
  const close = () => { folderOpen(false); };

  return (
    <div className="award">
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
          <h1>수상 경력</h1>
        </div>
      </header>
      <section className='main'>
        <div className='crape'>
          <img src={Skillspan} alt='Skillspan_award'/>
          <p>"EMSI 기반 Korean IT SkillBase 구축 및 SkillNER Prototype 설계"</p>
        </div>
        <div className='crape2'>
          <img src={KIS} alt='KIS_award' />
          <img src={KIS2} alt='KIS_award2' />
          <p>"교통약자를 위한 TAGO API 기반 저상버스 정보 시스템"</p>
        </div>
        <div className='crape'>
          <img src={NF} alt='NF_award' />
          <p>"음식 공동 주문 앱"</p>
        </div>
      </section>
    </div>
  );
}

export default Award;
