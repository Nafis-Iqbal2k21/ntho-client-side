import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const useMyRegistrations = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myRegistrations = [] } = useQuery({
        queryKey: ['selected', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/registrations?email=${user?.email}`)
            return res.data;
        },
    })

    return [myRegistrations,  refetch]

}
export default useMyRegistrations;