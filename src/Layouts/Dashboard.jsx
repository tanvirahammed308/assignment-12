import { Link, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaHome,
  FaFile,
  FaUsers,
} from "react-icons/fa";

const Dashboard = () => {
  const isAdmin = true;
  // const isInstructor = true;
  // const isUser=true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-top mt-5">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {isAdmin  ?  (
            <>
             
              <li>
                <Link to="/">
                  <FaHome></FaHome>Admin Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allclasses">
                  <FaFile></FaFile>Manage Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/allusers">
                  <FaUsers></FaUsers>All Users
                </Link>
              </li>
            </>
          ) 
          : (
            <>
              <li>
                <Link to="/">
                  <FaHome></FaHome>User Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myselectedclass">
                  <FaShoppingCart></FaShoppingCart>My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myenroll">
                  <FaFile></FaFile>My Enrolled Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/paymenthistory">
                  <FaWallet></FaWallet>Payment History
                </Link>
              </li>
            </>
          )
          }
          {/* {isUser &&
           
            <>
              <li>
                <Link to="/">
                  <FaHome></FaHome>User Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myselectedclass">
                  <FaShoppingCart></FaShoppingCart>My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myenroll">
                  <FaFile></FaFile>My Enrolled Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/paymenthistory">
                  <FaWallet></FaWallet>Payment History{" "}
                </Link>
              </li>
            </>
          } */}
          {/* {isInstructor ? (
            <></>
          ) : (
            <>
              <li>
                <Link to="/">
                  <FaHome></FaHome>Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myselectedclass">
                  <FaShoppingCart></FaShoppingCart>My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myenroll">
                  <FaClipboardList></FaClipboardList>My Enrolled Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/paymenthistory">
                  <FaWallet></FaWallet>Payment History{" "}
                </Link>
              </li>
            </>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
