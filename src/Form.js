import Button from "./Button"
import Select from "./Select"
const Form = ({reqType, setReqType}) =>{

    return (
    <div className="form">
        
        <span>
        <Select />
        </span>
        <div className="slide">
        <form onSubmit={(e) => e.preventDefault()}>
            
             <Button 
            buttonText="cosco"
            reqType={reqType}
            setReqType={setReqType}
            />
            <Button 
            buttonText="cmacmg"
            reqType={reqType}
            setReqType={setReqType}
            />
            <Button 
            buttonText="maresk"
            reqType={reqType}
            setReqType={setReqType}
            />
            <Button 
            buttonText="pil"
            reqType={reqType}
            setReqType={setReqType}
            />
            <Button 
            buttonText="zim"
            reqType={reqType}
            setReqType={setReqType}
            />
            <Button 
            buttonText="oocl"
            reqType={reqType}
            setReqType={setReqType}
            />
            <Button 
            buttonText="msc"
            reqType={reqType}
            setReqType={setReqType}
            />
            <Button 
            buttonText="one"
            reqType={reqType}
            setReqType={setReqType}
            />
            <Button 
            buttonText="esl"
            reqType={reqType}
            setReqType={setReqType}
            />
            <Button 
            buttonText="evergreen"
            reqType={reqType}
            setReqType={setReqType}
            />
            
        </form>
    </div>
    </div>
    )
}
export default Form