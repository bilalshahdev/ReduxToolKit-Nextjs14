const formatDate = (date: string) => {
  const dateObject = new Date(date);

  if (isNaN(dateObject.getTime())) {
    throw new Error("Invalid date");
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return dateObject.toLocaleDateString("en-US", options);
};

export default formatDate;
