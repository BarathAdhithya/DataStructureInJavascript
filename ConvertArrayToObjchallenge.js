const array1 = ["a", "b", "c", "d"];
const array2 = ["x", "v", "a"];

function containsCommonItem2(arr1, arr2) {
  let map = convertArraytoObject(arr1);
  return checkSameElelementExistInArray(arr2, map);
}

function convertArraytoObject(arr1) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[i]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  return map;
}

function checkSameElelementExistInArray(arr2, map) {
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

containsCommonItem2(array1, array2);

// function containsCommonItem3(arr1, arr2) {
//   return arr1.some((item) => arr2.includes(item));
// }

// containsCommonItem3(array1, aray2);
