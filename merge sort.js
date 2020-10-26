//MERGE SORT
document.getElementById('merge_sort_button').addEventListener('click', mergeSort);
let t = 0;
function mergeSort() {
    t = 0;
    let l = 0, r = arr.length - 1;
    MergeSort(arr, l, r);
}
function Merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    // Create temp arrays 
    let L = [];
    let R = [];

    for (let i = 0; i < n1; i++)
        L[i] = height[l + i];

    for (let j = 0; j < n2; j++)
        R[j] = height[m + 1 + j];


    let i = 0;

    let j = 0;

    let k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            height[k] = L[i];
            arr[k].style.height = `${height[k]}px`;
            i++;
        }
        else {
            height[k] = R[j];
            arr[k].style.height = `${height[k]}px`;
            j++;
        }
        k++;
    }


    while (i < n1) {
        console.log(k + " " + arr.length);
        height[k] = L[i];
        arr[k].style.height = `${height[k]}px`;
        i++;
        k++;
    }

    while (j < n2) {
        height[k] = R[j];
        arr[k].style.height = `${height[k]}px`;
        j++;
        k++;
    }
}
function MergeSort(arr, l, r) {
    let mid;
    setTimeout(() => {
        if (l < r) {
            mid = parseInt(l + (r - l) / 2);
            MergeSort(arr, l, mid);
            MergeSort(arr, mid + 1, r);
            Merge(arr, l, mid, r);
        }
    }, t = t + 100);
}
