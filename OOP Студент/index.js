class Student {
  constructor(nameStudent, yearOfBirth, marksStudent) {
    this.nameStudent = nameStudent;
    this.yearOfBirth = yearOfBirth;
    this.marksStudent = marksStudent;
    this.attendance = Array(25);
  }

  getAge() {
    console.log(2023 - this.yearOfBirth);
  }

  calcGPA() {
    let averageValue = gpa.calc(this.marksStudent);
    console.log(averageValue);
  }
  present() {
    attendance.create(this.attendance, true);
  }
  absent() {
    attendance.create(this.attendance, false);
  }

  summary() {
    let countAttendance = this.attendance.reduce(
      (count, item) => (item === true ? ++count : count),
      0
    );
    let percentAttendance = countAttendance / this.attendance.length;
    let averageValue = gpa.calc(this.marksStudent);

    if (percentAttendance > 0.9 && averageValue > 90) {
      console.log("Молодець!");
    } else if (percentAttendance > 0.9 || averageValue > 90) {
      console.log("Добре, але можна краще");
    } else {
      console.log("Редиска!");
    }
  }
}

// average value
class GPA {
  calc(array) {
    let result = 0;
    array.forEach((item) => (result += item));
    result = result / array.length;
    return result;
  }
}
const gpa = new GPA();

// push true or false
class Attendance {
  create(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== Boolean(array[i])) {
        array[i] = item;
        break;
      }
    }
  }
}
const attendance = new Attendance();

const max = new Student("Max", 2004, [100, 100, 95, 90]);

// возраст
max.getAge();
// среднее значение
max.calcGPA();
// посещаемость
for (let i = 0; i < 10; i++) {
  max.present();
}
for (let i = 0; i < 18; i++) {
  max.absent();
}
console.log(max.attendance);
// сумарно
max.summary();
