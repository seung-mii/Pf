import React from 'react';
import REACT from '../images/react_logo.png';
import CSS from '../images/css_logo.svg';
import HTML from '../images/html_logo.png';
import JS from '../images/javascript_logo.png';
import STYLED from '../images/styled-components_logo.png';
import FIGMA from '../images/figma_logo.png';

import '../css/folder.css';

function Skill({ folderOpen }) {
  const close = () => { folderOpen(false); };

  return (
    <div className="skill">
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
          <h1>다룰 수 있는 기술 스택</h1>
        </div>
      </header>
      <section className='main'>
        <div className='skills'>
          <img src={REACT} alt='react_logo'/>
          <p>React</p>
        </div>
        <div className='skills'>
          <img src={CSS} alt='css_logo'/>
          <p>Css</p>
        </div>
        <div className='skills'>
          <img src={HTML} alt='html_logo'/>
          <p>Html</p>
        </div>
        <div className='skills'>
          <img src={JS} alt='js_logo'/>
          <p>JavaScript</p>
        </div>
        <div className='skills'>
          <img src={STYLED} alt='styled-components_logo'/>
          <p>styled-components</p>
        </div>
        <div className='skills'>
          <img src={FIGMA} alt='figma'/>
          <p>Figma</p>
        </div>
      </section>
    </div>
  );
}

export default Skill;
