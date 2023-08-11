import style from "./CSS/ProjetosStyle.module.css";

import projeto1 from "../assets/projeto1.jpg";
import projeto2 from "../assets/projeto2.jpg";
import projeto3 from "../assets/projeto3.jpg";
import projeto4 from "../assets/projeto4.jpg";
import projeto5 from "../assets/projeto5.jpg";
import projeto6 from "../assets/projeto6.jpg";

const Projetos = () => {
  return (
    <>
      <div className={style.containerProjetos}>
        <h2 id="projetos" >Projetos</h2>
        <div className={style.projetosContainerOne}>
          <div className={style.box}>
            <img className={style.projetos} src={projeto1} alt="Projeto1" />
            <h3>Codelânia blog</h3>
            <p>Tecnologias: HTML, CSS, JS e React.js</p>

            <div className={style.btns}>
              <a className={style.linkBtn} href="https://codelaniad1.netlify.app/" target="_black">
                <button className={style.demoBtn}>Demo</button>
              </a>
              <a className={style.linkBtn} href="https://github.com/Matheussmaced/codelania" target="_black">
                <button className={style.gitHubBtn}>GitHub</button>
              </a>
            </div>
          </div>

          <div className={style.box}>
            <img className={style.projetos} src={projeto2} alt="Projeto2" />
            <h3>JordanShoes</h3>
            <p>Tecnologias: HTML, CSS, JS e React.js</p>

            <div className={style.btns}>
              <a className={style.linkBtn} href="https://jordanshoesreact.netlify.app/" target="_black">
                <button className={style.demoBtn}>Demo</button>
              </a>
              <a className={style.linkBtn} href="https://github.com/Matheussmaced/jordanshoes" target="_black">
                <button className={style.gitHubBtn}>GitHub</button>
              </a>
            </div>
          </div>

          <div className={style.box}>
            <img className={style.projetos} src={projeto3} alt="Projeto3" />
            <h3>Login</h3>
            <p>Tecnologias: HTML, CSS, JS e React.js</p>

            <div className={style.btns}>
              <a className={style.linkBtn} href="https://logincodelania.netlify.app/" target="_black">
                <button className={style.demoBtn}>Demo</button>
              </a>
              <a className={style.linkBtn} href="https://github.com/Matheussmaced/login" target="_black">
                <button className={style.gitHubBtn}>GitHub</button>
              </a>
            </div>
          </div>
        </div>
        <div className={style.projetosContainerTwo}>
          <div className={style.box}>
            <img className={style.projetos} src={projeto4} alt="Projeto4" />
            <h3>Loki</h3>
            <p>Tecnologias: HTML, CSS, JS e React.js</p>

            <div className={style.btns}>
              <a className={style.linkBtn} href="https://lokiproject.netlify.app/" target="_black">
                <button className={style.demoBtn}>Demo</button>
              </a>
              <a className={style.linkBtn} href="https://github.com/Matheussmaced/Loki" target="_black">
                <button className={style.gitHubBtn}>GitHub</button>
              </a>
            </div>
          </div>

          <div className={style.box}>
            <img className={style.projetos} src={projeto5} alt="Projeto5" />
            <h3>Projeto Valorant</h3>
            <p>Tecnologias: HTML, CSS, JS e React.js</p>

            <div className={style.btns}>
              <a className={style.linkBtn} href="https://projectvalorantreact.netlify.app/" target="_black">
                <button className={style.demoBtn}>Demo</button>
              </a>
              <a className={style.linkBtn} href="https://github.com/Matheussmaced/Valorant" target="_black">
                <button className={style.gitHubBtn}>GitHub</button>
              </a>
            </div>
          </div>

          <div className={style.box}>
            <img className={style.projetos} src={projeto6} alt="Projeto6" />
            <h3>CodeMoji</h3>
            <p>Tecnologias: HTML, CSS, JS e React.js</p>

            <div className={style.btns}>
              <a className={style.linkBtn} href="https://codemojireact.netlify.app/" target="_black">
                <button className={style.demoBtn}>Demo</button>
              </a>
              <a className={style.linkBtn} href="https://github.com/Matheussmaced/codeMoji" target="_black">
                <button className={style.gitHubBtn}>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projetos;
