import { useEffect, useState } from "react";



export default function useLocalStorage(key: string): {value: string, setLSkey: any} {

    const [value, setValue] = useState(() => {
       return localStorage.getItem(key) || ""
    })

    useEffect(() => {       
        console.log("render") 
        localStorage.setItem(key, value  )
    }, [key, value])

    return {
        "value": value, 
        "setLSkey": setValue
    }
}