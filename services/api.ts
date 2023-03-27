import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_BASE_URL = 'https://dourados-store-api.vercel.app/';

export function get<T>(endpoint: string) {
    const queryKey = ['get', endpoint];

    const queryFn = async () => {
        const response = await axios.get<T>(`${API_BASE_URL + endpoint}`);
        return response.data;
    };
    return useQuery({
        queryKey,
        queryFn,
        staleTime: 300000, // 5 minutes
    });
}

export function post<T>(endpoint: string, data: any) {
    const queryKey = ['post', endpoint];

    const queryFn = async () => {
        const response = await axios.post<T>(`${API_BASE_URL + endpoint}`, data);
        return response.data;
    };
    return useQuery({
        queryKey,
        queryFn,
    });
}

export async function postStripe<T>(data: any) {
    return await axios.post<T>(`/api/checkout_sessions`, data);
}