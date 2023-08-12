import style from "./CSS/PresentationStyle.module.css";
import avatar from "../assets/matheus.png";

const Presentation = () => {
  return (
    <>
      <div id="containerPresentation" className={style.containerPresentation} >
        <div
          id="informationsFromApresentation"
          className={style.informsApresentation}
        >
          <h2>Olá, eu sou o Matheus Gregorio :)</h2>
          <p>Desenvolvedor Front-End</p>

          <a
            href="https://www.linkedin.com/in/matheus-gregorio-472607275/"
            target="_blank"
          >
            <button className={style.contato}>Entrar em contato</button>
          </a>
        </div>
        <div id="Photo">
          <img id="avatar" className={style.avatar} src={avatar} alt="Avatar" />
        </div>
      </div>
    </>
  );
};

export default Presentation;
