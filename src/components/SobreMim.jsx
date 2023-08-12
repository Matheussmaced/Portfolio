import style from "./CSS/SobreMimStyle.module.css";
import smile from '../assets/smile.svg'
import mail from '../assets/mail.svg'
import instagram from '../assets/instagram.svg'
import telefone from '../assets/phone.svg'
const SobreMim = () => {
  return (
    <>
        <div className="containerSobreMim">
            <h4>Sobre mim</h4>
            <p className={style.pSobre}>
                Olá! Sou Desenvolvedor Front-End e estudante dedicado de Engenharia de Software em busca de
                oportunidades para aprender, colaborar e aprimorar minhas habilidades no
                desenvolvimento de software. Com uma paixão pela tecnologia e pela
                resolução de problemas complexos, estou comprometido em me tornar um
                profissional altamente qualificado nesta área em constante evolução.
            </p>
        </div>
        <div className={style.informs}>
            <div className={`${style.icons} ${style.colum1}`}>
                <img className={style.iconsImg} src={smile} alt="Smile" />
                <h5>Meu Nome</h5>
                <p>Matheus Gregorio</p>
            </div>
            <div className={`${style.icons} ${style.colum1}`}>
                <img className={style.iconsImg} src={mail} alt="E-mail" />
                <h5>E-mail</h5>
                <p className={style.email}>mateusbyakuya3@gmail.com</p>
            </div>
            <div className={`${style.icons} ${style.colum2}`}>
                <img className={style.iconsImg} src={instagram} alt="Instagram" />
                <h5>Instagram</h5>
                <p>@mateusmaced_</p>
            </div>
            <div className={`${style.icons} ${style.colum2}`}>
                <img className={style.iconsImg} src={telefone} alt="Telefone" />
                <h5>Telefone</h5>
                <p>(88) 9.9611-4496</p>
            </div>
        </div>

    </>
  );
};

export default SobreMim;
