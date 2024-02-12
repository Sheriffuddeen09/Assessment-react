import Maps from "./Maps"
import { faqs } from "./Faq"
const Accordion = () =>{

    const content = (
        faqs.map((faq) =>{
            return <Maps key={faq.id} faq={faq} />
        })
    )
        return (
    <div className="shii12">
            <div>
            <h1 className="ha1"> How Does It Work? </h1>
            <span className='hra1'> </span>
           {content}
            </div>
    <div className="shii0">
        <span className="shii">
        <h1> Start Your First
            <br/>
         Shipment Today!    
        </h1>
        </span>
        <span className="shii2">
        <p> You'll be guided through every step, 
            <br/>
            making the process seamless and 
            <br/>
            stress-free </p>
        </span>
        <button className="butt">
            Start Shipping today
        </button>
    </div>
    </div>
        )
    }
    export default Accordion