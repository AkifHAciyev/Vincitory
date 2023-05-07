import { Box, FormControl, InputLabel, MenuItem, Select, Slider } from '@mui/material';
import styled from './index.module.scss';
import { useState } from 'react';

const Kredit = () => {
	const [age, setAge] = useState('');
	const [valueOfKredit, setValueOfKredit] = useState(0);
	const [valueOfMonth, setValueOfMonth] = useState(6);
	const [valueOfPorsent, setValueOfPorsent] = useState(8);

	const handleInputChange = (event) => {
		setValueOfPorsent(event.target.value);
	};

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const handleChangeKredit = (event, newValue) => {
		setValueOfKredit(newValue);
	};

	const handleChangeMonth = (event, newValue) => {
		setValueOfMonth(newValue);
	};
	return (
		<div className={styled.wrapper}>
			<h1 className={styled.title}>Kredit müraciəti</h1>
			<p className={styled.subTitle}>
				Kredit götürmək üçün profilinizin uyğun olub-olmadığını yoxlamaq üçün zəhmət olmasa aşağdakı məlumatları
				doldurun
			</p>
			<form className={styled.form}>
				<div className={styled.info}>
					<div>
						<label className={styled.workTitle}>Yaşınız</label>
						<input className={styled.infoInput} type="text" placeholder="Yaşınızı daxil edin" />
					</div>
					<div>
						<label className={styled.workTitle}>İllik gəliriniz (AZN)</label>
						<input className={styled.infoInput} type="text" placeholder="İllik gəlirinizi daxil edin" />
					</div>
				</div>
				<div className={styled.homeChoice}>
					<p className={styled.homeChoiceTitle}>Daşınmaz əmlak məlumatınız</p>
					<div className={styled.homeChoiceBox}>
						<button className={styled.homeChoiceBtn}>Kirayə</button>
						<button className={styled.homeChoiceBtn}>İpoteka</button>
						<button className={styled.homeChoiceBtn}>Ev sahibi</button>
					</div>
				</div>
				<div className={styled.work}>
					<div className={styled.workBox}>
						<label className={styled.workTitle}>Sonuncu iş yerində işləmə müddəti (ay)</label>
						<input className={styled.workInput} type="text" placeholder="Müddəti daxil edin" />
					</div>

					<label className={styled.workTitle}>
						Kreditin götürmə məqsədi
						<FormControl className={styled.select} fullWidth>
							<InputLabel id="demo-simple-select-label">Age</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Age"
								onChange={handleChange}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</label>
				</div>
				<div className={styled.range}>
					<p className={styled.workTitle}>Kreditin məbləği</p>
					<div className={styled.rangeBox}>
						<p>0 AZN</p>
						<Box className={styled.rangeMiuBox} sx={{ width: 500 }}>
							<Slider
								max={10000}
								getAriaLabel={() => 'Temperature range'}
								value={valueOfKredit}
								onChange={handleChangeKredit}
								valueLabelDisplay="auto"
							/>
						</Box>
						<p>{valueOfKredit} AZN</p>
					</div>
				</div>

				<div className={styled.range}>
					<p className={styled.workTitle}>Kreditin müddəti</p>
					<div className={styled.rangeBox}>
						<p>6 ay</p>
						<Box className={styled.rangeMiuBox} sx={{ width: 500 }}>
							<Slider
								max={48}
								defaultValue={6}
								getAriaLabel={() => 'Temperature range'}
								value={valueOfMonth}
								onChange={handleChangeMonth}
								valueLabelDisplay="auto"
							/>
						</Box>
						<p>{valueOfMonth} ay</p>
					</div>
				</div>
				<div className={styled.range}>
					<p className={styled.workTitle}>Faiz dərəcəsi (%)</p>
					<div className={styled.rangeBox}>
						<p>8 %</p>
						<Box className={styled.rangeMiuBox} sx={{ width: 500 }}>
							<Slider
								max={100}
								min={8}
								getAriaLabel={() => 'Temperature range'}
								value={valueOfPorsent}
								onChange={handleInputChange}
								valueLabelDisplay="auto"
							/>
						</Box>
						<p>{valueOfPorsent} %</p>
					</div>
				</div>
				<button className={styled.formBtnSubmit}>Təsdiqlə və göndər</button>
			</form>
		</div>
	);
};

export default Kredit;
