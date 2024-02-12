import { useState } from "react"
import Form from "./Form"
import { useEffect } from "react"
import Header from "./Header"
import List from "./List"
import Seamless from "./Seamless"
import Save from "./range/Save"
import Slider from "./component/Slider"
import Freight from "./component/Trust"
import Amazing from "./component/Amazing"
import Footer from "./component/Footer"
import Accordion from "./component/Accordion"

const App = () =>{

    const api ='http://localhost:3500/'
    const [reqType, setReqType] = useState('cmacmg')
    const [items, setItems] = useState([])

    useEffect(() =>{

        const fetchItems = async() =>{
            try{
                const response = await fetch(`${api}${reqType}`)
                const data = await response.json()
                setItems(data)

            }
            catch(err){
                console.log(err)
            }
        } 

        fetchItems()
    }, [reqType])
       

    return(

        <div>
        <Header/>
        <div className="div21">
        <div className="div22">
        <Seamless/>
        </div>
        </div>
        <div className="for">
        <h1 className="hh"> Special Rates</h1>
        <div>
        <Form reqType={reqType}
        setReqType={setReqType}
        />
        </div>
        </div>
        <List items={items}/>
        <div>
        <Slider />
        </div>
        <div>
        <Freight />
        </div>
        <div>
        <Save />
        </div>
        <div>
        <Accordion />
        </div>
        <div>
        <Amazing />
        </div>
        <div>
        <Footer />
        </div>
        </div>

    )
}
export default App