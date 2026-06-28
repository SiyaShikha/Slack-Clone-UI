import axios from "axios";
import type { Channel } from "../types/Channel";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
  timeout: 5000,
});

export const fetchChannels = async (): Promise<Channel[]> => {
  const response = await api.get("/channels");
  return response.data;
};

export const createChannel = async (name: string): Promise<Channel> => {
  const response = await api.post<Channel>("/channels", { name });
  return response.data;
};
