import styled from './index.module.scss';
import phone from '../../../../assets/images/phone.png';

const Comfort = () => {
    return (
        <div className={styled.container}>
            <img src={phone} alt="phone" />
            <div>
                <h1>Kredit almaq üçün əziyyət çəkmə</h1>
                <p>Kredit məlumatlarınızı öyrənmək üçün banklara getməyə ehtiyac yoxdur. Tələb olunan məlumatları daxil edin və müraciəti göndərin. Anında kredit müraciətinizə cavab alın. Cavab müsbətdirsə sizə kredit almağa heç nə mane ola bilməz</p>
                <button>Explore Now</button>
            </div>
        </div>
    )
}

export default Comfort;
