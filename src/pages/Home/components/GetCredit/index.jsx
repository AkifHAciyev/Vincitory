import background from '../../../../assets/images/HomeBg.png';
import styled from './index.module.scss';

const GetCredit = () => {
  return (
    <div className={styled.container}>
      <img className={styled.background} src={background} alt="background" />
      <div className={styled.getcredit}>
        <h1>
          Kredit almağın
          ən asan yolu
        </h1>
        <p>
          Kredit ekspertlərimiz unikal maliyyə vəziyyətiniz üçün düzgün kredit həllini tapmağınıza kömək etmək üçün buradadır.
        </p>
        <button>
          Kredit al
        </button>
        <span>
          Necə işləyir
        </span>
      </div>
    </div>
  )
}

export default GetCredit
