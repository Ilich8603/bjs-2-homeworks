function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []; // массив для хранения оценок
}

// Метод для изучаемого предмета
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

// Метод для добавления оценок
Student.prototype.addMarks = function (...marksToAdd) {
  // Проверяем, существует ли свойство marks
  if (this.marks) {
    this.marks.push(...marksToAdd);
  }
};

// Метод для вычисления среднего арифметического оценок
Student.prototype.getAverage = function () {
  // Если нет оценок или массив оценок пуст, возвращаем 0
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

// Метод для отчисления студента
Student.prototype.exclude = function (reason) {
  // Удаляем предмет и оценки (так как студент больше не учится)
  delete this.subject;
  delete this.marks;
  // Записываем причину отчисления в свойство excluded
  this.excluded = reason;
};