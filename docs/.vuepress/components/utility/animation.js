/**
 *
 * @param sec
 * @returns {Promise<unknown>}
 */
export const pause = (sec) =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000))
