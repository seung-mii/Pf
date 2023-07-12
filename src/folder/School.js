import React from 'react';
import school from '../images/school.png';
import Poster1 from '../images/school1.jpg';
import Poster2 from '../images/school2.png';
import Poster3 from '../images/school3.jpg';
import Poster4 from '../images/school4.png';

import '../css/folder.css';

function School({ folderOpen }) {
  const close = () => { folderOpen(false); };
  return (
    <div className="school">
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
          <h1>학교 생활</h1>
        </div>
      </header>
      <section className='main'>
        <img src={Poster3} alt='poster3'/>
        <img src={Poster4} alt='poster4'/>
        <img src={Poster1} alt='poster1'/>
        <img src={Poster2} alt='poster2' />
        <img src={school} className="council" alt='poster2' />
        <p>학생회 홍보국 부장 1년 국장 2년</p>
      </section>
    </div>
  );
}

export default School;
