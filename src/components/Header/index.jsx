import styled from './index.module.scss';

const Header = () => {
    return (
        <header className={styled.header}>
            {/* <img src={} alt="" /> */}
            <ul className={styled.navigation}>
                <li>Əsas</li>
                <li>Haqqımızda</li>
                <li>Kredit al</li>
                <li>Bizimlə əlaqə</li>
            </ul>
            <button className={styled.button}>Müraciət göndər</button>
        </header>
    )
}

export default Header;
