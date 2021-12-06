// Time Complicity 
// Best O(n log(n));
// Average  O(n log(n));
//Worst   O(n^2);


var items = [5,3,7,6,2,9];
console.log(items.sort().join(" "));
//prints [2, 3, 5, 6, 7, 9]

//


// var arr = [5,3,7,6,2,9];

// function Quicksort(arr, left, right) {
//     var pivot = arr[Math.floor((right+left)/2)],
//      i = left,
//      j = right;

//     while (i <= j) {
//         while (arr[i] < pivot) {
//             i++;
//         }
//         while (arr[j] > pivot) {
//             j--;
//         }

//         if(i <= j) {
//             swap(arr, i, j);
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// console.log(Quicksort(arr, left, right));

//

var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}



function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}


function quickSort(items, left, right) {

    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray.join(" "));


//
