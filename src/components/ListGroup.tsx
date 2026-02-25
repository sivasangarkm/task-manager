import { useState } from "react";
import './ListGroup.css';
interface Props
{
    cities:string[];
    heading:string;    
    onSelectItem:(item:string)=>void;
}

function ListGroup({cities,heading,onSelectItem}:Props)
{
        
        const [selectedIndex,setSelectedIndex] = useState(0);
        return (
        <>
        <h1>{heading}</h1>
        {cities.length ===0 && <p>No Items Found!</p>}
        <ul className="list-group">
            {
            cities.map((city,index)=> 
            <li 
                key={city} 
                className={index===selectedIndex? "list-group-item active":"list-group-item"} 
                onClick={()=>{setSelectedIndex(index);onSelectItem(city)}}
            >
                    {city}
            </li>)
            };
        </ul>
        </>
        )
}
export default ListGroup;