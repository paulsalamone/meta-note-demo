export default function cleaner(arr) {
  const result = arr.filter((e) => {
    return e !== "of" && e !== "the";
  });
  console.log(result);

  return result;
}
