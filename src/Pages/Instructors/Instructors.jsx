import { useEffect, useState } from "react";
import Instructor from "./Instructor";


const Instructors = () => {
    const [instructors,setInstructors]=useState([])
    useEffect(()=>{
        fetch('instructorInfo.json')
        .then(res=>res.json())
        .then(data=>{
           
            setInstructors(data)})
    },[])
    return (
        <div>
           {instructors.map(instructor=><Instructor key={instructor._id} instructor={instructor}></Instructor>)}
        </div>
    );
};

export default Instructors;