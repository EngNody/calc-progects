// const mycalc=document.querySelector(".mycalc1")
const calc = document.getElementById("calc");
const product = document.querySelectorAll(".product");
const myfield = document.getElementById("myfield");
const products = document.getElementById("products");
const c = document.getElementById("c");
let total = 0;

function calcTheTotal(eo) {
  product.forEach((item) => {
    const getprice = Number(
      item.getElementsByClassName("price")[0].innerHTML.replace("$", "")
    );

    const getvalue = Number(item.querySelectorAll(".input-quantity")[0].value);

    total = total + getprice * getvalue;
  });
  myfield.innerHTML = ` $ ${total}`;
  total = 0;
}

calc.addEventListener("click", (eo) => {
  calcTheTotal();
});

products.addEventListener("change", (eo) => {
  calcTheTotal();
});

function zeroc(eo) {
  product.forEach((item) => {
    const getprice = Number(
      item.getElementsByClassName("price")[0].innerHTML.replace("$", "")
    );

    const getvalue = Number(
      (item.querySelectorAll(".input-quantity")[0].value = 0)
    );

    total = total + getprice * getvalue;
  });
  total = 0;
  myfield.innerHTML = ` ${total}`;
}

c.addEventListener("click", (eo) => {
  zeroc();
});

// =============================================================================
// Area of a circle
// =============================================================================

const fff = document.getElementById("fff");
const totalcircle = document.getElementById("total");
// ============= way 1===================
// const calcarea = (radius=1) => {

// let total= 3.14* radius**2
// // console.log(total)
// totalcircle.innerHTML=` Area = ${total}`
// }
// ================way 2 ===============
// const calcarea = (radius=1) => {

//     let total= 3.14* radius**2
//     // console.log(total)
//     totalcircle.innerHTML=` Area = ${total}`

//     return total
//     }
// ============= way 3==== without parameter and argument===============
const calcarea = () => {
  let total = 3.14 * fff.value ** 2;
  // console.log(total)
  totalcircle.innerHTML = ` Area = ${total}`;
};

fff.addEventListener("change", (eo) => {
  calcarea();
});
// ==============================================================================

const myclock = document.getElementById("myclock");

let theclock = (eo) => {
  const newdate = new Date();
  // console.log(newdate)

  let hour = newdate.getHours();
  let min = newdate.getMinutes();
  let sec = newdate.getSeconds();

  let year = newdate.getFullYear();
  let month = newdate.getMonth();
  let date = newdate.getDate();
  let day = newdate.getDay();

  if (hour < 10) {
    hour = `0${hour} `;
  }

  if (min < 10) {
    min = `0${min} `;
  }
  if (sec < 10) {
    sec = `0${sec} `;
  }
  //   let day;
  //   switch (newdate.getDay()) {
  switch (day) {
    case 0:
      day = "الاحد";
      break;
    case 1:
      day = "الاثنين";
      break;
    case 2:
      day = "الثلاثاء";
      break;
    case 3:
      day = "الاربعاء";
      break;
    case 4:
      day = "الخميس";
      break;
    case 5:
      day = "الجمعه";
      break;
    case 6:
      day = "السبت";
      break;
  }

  let theform = `${hour} : ${min} : ${sec}   <br> ${year} / ${
    month + 1
  } / ${date} <br> ${day}`;

  return theform;
};

setInterval(() => {
  myclock.innerHTML = theclock();
  // console.log(theclock());
}, 1000);

// ========================================================
//   regular expretion
// ========================================================

const myinput = document.getElementById("myinput");
const myinputpass = document.getElementById("myinputpass");

const reg =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regpass =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;


myinput.addEventListener("keyup", (eo) => {
  if (reg.test(myinput.value)) {
    myinput.classList.remove("error");
    myinput.classList.add("succes");
  } else {
    myinput.classList.remove("succes");
    myinput.classList.add("error");
  }
  if (myinput.value=="") {
  myinput.classList.remove("error")
  myinput.classList.remove("succes")
  }
});

myinputpass.addEventListener("keyup", (eo) => {
  if (regpass.test(myinputpass.value)) {
    myinputpass.classList.remove("error");
    myinputpass.classList.add("succes");
  } else {
    myinputpass.classList.remove("succes");
    myinputpass.classList.add("error");
  }
  if (myinputpass.value=="") {
      myinputpass.classList.remove("error")
      myinputpass.classList.remove("succes")
  }
});
