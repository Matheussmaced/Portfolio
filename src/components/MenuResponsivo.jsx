import style from './CSS/meuStyle.modulo.css'
import Header from './Header'

import {useState} from 'react'
const MenuResponsivo = ({click, classe}) =>{
    
    const [bodyFill, setBodyFill] = useState(classe)

    const click = ()=>{
        setBodyFill('hidden')
    }

}

export default MenuResponsivo
