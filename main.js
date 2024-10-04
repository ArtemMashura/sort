function shellSort(arr) {
    var n = arr.length;

    // Start with a big gap, then reduce the gap
    for (var gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        // Do a gapped insertion sort for this gap size.
        for (var i = gap; i < n; i++) {
            // add arr[i] to the elements that have been gap sorted
            var temp = arr[i];
            var j;
            for (j = i; j >= gap && arr[j-gap] > temp; j -= gap)
                arr[j] = arr[j-gap];
 
            // put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
    }
    return arr;
};

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };

const array = [5, 3, 2, 7, 6, 1, -5]

var startTime = performance.now()
const shellSortedArray = shellSort(array)
var endTime = performance.now()

console.log(shellSortedArray)
console.log(endTime - startTime)

var startTime1 = performance.now()
const quickSortedArray = quickSort(array)
var endTime1 = performance.now()

console.log(quickSortedArray)
console.log(endTime1 - startTime1)
