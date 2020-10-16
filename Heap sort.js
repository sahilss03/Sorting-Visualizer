document.getElementById('heap_sort_button').addEventListener('click', HeapSort);
let t=0;
function heapify(height, n, i) {
    setTimeout(() => {
        
        let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;
    if (left < n && height[largest] < height[left]) {
        largest = left;
    }
    if (right < n && height[largest] < height[right]) {
        largest = right;
    }
    
    if (i != largest) {
        let temp = height[i];
        height[i] = height[largest];
        height[largest] = temp;
        arr[i].style.height = `${height[i]}px`;
        arr[largest].style.height = `${height[largest]}px`;
        heapify(height, n, largest);
    }
}, t=t+1000);
}
function HeapSort() {
    let n = arr.length;
    for (let i = n / 2 - 1; i >= 0; i--) {
        setTimeout(() => {
            heapify(height, n, i);
        }, t = t + 1000);

    }
    for (let i = n - 1; i >= 0; i--) {
        setTimeout(() => {
            let temp = height[0];
            height[0] = height[i];
            height[i] = temp;
            arr[0].style.height = `${height[0]}px`;
            arr[i].style.height = `${height[i]}px`;
        }, t=t+1000);       
        heapify(height, i, 0);
    }


}