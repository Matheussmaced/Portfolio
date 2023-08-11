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
                            <img src={iconCss} alt="HTML" />
                        </div>

                        <div className={style.box}>
                            <img src={iconJs} alt="HTML" />
                        </div>

                        <div className={style.box}>
                            <img src={iconReact} alt="HTML" />
                        </div>
                    </div>
            </div>
        </>
    )
}


export default Skills
