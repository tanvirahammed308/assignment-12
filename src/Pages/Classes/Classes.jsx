import { useEffect, useState } from "react";
import AllClasses from "../../components/AllClasses/AllClasses";


const Classes = () => {
    const [classes,setClasses]=useState([])
    useEffect(()=>{
        fetch('class.json')
        .then(res=>res.json())
        .then(data=>{
          
            setClasses(data)})
    },[])
    return (
            
            <div className="grid md:grid-cols-3 gap-4">
                {
                   classes.map(item=><AllClasses key={item._id} item={item}></AllClasses>) 
                }
            </div>
            
        
    );
};

export default Classes;