import { useToggleHamburguer } from '../../hooks/useToggleHamburguer.js';
import './NavBar.css';
import { NavBarList } from './NavBarList.js';
import { NavBarContent } from './NavBarContent.js';

export const NavBar = () => {

    const { toggleNavBarList, navBarList } = useToggleHamburguer();
    
    return (
        <header>
            <nav className='navBar'>
                <NavBarContent toggleNavBarList={ toggleNavBarList }/>
                <NavBarList navBarList={ navBarList } toggleNavBarList={ toggleNavBarList }/>
                <img className='navBar__luces' src='/assets/img/Luces.png' alt='Luces'/>
            </nav>
        </header>
    )
}
