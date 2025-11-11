import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Combine Tailwind classes safely
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Convert a string (like a news title) into a URL-friendly slug
export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-"); // replace spaces with dash
}
