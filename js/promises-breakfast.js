const order = false;

const breakfastPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (order === true) {
      resolve("Your order is ready! Come and get it.");
    } else {
      reject(Error("Oh no there was a problem with your order."));
    }
  }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
  .then((val) => console.log(val))
  .catch((err) => {
    console.log(err);
  });
