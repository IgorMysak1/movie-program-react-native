export const toLocalDate = (date) => {
  if (Platform.OS === "ios")
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  else {
    const utc = date.getTime() + date.getTimezoneOffset() * 60000,
      US_time = utc + 3600000 * -4,
      US_date = new Date(US_time);

    return (
      monthName[US_date.getMonth()] +
      " " +
      US_date.getDate() +
      ", " +
      US_date.getFullYear()
    );
  }
};
