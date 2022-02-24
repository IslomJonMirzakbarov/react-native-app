export const secToMin = (seconds: number) => {
  return (seconds / 60).toFixed(2);
};

export const formatSec = (seconds: number) => {
  const _min = Math.floor(seconds / 60);
  const _sec = seconds % 60;
  let text = ``;
  if(_min !== 0) {
    text += String(_min) + 'min ';
  }
  if(_sec !== 0) {
    text += String(_sec) + 'sec';
  }
  return text;
}
