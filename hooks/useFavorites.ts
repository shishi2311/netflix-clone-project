import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useFavorites = () => {
  const {
     data, 
     error, 
     isLoading ,
     mutate
    } = useSWR("/api/favorites", fetcher ,{
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
     });

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
export default useFavorites;
// This hook fetches the user's favorite items from the API using SWR.
// It returns the favorites data, loading state, and error state.
// The fetcher function is used to make the API call.
// The data is fetched from the "/api/favorites" endpoint.
// The hook uses SWR for data fetching, caching, and revalidation.