//BUBBLE SORT
document.getElementById('bubble_sort_button').addEventListener('click', bubbleSort);

function bubbleSort() {
  let t = 0;
  let n = arr.length;
  let s = getspeed();
  let k = 50 / s;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setTimeout(() => {
        arr[j].style.backgroundColor = 'yellow';
      }, t = t + k);
      setTimeout(() => {
        if (height[j] > height[j + 1]) {
          arr[j + 1].style.backgroundColor = 'red';
          let t = height[j];
          height[j] = height[j + 1];
          height[j + 1] = t;
          arr[j].style.height = `${height[j]}px`;
          arr[j + 1].style.height = `${height[j + 1]}px`;
        }
      }, t = t + k);
      setTimeout(() => {
        arr[j].style.backgroundColor = 'blue';
      }, t = t + k);

    }
    setTimeout(() => {
      arr[n - i - 1].style.backgroundColor = 'green';
    }, t = t + k);
  }

  setTimeout(() => {
    arr[0].style.backgroundColor = 'green';
  }, t = t + k);

}