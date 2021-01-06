import axios, { AxiosResponse } from "axios";
import { DataResponse } from "../interfaces/response.interface";

export const LoadData = async (): Promise<DataResponse> => {
    const response: AxiosResponse<DataResponse> = await axios.get(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
    );
    return response.data;
};
