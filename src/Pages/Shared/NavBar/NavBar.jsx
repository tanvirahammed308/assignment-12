import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="navbar bg-slate-600 text-white fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-red-600"
            >
              <li className="text-red-800">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/instructors">Instructors</Link>
              </li>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
              <li>
                <Link to="/secret">Secret</Link>
              </li>
              <li>
                {user ? (
                  <>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-active btn-neutral"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="btn">
                      Login
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-green-400">
            Global Language Hub
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : "default"
                }
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : "default"
                }
              >
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/secret"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : "default"
                }
              >
                Secret
              </NavLink>
            </li>
            <li>
              <Link to='/'>
                <button className="">
                  Inbox
                  <div className="badge badge-secondary">+99</div>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span>{user?.displayName}</span>
              <button onClick={handleLogOut} className="btn ml-10">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
