export default function filterBy(data, searchTerm, keys) {
  return data.filter((obj) => {
    let vals = getValsOfObjKeys(obj, keys);
    return checkSearchTermPresence(vals, searchTerm);
  });
}

function getValsOfObjKeys(obj, keys) {
  let vals = [];
  for (const [k, v] of Object.entries(obj)) {
    if (keys.includes(k)) vals.push(v);
  };
  return vals;
}

function checkSearchTermPresence(vals, searchTerm) {
  return vals.some((val) => {
    let re = new RegExp(searchTerm, "i");
    return re.test(val);
  });
}