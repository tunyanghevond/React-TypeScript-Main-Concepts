import { useState } from "react";
const users = [
    {name:'Sarah', age:20},
    {name:'Alex', age:30},
    {name:'Brain', age:25}
];

const SerachUsers: React.FC = () => {

const [name,setName] = useState('');
const [user,setUser] = useState<{name:string,age:number;} | undefined>()
 
const onClick = () =>{
    const foundUser = users.find(user => {
        return user.name === name;
    })
    setUser(foundUser)
};

return <div>
    User Search
    <input type="text" value = {name}  onChange = {(e) => setName(e.target.value)}/>
    <button onClick = {onClick}>Search</button>
    <div>
        {user && user.name}
    </div>
</div>
};

export default SerachUsers;