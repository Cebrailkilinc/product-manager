"use client"

import { createContext, useContext, Dispatch, SetStateAction, useState, Children } from "react"

type DataType = {
    firstName: string
}

interface ContextProps {
    isSpinner:boolean, 
    setIsSpinner:Dispatch<SetStateAction<boolean>>
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    data: DataType[]
    setData: Dispatch<SetStateAction<DataType[]>>
    switched:boolean, 
    setSwitched:Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    isModalOpen: true,
    setIsModalOpen: (): boolean => true,
    isSpinner: true,
    setIsSpinner:(): boolean => true,
    data: [{ firstName: "" }],
    setData: (): DataType[] => [],
    switched:true, 
    setSwitched:(): boolean => true
})

export const GlobalContextProvider = ({ children }: any) => {

    const [data, setData] = useState<[] | DataType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSpinner, setIsSpinner] = useState(false);
    const [switched, setSwitched] = useState(true);

    return (
        <GlobalContext.Provider value={{ setIsModalOpen, isModalOpen, data, setData,isSpinner, setIsSpinner,switched, setSwitched }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);