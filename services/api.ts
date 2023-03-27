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
        enabled: true,
        staleTime: 300000, // 5 minutes
    });
}
