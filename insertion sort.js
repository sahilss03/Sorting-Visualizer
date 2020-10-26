//INSERTION SORT
document.getElementById('insertion_sort_button').addEventListener('click', insertionSort);

function insertionSort() {
    let t = 0;
    let n = arr.length;
    let s = getspeed();
    let speed_var = 500 / s;
    for (let i = 0; i < n; i++) {
        let key,j;
        setTimeout(() => {
          arr[i].style.backgroundColor = "yellow";
            key = height[i];
            j = i - 1;
        }, t = t + speed_var);

            setTimeout(() => {

                    while (j >= 0 && height[j] > key) {
                        arr[j].style.backgroundColor = "red";
                        height[j + 1] = height[j];
                        arr[j+1].style.height=`${height[j+1]}px`;
                        arr[j+1].style.backgroundColor = "red";
                        j = j - 1;
                    }

            }, t=t+speed_var);


        setTimeout(() => {
            height[j + 1] = key;
            arr[j+1].style.height=`${key}px`;
        }, t = t + speed_var);

        setTimeout(() => {
            while(i>=0){
              arr[i].style.backgroundColor = "green";
              i--;
            }
        }, t = t + speed_var);

    }

}
