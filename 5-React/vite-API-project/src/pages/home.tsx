import { useEffect } from 'react'
import { useCharacter } from '../hooks/useCharacter';
import { Character } from '../interfaces/characters';
import { CharacterCard, Loading } from '../components';

export const Home = () => {
    const { isLoading, fetchCharacters, characters } = useCharacter();

    useEffect(() => {
        fetchCharacters();
    }, [])

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
        fetchCharacters();
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading])

    return (
        <>
            <div className='container mx-4'>
                <div className='grid grid-cols-4 gap-4'>
                    {
                        characters.map((character: Character) => (
                            <CharacterCard character={character} key={character.id}/>
                        ))
                    }
                </div>
                {isLoading && <Loading />}
            </div>
        </>
    )
}