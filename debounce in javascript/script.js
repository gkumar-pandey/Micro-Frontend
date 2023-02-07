const searchBar = document.getElementById("input");
const btn = document.getElementsByTagName("button")[0];

const searchHandler = (text) => {
  console.log(searchBar.value);
};

const search = debounce(() => searchHandler());

function debounce(fn, delay = 400) {
  let timeOut;

  return () => {
    clearTimeout(timeOut);

    timeOut = setTimeout(() => {
      fn();
    }, delay);
  };
}

const payment = function () {
  console.log("100 ruppess payment done!");
};

btn.addEventListener("click", debounce(payment, 300));
