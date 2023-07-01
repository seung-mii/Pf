import React from 'react';
import Velog from '../images/velog.png';
import Github from '../images/github.png';

import '../css/folder.css';

function Site({ folderOpen }) {
  const close = () => { folderOpen(false); };
  const minimize = () => { folderOpen(false); };
  const maximize = () => { folderOpen(false); };

  return (
    <div className="site">
      <header>
        <div className='header_container'>
          <button className="close" onClick={close}>
            <span class="material-symbols-rounded">close</span>
          </button>
          <button className="minimize" onClick={minimize}>
            <span class="material-symbols-rounded">remove</span>
          </button>
          <button className="maximize" onClick={maximize}>
            <span class="material-symbols-rounded">open_in_full</span>
          </button>
          <h1>운영중인 사이트</h1>
        </div>
      </header>
      <section className='main'>
        <a href='https://velog.io/@ro_sie' target="_blank" rel="noreferrer">
          <img src={Velog} alt='velog'/>
          <h4>velog</h4>
        </a>
        <a href='https://github.com/seung-mii' target="_blank" rel="noreferrer">
          <img src={Github} alt='Github'/>
          <h4>Github</h4>
        </a>
      </section>
    </div>
  );
}

export default Site;
