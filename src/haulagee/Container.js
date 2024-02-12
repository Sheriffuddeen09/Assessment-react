import { useState } from "react";
import { getSize } from "../api/axios";
import { useQuery,  } from "react-query";

const Container = () =>{

const [fit, setFit] = useState('') 
const {
    data: sizes, 
    error,
    isLoading
    } = useQuery('/sizes', getSize)

let options
    if(isLoading) return <p>Loading</p>
    else if(!error){
        options = sizes.map(ocean => {
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
                value={fit}
                onChange={(e) => setFit(e.target.value)}
            >{options}</select>
        )
    }

    return content
}

export default Container