import styled from './index.module.scss';
import bgImg from '../../assets/images/loginImg.svg';

const Registration = () => {
	return (
		<div className={styled.wrapper}>
			<div className={styled.left}>
				<img src={bgImg} alt="loginImg" />
			</div>
			<div className={styled.right}>
				<h1 className={styled.title}>Hesaba daxil ol</h1>
				<form>
					<div className={styled.workBox}>
						<label className={styled.workTitle}>E-mail</label>
						<input className={styled.workInput} type="text" placeholder="E-mailinizi daxil edin" />
					</div>
					<div className={styled.workBox}>
						<label className={styled.workTitle}>Şifrə</label>
						<input className={styled.workInput} type="text" placeholder="Şifrənizi daxil edin" />
					</div>
					<div>
						<input type="checkbox" />
						<label className={styled.checkboxLable}>Yadda saxla</label>
					</div>
					<button className={styled.workBoxBtn}>Daxil ol</button>
				</form>
			</div>
		</div>
	);
};

export default Registration;
