import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import InstructorItem from "../../../components/InstructorItem/InstructorItem";


const PopularInstructor = () => {
    const [instructors,setInstructors]=useState([])
    useEffect(()=>{
        fetch('instructorInfo.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems =data.filter(item=>item.category === "popular")
            setInstructors(popularItems)})
    },[])
    return (
        <section>
            <SectionTitle subHeading={'Here is our Top'} heading={'instructors'}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {instructors.map(item=><InstructorItem key={item._id} item={item}></InstructorItem>)}
            </div>
        </section>
    );
};

export default PopularInstructor;