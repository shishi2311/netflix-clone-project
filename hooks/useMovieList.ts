import useSWR from "swr";
import fetcher from "@/lib/fetcher";
const useMovieList = () => {
    const{data, error, isLoading} = useSWR("/api/movies", fetcher ,{ 
        revalidateIfStale: false , 
        revalidateOnFocus: false, 
        revalidateOnReconnect: false
    });

    return {
        data,
        error,
        isLoading
    }
}
export default useMovieList;
// This hook is used to fetch the list of movies from the API. It uses the SWR library to handle data fetching and caching.
// The fetcher function is imported from the lib folder and is used to make the API call. The hook returns the data, error, and loading state of the request.
// The data is the list of movies, the error is any error that occurred during the request, and the loading state is a boolean indicating whether the request is still in progress.
// The revalidateIfStale, revalidateOnFocus, and revalidateOnReconnect options are set to false to prevent the data from being revalidated when the component is focused or reconnected.
// This is useful for performance optimization, as it reduces the number of API calls made by the application.
// The hook can be used in any component to fetch the list of movies and display them to the user. It is a simple and efficient way to handle data fetching in a React application.