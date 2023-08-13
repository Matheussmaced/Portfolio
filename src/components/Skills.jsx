import style from "./CSS/SkillsStyle.module.css";

import iconHtml from "../assets/iconsSkills/iconHtml.svg";
import iconCss from "../assets/iconsSkills/iconCss.svg";
import iconJs from "../assets/iconsSkills/iconJs.svg";
import iconReact from "../assets/iconsSkills/iconReact.svg";

import seta from '../assets/seta.png'

const Skills = () => {
  return (
    <>
      <div className={style.containerSkills} id="skills">
        <h3>Minhas skills</h3>
        <div className={style.skills}>
          <div className={style.box}>
            <img src={iconHtml} alt="HTML" />
          </div>

          <div className={style.box}>
            <img src={iconCss} alt="CSS" />
          </div>

          <div className={style.box}>
            <img src={iconJs} alt="JS" />
          </div>

          <div className={style.box}>
            <img className={style.react} src={iconReact} alt="React" />
          </div>
        </div>
      </div>

      <div id="voltarParaTopo" className={style.voltar}>
          <a href='#containerPresentation'><img className={style.seta} src={seta} alt="seta" /></a>
      </div>
    </>
  );
};

export default Skills;
