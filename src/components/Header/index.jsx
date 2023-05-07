import styled from './index.module.scss';
import logo from '../../assets/images/Logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styled.header}>
            <img src={logo} className={styled.logo} alt="logo" />
            <ul className={styled.navigation}>
                <li>
                    <NavLink to='/' >Əsas</NavLink>
                </li>
                <li>
                    <NavLink to='kredit'>Kredit al</NavLink>
                </li>
                <li>
                    <NavLink to='login'>Log ol</NavLink>
                </li>
                <li>
                    <NavLink to='register'>Registrasiya</NavLink>
                </li>
            </ul>
            <button className={styled.button}>Müraciət göndər</button>
        </header>
    )
}

export default Header;
