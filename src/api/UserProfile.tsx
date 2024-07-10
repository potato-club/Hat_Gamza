import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../types/User';

const UserProfile= () => {
    const [user,setUser] = useState<User | null>(null);

    useEffect(()=>{
        axios.get('https://koreanjson.com/users/1')
        .then(reponse => setUser(reponse.data))
        .catch(error => console.log(error));
    }, []);

    return ( 
        <div>{user && <p>{user?.name}</p>}</div>
    );
};

export default UserProfile;