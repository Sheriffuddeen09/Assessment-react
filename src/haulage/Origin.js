import { useState } from "react";
import { getPort } from "../api/axios";
import { useQuery,  } from "react-query";
import Location from "./Location";
import Container from "./Container";
import Weight from "./Weight";

const Origin = () =>{

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
<div> 
        <p className="h1"> 
        We Ensure Your Cargo Reaches Its
        </p>
        <p className="h2"> 
        Destination Safely And On Time
        </p>
    <div className="div">
        <span>
        <p className="p"> Origin port</p>
        {content}
        </span>
        <span>
        <p className="pp"> Drop off Location</p>
        <Location />
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
</div>
        )
}


export default Origin