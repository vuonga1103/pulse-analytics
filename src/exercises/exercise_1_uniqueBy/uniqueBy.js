export default function uniqueBy(data, key) {
  const uniqueObjHash = {}; // Stores unique objects in a hash, where each key is the value of the original object's key. And each value is the most up-to-date object. Ex. {'Person 1' => {...}, ...}

  data.forEach(addUniqueToHash);
  return Object.values(uniqueObjHash);

  function addUniqueToHash(obj) {
    let type = obj[key];
    uniqueObjHash[type] = uniqueObjHash.hasOwnProperty(type)
      ? { ...uniqueObjHash[type], ...obj }
      : obj;
  }
}
