export const jsonFormat = str => {
  const string = JSON.stringify(str).replace(/(?:\\[rn])+/g, "");
  var object = {};
  try {
    object = JSON.parse(JSON.parse(string));
  } catch {
    return {}
  }

  return object;
};
