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

myPromise
  .then((value) => console.log(value))
  .catch((rejectedValue) => console.log(rejectedValue));

// NOVI ASYNC AWAIT  u es7, laksi nacin za organizovanje

const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    );
    const users = await usersResponse.json();
    const secondUser = users[1];
    console.log(secondUser);
  } catch (err) {
    console.log("error has occured")
  }
};
