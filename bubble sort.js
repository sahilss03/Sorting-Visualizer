//BUBBLE SORT
document.getElementById('bubble_sort_button').addEventListener('click', bubbleSort);

function bubbleSort() {
  let time = 0;
  let n = arr.length;
  let s = getspeed();
  let speed_var = 50 / s;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setTimeout(() => {
        arr[j].style.backgroundColor = 'yellow';
      }, time = time + speed_var);
      setTimeout(() => {
        if (height[j] > height[j + 1]) {
          arr[j + 1].style.backgroundColor = 'red';
          let t = height[j];
          height[j] = height[j + 1];
          height[j + 1] = t;
          arr[j].style.height = `${height[j]}px`;
          arr[j + 1].style.height = `${height[j + 1]}px`;
        }
      }, time = time + speed_var);
      setTimeout(() => {
        arr[j].style.backgroundColor = 'blue';
      }, time = time + speed_var);

    }
    setTimeout(() => {
      arr[n - i - 1].style.backgroundColor = 'green';
    }, time = time + speed_var);
  }

  setTimeout(() => {
    arr[0].style.backgroundColor = 'green';
  }, time = time + speed_var);

}
