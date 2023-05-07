import styled from './index.module.scss';

const HowItWorks = () => {
    return (<>
        <h2 className={styled.h2}>Necə işləyir</h2>

        <div className={styled.container}>
            <div>
                <div className={styled.numbers}>1</div>
                <div className={styled.heading}>Məlumatları daxil et</div>
                <div className={styled.content}>Tələb olunan məlumatları daxil etməklə məlumatların doğruluğunu təsdiqləyib göndərirsiniz</div>
            </div>
            <div>
                <div className={styled.numbers}>2</div>
                <div className={styled.heading}>Anında cavab al</div>
                <div className={styled.content}>Sistemimizdə bütün məlumatlar dəqiqliklə yoxlanılır və sizə ən qısa zamanda cavab verilir</div>
            </div>
            <div>
                <div className={styled.numbers}>3</div>
                <div className={styled.heading}>Kredit götür!</div>
                <div className={styled.content}>Cavab müsbətdirsə bu o deməkdir ki, siz qeyd etdiyiniz məbləğdə və müddətə kredit götürə bilərsiniz</div>
            </div>
        </div>
    </>

    )
}

export default HowItWorks;
