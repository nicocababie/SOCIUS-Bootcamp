import { FaFemale, FaGenderless, FaMale } from "react-icons/fa";
import { Character } from "../interfaces/characters";

interface Props {
    character: Character;
}

export const CharacterCard = ({character}: Props) => {
    const {name, image, gender, status, species} = character;
    const bgColor = status == 'Dead' ? 'bg-red-500' : status == 'Alive' ? 'bg-green-500' : 'bg-yellow-500';
    return (
        <div className='bg-white shadow-md flex flex-col items-center justify-center relative'>
            <img src={image} alt={name} className='w-full h-auto'/>
            <p>Name: <span className='font-semibold'>{name}</span></p>
            <div className='flex items-center'>
                <p>Gender: </p> { gender == 'Female' ? <FaFemale  className='text-rose-400'/> : gender == 'Male' ? <FaMale className='text-blue-600'/> : <FaGenderless className='text-gray-400'/> }
            </div>
            <p>Species: {species}</p>
            <div className={`absolute top-0 right-0 rounded-bl-md p-1 text-white font-bold text-sm ${bgColor}`}>
                {status}
            </div>
        </div>
    )
}