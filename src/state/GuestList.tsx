import { useState } from "react";

const GuestList: React.FC = () => {
const [name,setName] = useState('');
const [guests, setGuests] = useState<string[]>([]);

const onClick = () => {
    setName('');
    setGuests([...guests,name]);
}

    return (
    <div> 
    <h1>Guest List</h1>
    <ul>
        {guests.map(guest => {
            return <li key={guest}>{guest}</li>
        })}
    </ul>
    <input type="text" value = {name}  onChange = {(e) => setName(e.target.value)}/>
    <button onClick = {onClick}>Add Guest</button>
    </div>
    )
};

export default GuestList;