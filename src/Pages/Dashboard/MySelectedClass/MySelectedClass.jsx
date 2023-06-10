import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";

const MySelectedClass = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  // const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
          // headers:{
          //   'content-type':'application/json'
          // },
          // body:JSON.stringify(selectItem)
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <div className=" h-[60px] ">
        <h2 className="text-3xl text-purple-400">
          Total Classes : {cart.length}
        </h2>
        {/* <h2 className="text-3xl text-purple-400">Total Price : {total}</h2> */}
       
      </div>
      <div className="overflow-x-auto mt-20 lg:mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.instructorName}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn  btn-warning btn-xs"
                  >
                    
                    <FaTrashAlt className="text-red-700"></FaTrashAlt>Remove
                  </button>
                </td>
                <td>
                <button className="btn  btn-primary btn-sm mt-1">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
