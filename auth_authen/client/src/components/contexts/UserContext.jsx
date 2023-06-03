import React, { createContext } from 'react';

const AuthContext = createContext();

const UserContext = ({children}) => {
    const user = {name: "Anam"};

    const authInfo = {user};
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;