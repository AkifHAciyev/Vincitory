import styled from './index.module.scss';
import google from '../../../../assets/images/googlePlay.png';
import apple from '../../../../assets/images/AppleStore.png';

const DownloadApp = () => {
    return (
        <div className={styled.container}>
            <div className={styled.firstDiv}>
                <div className={styled.heading}>Mobil tətbiqimizi yüklə</div>
                <div className={styled.paragraph}>İstər evdə, istər işdə, istərsə də yolda olmağınızdan asılı olmayaraq, mobil proqramımız sizə öz şərtləriniz əsasında maliyyənizi idarə etmək üçün rahatlıq verir.</div>
            </div>
            <div  className={styled.secondDiv}>
               <img src={google} alt="google" />
               <img src={apple} alt="apple" />
            </div>
        </div>
    )
}

export default DownloadApp;
