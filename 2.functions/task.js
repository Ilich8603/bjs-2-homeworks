function getArrayParams(...arr) {
  // Проверка на пустой массив
  if (arr.length === 0) {
    return {
      min: undefined,
      max: undefined,
      avg: undefined
    };
  }

  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    if (current < min) min = current;
    if (current > max) max = current;
    sum += current;
  }

  // Вычисляем среднее, округляем до двух знаков и преобразуем значения к числу
  const avg = Number((sum / arr.length).toFixed(2));

  return {
    min,
    max,
    avg
  };
}

function summElementsWorker(...args) {
	if (args.length === 0) return 0;
	let sum = 0;
	for (let i = 0; i < args.length; i++) {
		sum += args[i];
	}
	return sum;
}

function differenceMaxMinWorker(...args) {
  if (args.length === 0) return 0;
  const max = Math.max(...args);
  const min = Math.min(...args);
  return max - min;
}

function differenceEvenOddWorker(...args) {
	if (args.length === 0) return 0;
	let sumEven = 0;
	let sumOdd = 0;
	for (const num of args) {
		if (num % 2 === 0) {
			sumEven += num;
		} else {
			sumOdd += num;
		}
	}
	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...args) {
  if (args.length === 0) return 0;
  let sumEven = 0;
  let countEven = 0;
  for (const num of args) {
    if (num % 2 === 0) {
      sumEven += num;
      countEven++;
    }
  }
  if (countEven === 0) return 0; // нет четных элементов
  return sumEven / countEven;
}

function makeWork (arrOfArr, func) {
  if (!arrOfArr || arrOfArr.length === 0) return 0; 
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]); // применяем насадку к элементам текущего подмассива
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
