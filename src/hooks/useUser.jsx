import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useUser = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: userData = [] } = useQuery({
        queryKey: ['user', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/user?email=${user?.email}`)
            return res.data;
        },
    })

    return [userData,  refetch]

}
export default useUser;