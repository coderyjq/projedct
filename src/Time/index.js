function getTime(time, str = "YYYY-MM-DD hh:mm:ss") {
  const t = new Date(time);
  const timeObj = {
    YYYY: t.getFullYear(),
    MM: t.getMonth() + 1,
    DD: t.getDate(),
    hh: t.getHours(),
    mm: t.getMinutes(),
    ss: t.getSeconds(),
  };

  for (let k in timeObj) {
    str = str.replace(k, timeObj[k] < 10 ? `0${timeObj[k]}` : timeObj[k]);
  }
  return str;
}

export default getTime;
