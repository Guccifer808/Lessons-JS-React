"use strict";

// example
console.log("Request...");

//promises example/ chaining
const req = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing data...");

    const product = {
      name: "TV",
      price: 1000,
    };
    // if success callback do resolve function
    // passing product to then()
    resolve(product);
  }, 2000);
});
// if resolved
// passing next down the chain async promise
req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = "available";
      resolve(product);
    }, 2000);
    // working with passed data
  })
    .then((data) => {
      data.modify = true;
      return data;
      // working with passed data
    })
    .then((data) => {
      console.log(data);
    });
});

// reject

req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = "available";
      // reject
      reject();
    }, 2000);
  })
    .then((data) => {
      data.modify = true;
      return data;
    })
    .then((data) => {
      console.log(data);
      // catch
    })
    .catch((err) => {
      console.error("Error!");
    });
});

// finally(). Will do something anyway i.e. remove/clean form after .catch() error

req
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = "available";
        // reject
        resolve(product);
      }, 2000);
    })
      .then((data) => {
        data.modify = true;
        return data;
      })
      .then((data) => {
        console.log(data);
        // catch
      })
      .catch((err) => {
        console.error("Error!");
      });
  })
  .finally(() => {
    console.log("Finally");
  });

// Promise all
// requires [] with promises
// waiting until all promises are resolved
// i.e. 2 separate requests to different servers
const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

test(1000).then(() => console.log("1000 ms"));
test(2000).then(() => console.log("2000 ms"));

Promise.all([test(1000), test(2000)]).then(() => {
  console.log("All");
});

// Race
// The fastest promise will be resolved

const test2 = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

test2(1000).then(() => console.log("1000 ms"));
test2(2000).then(() => console.log("2000 ms"));

Promise.race([test2(1000), test2(2000)]).then(() => {
  console.log("All");
});
