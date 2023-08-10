import style from './CSS/PresentationStyle.module.css'
import avatar from '../assets/matheus.png'

const Presentation = () =>{
    return(
        <>
            <div id="containerPresentation" className={style.containerPresentation}>
                <div id="informationsFromApresentation">
                    <h2>Olá, eu sou o Matheus Gregorio :)</h2>
                    <p>Desenvolvedor Front-End</p>
                    
                    <button className={style.contato}>Entrar em contato</button>
                </div>
                <div id="Photo">
                    <img className={style.avatar} src={avatar} alt="Avatar" />
                </div>
            </div>
        </>
    )
}

export default Presentation
