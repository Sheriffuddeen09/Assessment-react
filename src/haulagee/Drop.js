import { useState } from "react";
import { getPort } from "../api/axios";
import { useQuery,  } from "react-query";
import Stuffing from "./Stuffing";
import Container from "./Container";
import Weight from "./Weight";

const Drop = () =>{

const [country, setCountry] = useState('') 
const {
    data: ports, 
    error,
    isLoading
    } = useQuery('/ports', getPort)

let options
    if(isLoading) return <p>Loading</p>
    else if(!error){
        options = ports.map(ocean => {
            return (
                <option key={`opt${ocean.id}`} value={ocean.id}>
                    <p className="option">{ocean.title}</p>
                    <br />
                    <p className="option">{ocean.city}</p>
                </option>
            )
        })
    }

    let content
    if (error) {
        content = <p>{error.message}</p>
    } else {
        content = (
            <select className='select'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            >{options}</select>
        )
    }

    return (
    <div className="div">
       
        <span>
        <p className="pp"> Stuffing Location</p>
        <Stuffing />
        </span>
        <span>
        <p className="p"> Destinationn Port</p>
        {content}
        </span>
        <span>
        <p className="p"> Container Size &  Type</p>
        <Container />
        </span>
        <span>
        <p className="pp"> Container Weight (Tons)</p>
        <Weight />
        </span>
        <button className="buttons">
            Process
        </button>
    </div>
        )
}


export default Drop