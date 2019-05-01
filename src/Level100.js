/**
 * Remove duplicates from an unsorted list
 * @param {Array} array
 */
const FilterDuplication = array => {
  if (!array) return null;

  try {
    return [...new Set(array)];
  } catch (err) {
    console.log(err);
    return null;
  }
};

/**
 * Accept two strings and return true if one string is a permutation of the other
 * @param {String} stringOne
 * @param {String} stringTwo
 */
const IsPermutation = (stringOne, stringTwo) => {
  if (typeof stringOne !== "string" || typeof stringTwo !== "string")
    return false;

  if (stringOne.length !== stringTwo.length) return false;

  let sortedStrOne = stringOne
    .split("")
    .sort()
    .join("");
  let sortedStrTwo = stringTwo
    .split("")
    .sort()
    .join("");

  console.log(`sortedStrOne=${sortedStrOne}, sortedStrTwo=${sortedStrTwo}`);

  return sortedStrOne === sortedStrTwo;
};
