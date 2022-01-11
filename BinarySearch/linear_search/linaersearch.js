let arr = [ 1, 2, 3, 4, 5 ];
let search_element = 4;

function search(arr, search_Element) {
    let left = 0;
    let length = arr.length;
    let right = length - 1;
    let position = -1;

    for(left = 0; left <= right;) {
   
        if (arr[left] == search_Element) {
            position = left;

            console.log(position + 1);
            break;
        }
        if (arr[right] == search_Element)
        {
            position = right;
            console.log(position + 1);
            break;
        }
        left++;
        right--;
    }
    
}
search(arr, search_element);

