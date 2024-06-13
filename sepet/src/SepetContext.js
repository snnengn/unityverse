import React, {createContext, useState} from "react";

export const UrunContext = createContext();

export const UrunProvider = ({children}) => {
    const [sepet, setSepet] = useState([]);
    const sepeteEkle = (urun) => {
        setSepet([...sepet, urun])
    }
    const bosSepet = () => {
        setSepet([])
    };

    return (
        <UrunContext.Provider value={{sepet, setSepet, sepeteEkle, bosSepet}}>
        {children}
        </UrunContext.Provider>
    );
};