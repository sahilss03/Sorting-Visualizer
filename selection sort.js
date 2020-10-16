//SELECTION SORT
document.getElementById('selection_sort_button').addEventListener('click', selectionSort);

function selectionSort() {
  let time = 0;
  let n = arr.length;
  let s = getspeed();
  let speed_var = 50 / s;
  let k;

  for (let i = 0; i < n - 1; i++) {

    setTimeout(() => {
      arr[i].style.backgroundColor = 'red';
    }, time = time + speed_var);
    let k = i;
    for (let j = i + 1; j < n; j++) {

      setTimeout(() => {
        arr[j + 1].style.backgroundColor = 'yellow';
      }, time = time + speed_var);

      setTimeout(function () {
        if (height[j] < height[k]) {
          if (i != k) {
            arr[k].style.backgroundColor = 'blue';
          }
          k = j;
          arr[k].style.backgroundColor = 'red';
        }
        arr[j + 1].style.backgroundColor = 'blue';

      }, time = time + speed_var);

    }
    setTimeout(function () {
      let t = height[k];
      height[k] = height[i];
      height[i] = t;
      arr[k].style.backgroundColor = 'blue';
      arr[i].style.height = `${height[i]}px`;
      arr[k].style.height = `${height[k]}px`;

      arr[i].style.backgroundColor = "green";
    }, time = time + speed_var);
  }
  setTimeout(() => {
    arr[n - 1].style.backgroundColor = 'green';
  }, time = time + speed_var);

}
