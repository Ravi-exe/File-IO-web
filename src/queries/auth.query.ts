
import { useMutation, useQuery} from "@tanstack/react-query"
import { signinApi, signupApi } from "../api/auth/auth.api"
// import { Navigate } from "react-router-dom"




export const useSignin = () => {
    return useMutation({
        mutationFn: signinApi,
        // onSuccess: (data) => Navigate("/dashboard")
        // onError: (err) => {
        //     setError("root", {
        //         message: err.message
        //     })
        // }
    })
}


export const useSignup = () => {
    return useMutation({
        mutationFn: signupApi
    })
}