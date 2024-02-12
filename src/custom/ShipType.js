import { useState } from "react";
import PortName from "./PortName";
import ContainerSize from "./ContainerSize";
import Commodity from "./Commodity";

const ShipType = () =>{

const [type, setType] = useState('') 

    return (
    <div> 
        <p className="h3"> 
        We Handle Your Customs
        </p>
        <p className="h4"> 
        Clearance With Precision.
        </p>
        <div className="div">
           <span>
                <p className="p">Shipment Type</p>
                <select
                className="select"
                value={type}
                onChange={(e) => setType(e.target.value)}>
                    <option value=''> 
                    </option>
                    <option value='import'>
                    Import
                    </option>
                    <option value='export'>
                    Export
                    </option>
                </select>
            </span>
            <span>
            <p className="p"> Port Nmae</p>
            <PortName />
            </span>
            <span>
             <p className="p"> Container Size & Type</p>
            <ContainerSize />
            </span>
            <span>
            <p className="pp"> Commodity Type</p>

            <Commodity />
            </span>
            <button className="buttons">
                Process
            </button>
        </div>
    </div>
    )
}


export default ShipType