//INSERTION SORT
document.getElementById('insertion_sort_button').addEventListener('click', insertionSort);

function insertionSort() {
    let t = 0;
    let n = arr.length;
    let s = getspeed();
    let speed_var = 50 / s;
    for (let i = 1; i < n; i++) {
        let key,j;
        setTimeout(() => {
            key = height[i];
            j = i - 1;
        }, t = t + 500);
    
            setTimeout(() => {
                
                    while (j >= 0 && height[j] > key) {
                        height[j + 1] = height[j];
                        arr[j+1].style.height=`${height[j+1]}px`;
                        j = j - 1;
                    }
            
            }, t=t+500);
            

        setTimeout(() => {
            height[j + 1] = key;
            arr[j+1].style.height=`${key}px`;
        }, t = t + 500);
    
    }

}