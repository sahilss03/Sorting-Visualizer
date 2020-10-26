document.getElementById('heap_sort_button').addEventListener('click', function HEAPSORT() {
    HeapSort(height);
});
let array_length;
function heap_root(height, i) {
   
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;
    if (left < array_length && height[left] > height[max]) {
        max = left;
    }

    if (right < array_length && height[right] > height[max]) {
        max = right;
    }

    if (max != i) {
        swap(height, i, max);
        arr[max].style.height=`${height[max]}px`;
        arr[i].style.height=`${height[i]}px`;
        heap_root(height, max);
    }
}

function swap(height, index_A, index_B) {
    let temp = height[index_A];

    height[index_A] = height[index_B];
    height[index_B] = temp;
}
function HeapSort(height) {
    t=0;
    console.log("clicked?");
    array_length = arr.length;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        setTimeout(() => {
            heap_root(height, i);
        }, t=t+100);
        
    }
  

    for (let i = arr.length - 1; i > 0; i--) {
        setTimeout(() => {
            swap(height, 0, i);
            arr[0].style.height=`${height[0]}px`;
            arr[i].style.height=`${height[i]}px`;
            array_length--;
            heap_root(height, 0);
        }, t=t+100);
    }

}
