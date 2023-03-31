const parseDate = (date) => {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

const formatDate = (dateStr) => {
  // Parse the input date string
  const date = new Date(dateStr);
  const pad = (num) => (num < 10 ? `0${num}` : num);

  const formattedDate = `${pad(date.getDate())}:${pad(
    date.getMonth() + 1
  )}:${date.getFullYear()} ${pad(date.getHours())}:${pad(
    date.getMinutes()
  )}:${pad(date.getSeconds())}`;

  return formattedDate;
};

module.exports = { parseDate, formatDate };
