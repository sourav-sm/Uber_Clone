import React, {createContext, useState} from 'react';

export const UserDataContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            secondName: ''
        }
    });
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}