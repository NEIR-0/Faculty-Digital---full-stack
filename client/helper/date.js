export const dateString = (FullDate) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const splitDate = new Date(FullDate);
  const date = splitDate.getDate();
  const month = monthNames[splitDate.getMonth()];
  const year = splitDate.getFullYear();
  return `${date} - ${month} - ${year}`;
};

export const monthOnly = (FullDate) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const splitDate = new Date(FullDate);
  const month = monthNames[splitDate.getMonth()];
  return `${month}`;
};
