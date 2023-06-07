import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassItem from "../../../components/ClassItem/ClassItem";


const PopularClass = () => {
    const [classes,setClasses]=useState([])
    useEffect(()=>{
        fetch('class.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(item=>item.category === "popular")
            setClasses(popularItems)})
    },[])
    return (
        <section>
            <SectionTitle subHeading={'Here Is Our'} heading={'Popular Classes'}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {
                   classes.map(item=><ClassItem key={item._id} item={item}></ClassItem>) 
                }
            </div>
            
        </section>
    );
};

export default PopularClass;