import React from "react";
import { isEmpty  } from "lodash";

import Moviecard from "./Moviecard";


interface MovieListProps {
    data: {
        id: string | number;
        [key: string]: unknown;
    }[];
    title: string;
}

const MovieList: React.FC<MovieListProps> = ({data, title}) => {
    if(isEmpty(data)){
        return null;
    }
    return(
        <div className="px=4 md:px-12 mt-4 space-y-8">
            <div className="">
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
                    {title}
                </p>
                <div className="grid grid-cols-4 gap-2">
                    {data.map( (movie) => (
                        <Moviecard
                            key={movie.id}
                            data={movie} />
                    ))}
                </div>

            </div>

        </div>
    )
};


export default MovieList;