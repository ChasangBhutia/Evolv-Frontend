import { useMutation } from "@tanstack/react-query";
import { login, register } from "@/services/authApi";
import { LoginData, RegisterData } from "@/types/auth.types";

export const useRegister = () => {
    return useMutation({
        mutationFn : (data : RegisterData) => 
            register(data)
    })
}

export const useLogin = () =>{
    return useMutation({
        mutationFn : (data : LoginData) =>
            login(data)
    })
}