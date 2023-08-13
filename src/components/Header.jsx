import menuHamburguer from '../assets/menu_hamburguer.svg'

const Header = ({bodyHidden, setBodyHidden, setLinkHidden, linkHidden})=>{

    const click = () => {

        if(bodyHidden === 'inicial'){
        setBodyHidden('hidden')
        setLinkHidden('links')
        return
        }

        setBodyHidden('inicial')
        setLinkHidden('inicial')
    }

    return(
        <>
            <div id="containerHeader">
                <header>
                    <h1>Portfólio</h1>
                    <div id="linksHeader">
                        <nav className={linkHidden}>
                         <a onClick={click} href="#containerPresentation" id="#sobreMim" className={linkHidden}>Sobre mim</a>
                         <a onClick={click} href="#projetos" className={linkHidden}>Projetos</a>
                         <a onClick={click} href="#servicos" className={linkHidden}>Serviços</a>
                         <a onClick={click} href="#skills" className={linkHidden}>Minhas skills</a>
                        </nav>
                        <button onClick={click} id="menuHamburguer">
                            <img src={menuHamburguer} alt="Menu Hamburguer" />
                         </button>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header