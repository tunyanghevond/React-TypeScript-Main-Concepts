import { Component } from "react";

const users = [
    {name:'Sarah', age:20},
    {name:'Alex', age:30},
    {name:'Brain', age:25}
];
interface User {
    name:string;
    age: number;
}
interface UserSearchProps {
    users:User []
}

interface UserSearchState {
name:string;
user: User | undefined;
}

class UserSearch extends Component<UserSearchProps >{
    state: UserSearchState= {
        name:'',
        user: undefined
    }
 onClick = () => {
        const foundUser = users.find(user => {
            return user.name === this.state.name;
        })
        this.setState({user:foundUser})
    };
    
render(){

    const {name,user} = this.state

    return <div>
    User Search
    <input type="text" value = {name}  onChange = {(e) => this.setState({name:e.target.value})}/>
    <button onClick = {this.onClick}>Search</button>
    <div>
        {user && user.name}
    </div>
</div>
}
}

export default UserSearch;
