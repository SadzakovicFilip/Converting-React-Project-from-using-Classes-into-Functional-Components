//This is an explanation for promises

export const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve(`I have Succeeded`);
    }, 1000);
  } else {
    reject(`I have failed`);
  }
});

myPromise.then((value) => console.log(value)).catch(rejectedValue=>console.log(rejectedValue));
