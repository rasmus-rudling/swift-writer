import React, { useState, useContext } from 'react';

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
}

export const useUserUpdate = () => {
    return useContext(UserUpdateContext);
}

const UserProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});

    const changeUserInfo = (newUserInfo) => {
        setUserInfo(newUserInfo);
    }

    return (
        <UserContext.Provider value={userInfo}>
            <UserUpdateContext.Provider value={changeUserInfo}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
}

export default UserProvider;