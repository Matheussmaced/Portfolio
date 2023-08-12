import menuHamburguer from '../assets/menu_hamburguer.svg'

const Header = ({setBodyHidden, bodyHidden})=>{

    const click = () => {

        if(bodyHidden === 'inicial'){
        setBodyHidden('hidden')
        return
        }

        setBodyHidden('inicial')
    }

    return(
        <>
            <div id="containerHeader">
                <header>
                    <h1>Portfólio</h1>
                    <div id="linksHeader">
                        <nav>
                         <a id="#sobreMim" href="#containerPresentation">Sobre mim</a>
                         <a href="#projetos">Projetos</a>
                         <a href="#servicos">Serviços</a>
                         <a href="#skills">Minhas skills</a>
                         <button onClick={click} id="menuHamburguer">
                            <img src={menuHamburguer} alt="Menu Hamburguer" />
                         </button>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header