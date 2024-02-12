import { useState } from "react";
import { getPort } from "../api/axios";
import { useQuery,  } from "react-query";

const PortName = () =>{

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

    return content
}


export default PortName