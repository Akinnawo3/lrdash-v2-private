import React, { createContext, useState } from 'react';

export const ModalsContext = createContext();

const ModalsContextProvider = ({ children }) => {
    const [passwordModal, setPasswordModal] = useState(false);
    const [selectBusinessModal, setSelectBusinessModal] = useState(false);
    const [addBusinessModal, setAddBusinessModal] = useState(false);
    const [changePasswordModal, setChangePasswordModal] = useState(false);

    return (
        <ModalsContext.Provider value={{
            passwordModal, setPasswordModal,
            selectBusinessModal, setSelectBusinessModal,
            addBusinessModal, setAddBusinessModal,
            changePasswordModal, setChangePasswordModal
        }}>
            {children}
        </ModalsContext.Provider>
    )
}

export default ModalsContextProvider;
