//MERGE SORT
document.getElementById('merge_sort_button').addEventListener('click', mergeSort);
function mergeSort() {
    t = 0;
    let l = 0, r = arr.length - 1;
    MergeSort(arr, l, r);
}
function update(x,ind)
{
    setTimeout(() => {
    console.log(x + " " + ind);
    arr[ind].style.height=`${x}px`;
}, t=t+5);
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
            update(height[k],k);
            i++;
        }
        else {
            height[k] = R[j];
            update(height[k],k);
            j++;
        }
        k++;
    }


    while (i < n1) {
        height[k] = L[i];
        update(height[k],k);
        i++;
        k++;
    }

    while (j < n2) {
        height[k] = R[j];
        update(height[k],k);
        j++;
        k++;
    }
}
function MergeSort(arr, l, r) {
    let mid;
        if (l < r) {
            mid = parseInt(l + (r - l) / 2);
            MergeSort(arr, l, mid);
            MergeSort(arr, mid + 1, r);
            Merge(arr, l, mid, r);
        }
}
