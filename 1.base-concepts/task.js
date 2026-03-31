"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c; // дискриминант

  if (d < 0) {
    // корней нет, массив остаётся пустым
  } else if (d === 0) {
    // один корень
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    // два корня
    let sqrtD = Math.sqrt(d);
    let root1 = (-b + sqrtD) / (2 * a);
    let root2 = (-b - sqrtD) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Месячная процентная ставка в дробном виде
  let monthlyRate = percent / 100 / 12;
  // Тело кредита (сумма, которую нужно вернуть банку)
  let creditBody = amount - contribution;

  // Если кредит не нужен или тело кредита неположительное
  if (creditBody <= 0 || countMonths <= 0) {
    return 0;
  }

  let monthlyPayment;
  if (monthlyRate === 0) {
    // Если ставка 0%, просто делим тело кредита на количество месяцев
    monthlyPayment = creditBody / countMonths;
  } else {
    // Ежемесячный платёж
    monthlyPayment = creditBody * (monthlyRate + monthlyRate / ((1 + monthlyRate) ** countMonths - 1));
  }

  // Общая сумма выплат по кредиту
  let totalPayment = monthlyPayment * countMonths;

  // Округление до двух знаков после запятой
  return Math.round(totalPayment * 100) / 100;
}

