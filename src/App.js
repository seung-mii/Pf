import { useState } from 'react';
import './css/App.css';
import Folder from './images/folder1.png';
import School from './folder/School.js';
import Skill from './folder/Skill.js';
import Project from './folder/Project.js';
import Site from './folder/Site.js';
import Award from './folder/Award.js';
import Competition from './folder/Competition.js';

function App() {
  const [schoolFolder, setSchoolFolder] = useState(false);
  const [skillFolder, setSkillFolder] = useState(false);
  const [projectFolder, setProjectFolder] = useState(false);
  const [siteFolder, setSiteFolder] = useState(false);
  const [awardFolder, setAwardFolder] = useState(false);
  const [competitionFolder, setCompetitionFolder] = useState(false);

  const closeAllFolder = () => {
    setSchoolFolder(false);
    setSkillFolder(false);
    setProjectFolder(false);
    setSiteFolder(false);
    setAwardFolder(false);
    setCompetitionFolder(false);
  }
  const showSchoolFolder = () => { closeAllFolder(); setSchoolFolder(true); };
  const showSkillFolder = () => { closeAllFolder(); setSkillFolder(true); };
  const showProjectFolder = () => { closeAllFolder(); setProjectFolder(true); };
  const showSiteFolder = () => { closeAllFolder(); setSiteFolder(true); };
  const showAwardFolder = () => { closeAllFolder(); setAwardFolder(true); };
  const showCompetitionFolder = () => { closeAllFolder(); setCompetitionFolder(true); };

  return (
    <div className="App">
      <div className="folder">
        <img src={Folder} alt='folder' onClick={showSchoolFolder}/>
        <h4>학교 생활</h4>
        {schoolFolder && <School folderOpen={setSchoolFolder} />}
      </div>
      <div className="folder">
        <img src={Folder} alt='folder' onClick={showSkillFolder}/>
        <h4>다룰 수 있는 기술 스택</h4>
        {skillFolder && <Skill folderOpen={setSkillFolder} />}
      </div>
      <div className="folder">
        <img src={Folder} alt='folder' onClick={showProjectFolder}/>
        <h4>프로젝트</h4>
        {projectFolder && <Project folderOpen={setProjectFolder} />}
      </div>
      <div className="folder">
        <img src={Folder} alt='folder' onClick={showSiteFolder}/>
        <h4>운영중인 사이트</h4>
        {siteFolder && <Site folderOpen={setSiteFolder} />}
      </div>
      <div className="folder">
        <img src={Folder} alt='folder' onClick={showAwardFolder}/>
        <h4>수상 경력</h4>
        {awardFolder && <Award folderOpen={setAwardFolder} />}
      </div>
      {/* <div className="folder">
        <img src={Folder} alt='folder' onClick={showCompetitionFolder}/>
        <h4>공모전</h4>
        {competitionFolder && <Competition folderOpen={setCompetitionFolder} />}
      </div> */}
    </div>
  );
}

export default App;
