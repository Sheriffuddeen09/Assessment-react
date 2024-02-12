import Ola from './images/ola.svg'
import Dan from './images/dan.svg'
import Tena from './images/tena.svg'
import Rec from './images/rec.svg'
import  Afe from './images/afe.svg'
const Slider = () =>{

    return(
        <div className="h049">
            <p className="h051">Oneport365 has supported these top companies</p>
            <div className="h050">
            <img src={Ola} alt="OLAM" />
            <img src={Dan} alt="DANGOTE" />
            <img src={Tena} alt="Tenatiza" />
            <img src={Rec} alt="recyclan" />
            <img src={Afe}  width={70} height={30} alt="AFEX" />
            </div>
        </div>

    )
}
export default Slider