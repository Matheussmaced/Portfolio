import style from './CSS/SkillsStyle.module.css'

import iconHtml from '../assets/iconsSkills/iconHtml.svg'
import iconCss from '../assets/iconsSkills/iconCss.svg'
import iconJs from '../assets/iconsSkills/iconJs.svg'
import iconReact from '../assets/iconsSkills/iconReact.svg'

const Skills = () =>{
    return(
        <>
            <div className={style.containerSkills}>
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
        </>
    )
}


export default Skills
