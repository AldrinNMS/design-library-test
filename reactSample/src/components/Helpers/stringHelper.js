export const replaceAllText = (text = "", replace = "", replacement = "") => {
  let textToReplace = text?.toString();

  textToReplace = textToReplace?.replaceAll(replace, replacement);

  return textToReplace;
};

export const percentageCalcu = (value, total) => {
  return parseInt((value * 100) / total);
};

export const capitalizeFirstLetter = (text) => {
  return text.length > 0 ? text.charAt(0).toUpperCase() + text.slice(1) : "";
};
export const snakeToCapitalized = (role) =>
  role ? role.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) : "";
export const capitalizeFirst = (str) =>
  str ? str.replace(/^\w/, (c) => c.toUpperCase()) : "";
export const truncateText = (text = "", length = 10) =>
  text.substring(0, length) + `${text.length > length ? "..." : ""}`;
export const ucWords = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const isBlank = (str) => !str || /^\s*$/.test(str);
