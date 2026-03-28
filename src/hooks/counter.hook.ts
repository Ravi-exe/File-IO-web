import { useState } from "react";





export default function useCounter(): [number, any]{

    const [counter, setCounter] = useState<number>(0)

    return [counter, (num: number) => setCounter(counter+num)]

}