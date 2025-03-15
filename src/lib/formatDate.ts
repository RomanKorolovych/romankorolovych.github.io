export const formatDate = (
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
}) => {
  return new Intl.DateTimeFormat("en-US", options).format(date)
}
