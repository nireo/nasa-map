import axios, { AxiosResponse } from 'axios';
import { DataResponse } from '../interfaces/response.interface';

export const LoadData = async (): Promise<DataResponse> => {
    const response: AxiosResponse<DataResponse> = await axios.get("http://localhost:8080/api/data");
    return response.data;
}