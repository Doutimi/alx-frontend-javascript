export default function cleanSet(set, startString) {
  const result = [];

  // Iterate through the set's values
  for (const value of set) {
    // Check if the value starts with the specified startString
    if (startString.trim() !== '' && value.startsWith(startString)) {
      // Append the rest of the string after the startString to the result array
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');

  // Join the resulting strings with "-"
}
