// Please uncomment these codes(that you want to work task) to make it work
// TASK 1

// let userName = "Fadayat";
// let userPassword = "salambaku";
// let nameInput = prompt("ad daxil edin");
// let passwordINput = prompt("kod daxil edin");

// if (!nameInput || !passwordINput) {
//   alert("deyerleri bos buraxmayin");
// } else if (userName !== nameInput || userPassword !== passwordINput) {
//   alert("ad ve yaxud parol sehvdir");
// } else if (userName == nameInput && userPassword == passwordINput) {
//   alert("xos gelmissiniz");
// } else {
//   alert("nese sehv getdi");
// }
// END OF TASK 1

// TASK 2
// let message3 = " bu reqem 3e bolunur";
// let message5 = " bu reqem 5e bolunur";
// let messageNone = " bu reqem ne 3e ne 5e bolunur";
// let userNumber;

// for (let i = 1; i <= 100; i++) {
//   if (i == 40) {
//     break;
//   }
//   userNumber = i;

//   if (userNumber % 3 === 0 && userNumber % 5 === 0) {
//     console.log(`${userNumber + message3} hemcinin ${message5}`);
//   } else if (userNumber % 3 === 0) {
//     console.log(userNumber + message3);
//   } else if (userNumber % 5 === 0) {
//     console.log(userNumber + message5);
//   } else {
//     console.log(`${userNumber}: bu reqem ne 3e ne 5e bolunur`);
//   }
// }

// let allNumbers = 0;
// let count = 0;
// for (var i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     allNumbers += i;
//     count++;
//   }
// }
// console.log(allNumbers / count);
//END OF TASK 2

//TASK3

// let message = "bu reqem: ";
// let notGiven = "reqem daxil edilmedi!";
// let Even = "cutdur";
// let Odd = "tekdir";

// let givenNumber = Number(
//   prompt("cut ve yaxud tek oldugunu yoxlamaq ucun reqem daxil edin")
// );

// if (isNaN(givenNumber) || !givenNumber) {
//   alert(notGiven);
// } else if (givenNumber % 2 === 0) {
//   alert(message + Even);
// } else {
//   alert(message + Odd);
// }

// END OF TASK 3

// TASK 4
// let givenNumber = prompt("reqem daxil edin");
// if (!givenNumber || isNaN(givenNumber)) {
//   alert("reqem daxil edin!");
// } else if (givenNumber > 50 && givenNumber % 2 == 0) {
//   alert("reqem 50den boyukdur ve 2e bolunur");
// } else if (givenNumber > 50 && givenNumber % 2 !== 0) {
//   alert("reqem 50den boyukdur ve 2e bolunmur");
// } else if (givenNumber < 50 && givenNumber % 2 == 0) {
//   alert("reqem 50den kicikdir ve 2e bolunur");
// } else if (givenNumber < 50 && givenNumber % 2 !== 0) {
//   alert("reqem 50den kicikdir ve 2e bolunmur");
// } else {
//   alert("something went wrong");
// }

//TASK 4 tekmillesmis versiya:

// let givenNumber = prompt("reqem daxil edin");

// if (!givenNumber || isNaN(givenNumber)) {
//   alert("reqem daxil edin!");
// } else {
//   let message = "";
//   if (givenNumber > 50) {
//     message += "reqem 50den boyukdur";
//   } else if (givenNumber < 50) {
//     message += "reqem 50den kicikdir";
//   } else {
//     message += "reqem 50e berarberdir";
//   }

//   if (givenNumber % 2 == 0) {
//     message += " ve 2e  bolunur";
//   } else message += "   ve 2e bolunmur";

//   alert(message);
// }

// END OF UPGRADED TASK 4

//TASK 5
// let givenNumber = Number(prompt("1ci reqemi daxil edin"));
// let sGivenNumber = Number(prompt("2ci reqemi daxil edin"));

// if (
//   !givenNumber ||
//   !sGivenNumber ||
//   isNaN(givenNumber) ||
//   isNaN(sGivenNumber)
// ) {
//   alert("reqem daxil edin");
// } else if ((givenNumber + sGivenNumber) % 2 == 0) {
//   alert("cem reqqem cutdur");
// } else {
//   alert("cem reqem tekdir");
// }

// END OF TASK 5

//TASK 6
// let givenHour = Number(prompt("saati daxil edin"));

// if (!givenHour || isNaN(givenHour) || givenHour < 0 || givenHour > 23) {
//   alert("duzgun saat daxil edin");
// } else if (givenHour > 5 && givenHour < 13) {
//   alert("sabahin xeyir");
// } else if (givenHour >= 13 && givenHour <= 19) {
//   alert("gunirtan xeyir");
// } else {
//   alert("axsamin xeyir");
// }
// END OF TASK 6
// THANKS FOR YOUR ATTENTATION

var balance = 1000;

var pass = "9040";

var retryCount = 3;

while (retryCount > 0) {
  var userPassword = prompt("kod daxil edin");
  if (userPassword === pass) {
    console.log("xos gelmisiniz ");

    while (balance > 0) {
      var money = Number(prompt("cixaracaginiz meblegi yazin"));

      isContinued = true;

      if (money <= balance && isContinued == true) {
        balance = balance - money;

        console.log(`cixardiginiz mebleg: ${money}, balans: ${balance}`);
      } else {
        console.warn(
          `bu meblegi cixara bilmezsinin maks cixara bileceyiniz mebleg: ${balance}`
        );
      }

      isContinued = confirm("davam yoxsa tamam");
    }

    if (!isContinued) {
      console.log("gorusenedek");
    }
    if (balance === 0) {
      console.warn("balans 0dir, gorusenedek");
      break;
    }
  } else {
    retryCount--;
    if (retryCount === 0) {
      console.log("kartiniz bloklandi zehmet olmasa banka muraciet edin");
      break;
    }
    console.log(
      "sehv daxil etdiniz bir daha cehd edin, qalan cehd sayi: ",
      retryCount
    );
  }
}

// something
