import style from "./CSS/FooterStyle.module.css";
const Footer = () => {
  return (
    <>
      <div className={style.containerFooter}>
        <footer>
          <p>
            Orgulhosamente feito por
            <a
              href="https://www.linkedin.com/in/matheus-gregorio-472607275/"
              target="_blank"
            >
              Matheus Gregorio
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
