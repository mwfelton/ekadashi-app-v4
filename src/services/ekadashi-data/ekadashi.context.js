import React, { useState, createContext, useEffect, useMemo } from "react";

import { ekadashiRequest } from "./ekadashi.service";

export const EkadashiContext = createContext()

export const EkadashiContextProvider = ({children}) => {
    const [dates, setDates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const retriveEkadashiDates = () => {
        setIsLoading(true);
        setTimeout(() => {
            ekadashiRequest()
            .then((results) => {
                setIsLoading(false);
                setDates(results);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });
        }, 2000);
    };
    useEffect(() => {
        retriveEkadashiDates()
    }, []);

    console.log(dates)
    return (
        <EkadashiContext.Provider
            value={{
                dates,
                isLoading,
                error,
            }}
        >
            {children}
        </EkadashiContext.Provider>
    )
}