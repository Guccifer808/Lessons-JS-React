"use strict";

const inputUah = document.querySelector("#uah"),
  inputUsd = document.querySelector("#usd");

// new request w XMLHttpRequest
inputUah.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  //default:   (method, url, async, login, pass); XMLHttpRequest using async by default
  request.open("GET", "js/current.json");
  //setting headers so server can understand
  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  //sending request. For 'POST' requests specify .send(body)
  request.send();

  // Properties
  // https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
  //
  // Main ones:
  //
  // status
  // statusText
  // response
  // readyState - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
  //
  // readystatechange
  //
  //   request.addEventListener("readystatechange", () => {
  //     //What is the state? 0 - 4 (see readyState)
  //     if (request.readyState === 4 && request.status === 200) {
  //       console.log(request.response);
  //
  // load
  request.addEventListener("load", () => {
    //What is the state? 0 - 4 (see readyState)
    if (request.readyState === 4 && request.status === 200) {
      //parsing JSON response
      const data = JSON.parse(request.response);
      // using JSON data
      inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Something went wrong";
    }
  });
});
