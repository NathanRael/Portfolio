import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyToClipboard = async (text : string) => {
  try {
    await window.navigator.clipboard.writeText(text);
  } catch (e) {
    console.error("Error while coping to clipboard : ", e)
  }
}


export function roundUpToNearestTen(value : number) {
  return Math.ceil(value / 10) * 10;
}
