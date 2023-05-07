import styled from './index.module.scss';
import logo from '../../assets/images/footerlogo.svg';
import call from '../../assets/images/Call.svg';
import message from '../../assets/images/Message.svg';
import location from '../../assets/images/location.svg';

const Footer = () => {
	return (
		<>
			<div className={styled.container}>
				<div className={styled.firstCol}>
					<img src={logo} alt="" />
					<div className={styled.contact}>
						<img src={call} alt="" />
						<div className={styled.structure}>
							<span>Əlaqə</span>
							<span>(219) 555-0114</span>
						</div>
					</div>
					<div className={styled.email}>
						<img src={message} alt="" />
						<div className={styled.structure}>
							<span>E-mail</span>
							<span>credoo@example.com</span>
						</div>
					</div>
					<div className={styled.address}>
						<img src={location} alt="" />
						<div className={styled.structure}>
							<span>Ünvan</span>
							<span>Bakı şəhəri, Nizami kinoteatrı
								5-ci mərtəbə</span>
						</div>
					</div>
				</div>
				<div className={styled.secondCol}>
					<div>Company</div>
					<a href="">Home</a>
					<a href="">About</a>
					<a href="">Blog</a>
					<a href="">Pages</a>
					<a href="">Contact</a>
				</div>
				<div className={styled.thirdCol}>
					<div>Help</div>
					<a href="">Customer Support</a>
					<a href="">Tems & Conditions</a>
					<a href="">Privacy Policy</a>
				</div>
				<div className={styled.fourthCol}>
					<div>Yeniliklərə abunə ol</div>
					<p>Son xəbərlər, yeniliklər və məlumatlardan xəbərdar olmaq üçün abunə olun</p>
					<button>Abunə ol</button>
				</div>
			</div>
			<div className={styled.copyright}>
				Copyright Credoo 2022 All Right Reserved
			</div>
		</>
	)
};

export default Footer;
