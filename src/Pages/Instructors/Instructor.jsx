

const Instructor = ({instructor}) => {
    const {image,name,email}= instructor;
    return (
        <div className="flex  space-x-4 space-y-10 mb-8">
        <img src={image} alt="" className="w-[250px] h-[300px] lg:w-[190px] mt-40"/> 
        <div className="pt-40">
         <h3>Name :{name}</h3>
         <p>email:{email}</p>
        </div>
     </div>
    );
};

export default Instructor;