import { type ClassValue } from "react";

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}
