import style from "./CSS/ServicosStyle.module.css";

import code from "../assets/code.svg";
import figma from "../assets/figma.svg";
import smartphone from "../assets/smartphone.svg";
const Servicos = () => {
  return (
    <>
      <div className={style.containerServicos} id="servicos">
        <h3>Serviços</h3>
        <div className={style.boxs}>
          <div className={style.box}>
            <img src={code} alt="Code icon" />
            <p>Criação sites</p>
          </div>

          <div className={style.box}>
            <img src={figma} alt="Code icon" />
            <p>UI Designer</p>
          </div>

          <div className={style.box}>
            <img src={smartphone} alt="Code icon" />
            <p>Sites responsivos</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicos;
