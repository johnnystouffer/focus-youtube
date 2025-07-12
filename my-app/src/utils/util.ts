import { decode } from "he";

export const decodeText = (text: string): string => decode(text);