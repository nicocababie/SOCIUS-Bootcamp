import { useState } from "react";
import { Character, RickResponse } from "../interfaces/characters";
import apiRick from "../api/apiRick";

export const useCharacter = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);

    const fetchCharacters = async () => {
        setIsLoading(true);
        const response = await apiRick.get<RickResponse>(`/character?page=${page}`);
        const characters: Character[] = response.data.results;
        setCharacters(prevCharacters => [...prevCharacters, ...characters]);
        setPage(prevPage => prevPage + 1);
        setIsLoading(false);
    };

    return {
        isLoading,
        characters,
        fetchCharacters
    };
}