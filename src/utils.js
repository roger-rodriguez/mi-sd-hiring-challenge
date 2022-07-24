/**
 *
 * @param {number} time - Unix time in seconds returns it in miliseconds
 */
export function convertDate(time) {
  return time * 1000;
}

/**
 *
 * Date - Return the current date in MM/DD/YYYY format
 */
export function date() {
  const date = new Date(Date.now());
  return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
}

/*
 *
 * Display Inner HTML for Weather App content
 */
