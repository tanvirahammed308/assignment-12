import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const AllClasses = ({ item }) => {
  const {
    _id,
    image,
    name,
    instructorName,
    price,
    availableSeats,
    numberOfStudents,
  } = item;
  const [,refetch]=useCart();
    const navigate=useNavigate();
    const location=useLocation();
  const {user}= useContext(AuthContext);
  const handleSelectCart=(item)=>{
    console.log(item);
    if (user && user.email) {
      const cartItem={classItemId:_id,name,price,image,email: user.email}
      fetch("http://localhost:5000/carts",{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(cartItem)
      })
      .then(res=>res.json())
      .then(data=>{
        if (data.insertedId) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class Added On the Cart',
            showConfirmButton: false,
            timer: 1500
          })
          
        }
      })
      
    }
    else{
      Swal.fire({
        title: 'Please Login First',
       
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now!'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state:{from:location}})
        }
      })
    }

  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-40 ">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="pic"
          className="rounded-xl w-full md:w-[250px] md:h-[120px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Instructor :{instructorName}</p>
        <p>Price :{price}</p>
        <p>Number of students :{numberOfStudents}</p>
        <p>Available seats :{availableSeats}</p>
        <div className="card-actions">
          <button onClick={()=>handleSelectCart(item)} className="btn btn-primary">Select </button>
        </div>
      </div>
    </div>
  );
};

export default AllClasses;
