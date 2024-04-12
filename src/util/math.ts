/**
 * utils modules
 */


/**
 * clmaping function
 * @param x 
 * @param min 
 * @param max 
 * @returns 
 */
export function clamp(x: number, min: number, max: number) {
  return Math.min(max, Math.max(min, x));
}

