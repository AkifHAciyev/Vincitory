import styled from './index.module.scss';
import bgImg from '../../assets/images/loginImg.svg';
import rectangle from '../../assets/images/Rectangle.svg';

const Login = () => {
	return (
		<div className={styled.wrapper}>
			<div className={styled.left}>
				<img src={bgImg} alt="loginImg" />
				<img className={styled.rectangle} src={rectangle} alt="" />
			</div>
			<div className={styled.right}>
				<h1 className={styled.title}>Hesaba daxil ol</h1>
				<form>
					<div className={styled.workBox}>
						<label className={styled.workTitle}>Ad və soyadınız</label>
						<input className={styled.workInput} type="text" placeholder="Ad və soyadınızı edin" />
					</div>
					<div className={styled.workBox}>
						<label className={styled.workTitle}>Şifrə</label>
						<input className={styled.workInput} type="text" placeholder="Şifrənizi daxil edin" />
					</div>
					<div>
						<input type="checkbox" />
						<label>Yadda saxla</label>
					</div>
					<button></button>
				</form>
			</div>
		</div>
	);
};

export default Login;
