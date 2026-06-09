import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Build an Unsplash image URL with responsive params from a photo id. */
export function unsplash(id: string, w = 1200, q = 80) {
  return `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`
}

/**
 * Resolve an image source. Local bundled assets and absolute/data URLs are
 * returned as-is; bare Unsplash photo ids are expanded via unsplash().
 */
export function img(src: string, w = 1200, q = 80) {
  if (/^(https?:|data:|blob:|\/)/.test(src)) return src
  return unsplash(src, w, q)
}
