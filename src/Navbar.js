import Icones from './IconesNavbar'
import Pesquisa from './PesquisaNavbar'
import Logo from './LogoNavbar'

export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
                <Logo />
                <Pesquisa />
                <Icones/>
            </div>
        </div>
    )
}