import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

// import useAxiosSecure from './useAxiosSecure';
// import useAuth from './useAuth';

// import { AuthContext } from "../../providers/AuthProvider";


const useCart = () => {
//    const{user,loading}=useAuth();
  const {user}=useContext(AuthContext)
    // const token=localStorage.getItem('access-token');
    // const [axiosSecure]=useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts',user?.email],
        // enabled: !loading,
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            
            return res.json()
        },
        // queryFn: async ()=>{
        //     const res = await axiosSecure(`https://bistro-boss-server-eight-zeta.vercel.app/carts?email=${user?.email}`,{
        //         headers:{
        //             authorization: `bearer ${token}`
        //         }
        //     })
            
        //     return res.data
        // },
      })
    
    
return [cart,refetch]
};

export default useCart;