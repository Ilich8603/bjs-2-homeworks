function compareArrays(arr1, arr2) {
  // Если длины массивов не равны, сразу возвращаем false
  if (arr1.length !== arr2.length) return false;

  // Используем метод every для поэлементного сравнения
  return arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  // Фильтруем пользователей по полу
  const filteredUsers = users.filter((user) => user.gender === gender);

  // Если после фильтрации нет пользователей, возвращаем 0
  if (filteredUsers.length === 0) return 0;

  // Извлекаем возрасты и вычисляем сумму через reduce
  const ages = filteredUsers.map((user) => user.age);
  const sum = ages.reduce((acc, age) => acc + age, 0);

  // Возвращаем среднее арифметическое
  return sum / filteredUsers.length;
}

