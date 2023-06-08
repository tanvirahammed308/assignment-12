

const InstructorItem = ({item}) => {
    const {image,name,email}=item;
    
    return (
        <div className="flex space-x-4 space-y-4 mb-8">
        <img src={image} alt="" className="w-[290px] lg:w-[120px] "/> 
        <div className="pt-10">
         <h3>Name :{name}</h3>
         <p>email:{email}</p>
        </div>
     </div>
    );
};

export default InstructorItem;