let a = document.getElementById("display-val")
let prevExpr = 0
let currentExpr = 0
let flag = -1
let counter = 0
let operator = ""
let displayData = () => {
  a.placeholder = "0"
  document.querySelectorAll(".item").forEach((element) => {
    element.addEventListener("click", () => {
      if (flag == -1) {
        prevExpr = getData(element)
      } else {
        a.value = ""
        prevExpr = getData(element)
        flag = -1
      }
    })
  })
}

const getData = (element) => {

  let val = element.innerHTML
  a.value += val
  let x = a.value
  return x
}

let reset = document.querySelector("#reset")
reset.addEventListener("click", () => {
  a.placeholder = "0"
  document.location.reload()
})
let add = document.querySelector("#add")
add.addEventListener("click", () => {

  operator = "+"
  toggleAndCounter()
  if (counter > 1) {
    addition()
  } else {
    displayResult()
  }

})

let sub = document.querySelector("#sub")
sub.addEventListener("click", () => {

  operator = "-"
  toggleAndCounter()
  if (counter > 1) {
    subtraction()
  } else {
    displayResult()
  }

})

let mul = document.querySelector("#mul")
mul.addEventListener("click", () => {

  operator = "*"
  toggleAndCounter()
  if (counter > 1) {

    multiplication()
  } else {
    displayResult()
  }

})
let divi = document.querySelector("#divi")
divi.addEventListener("click", () => {

  operator = "/"
  toggleAndCounter()
  if (counter > 1) {
    division()
  } else {
    displayResult()
  }
})

let equal = document.querySelector("#equal")
equal.addEventListener("click", () => {

  calc(operator)
})

let parsing = () => {
  prevExpr = parseInt(prevExpr)
  currentExpr = parseInt(currentExpr)
}

let IsPrevExprEmpty = () => {
  if (prevExpr == "") {
    return true
  }
  return false
}

let displayResult = () => {
  a.value = prevExpr
  currentExpr = prevExpr
  prevExpr = ""
}
let toggleAndCounter = () => {
  counter++
  flag = 0
}
let addition = () => {
  let isEmpty = IsPrevExprEmpty()
  if (!isEmpty) {
    parsing()
    prevExpr = currentExpr + prevExpr
    displayResult()
  }
}
let subtraction = () => {
  let isEmpty = IsPrevExprEmpty()
  if (!isEmpty) {
    parsing()
    prevExpr = currentExpr - prevExpr
    displayResult()
  }
}
let multiplication = () => {
  let isEmpty = IsPrevExprEmpty()
  if (!isEmpty) {
    parsing()
    prevExpr = currentExpr * prevExpr
    displayResult()
  }
}

let division = () => {
  let isEmpty = IsPrevExprEmpty()
  if (!isEmpty) {
    parsing()
    prevExpr = currentExpr / prevExpr
    displayResult()
  }
}

const calc = (operator) => {

  switch (operator) {
    case "+":

      addition()
      break;

    case "-":

      subtraction()
      break

    case "*":

      multiplication()
      break;

    case "/":

      division()
      break
    default:
      break;
  }
}
displayData()