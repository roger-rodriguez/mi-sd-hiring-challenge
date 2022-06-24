// /**
//  *
//  * @param {number} time - Unix time in seconds returns it in miliseconds
//  */
// export function convertDate(time) {
//   return time * 1000;
// }

export function convertDate(time) {
  return new Date(time * 1000).toLocaleDateString("default", {
    weekday: "long",
  });
}

export function getToday() {
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join("/");
  }

  return formatDate(new Date());
}
