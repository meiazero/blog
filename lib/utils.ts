import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateFormater(date: Date | string): string {
  return new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function publishingDateFormatter(data: Date | string): string {
  let date = new Date(data);
  let today = new Date();
  let diffInMilliseconds = today.getTime() - date.getTime();

  let diffInSeconds = diffInMilliseconds / 1000;

  if (diffInSeconds < 60) {
    return "agora";
  }

  let diffInMinutes = diffInSeconds / 60;
  if (diffInMinutes < 60) {
    let minutes = Math.floor(diffInMinutes);
    return `${minutes} ${minutes === 1 ? "minuto" : "minutos"}`;
  }

  if (diffInMinutes < 60) {
    let hours = Math.floor(diffInMinutes);
    return `${hours} ${hours === 1 ? "hora" : "horas"}`;
  }

  let diffInHours = diffInMinutes / 60;
  let days = Math.floor(diffInHours / 24);
  return `${days} ${days === 1 ? "dia" : "dias"}`;
}
