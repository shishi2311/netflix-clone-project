



import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser(); // ✅ Correctly extracting mutate

  // Check if the movie is in the user's favorites list
  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    console.log('Toggle favorites clicked for movieId:', movieId); // Debugging log
    try {
      let response;

      if (isFavorite) {
        console.log('Removing from favorites'); // Debugging log
        response = await axios.delete("/api/favorite", { data: { movieId } });
      } else {
        console.log('Adding to favorites'); // Debugging log
        response = await axios.post("/api/favorite", { movieId });
      }

      console.log('API Response:', response); // Debugging log

      // After toggling, mutate to refresh data
      mutate(); // Refresh currentUser data
      mutateFavorites(); // Refresh the favorite list
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  }, [movieId, isFavorite, mutate, mutateFavorites]);

  // Set the correct icon based on whether the movie is a favorite
  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div 
      onClick={toggleFavorites} 
      className="
        cursor-pointer 
        group/item 
        w-6 
        h-6 
        lg:w-10 
        lg:h-10 
        border-white 
        border-2 
        rounded-full 
        flex 
        justify-center 
        items-center 
        transition 
        hover:border-neutral-300
      "
    >
      <Icon className="text-white" size={20} />
    </div>
  );
};

export default FavoriteButton;
