import api from "@/lib/axios";
import { RegisterData, LoginData } from "@/types/auth.types";

export const register = async (userData : RegisterData)=>{
    const res = await api.post("/auth/register", userData);
    return res.data;
}

export const login = async (userData : LoginData)=>{
    const res = await api.post("/auth/login", userData);
    return res.data;
}