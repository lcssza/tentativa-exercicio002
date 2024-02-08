let students = [
  {
    name: 'Pedro',
    grade1: 8,
    grade2: 10,
  },

  {
    name: 'João',
    grade1: 5,
    grade2: 3,
  },

  {
    name: 'Maria',
    grade1: 6,
    grade2: 9,
  },

  {
    name: 'Lucas',
    grade1: 10,
    grade2: 10,
  },
];

let firstGrade = students[0].grade1;
let secondGrade = students[0].grade2;
let total;

function calc(firstGrade, secondGrade) {
  total = (firstGrade + secondGrade) / 2;
  return total;
}


for (i = 0; i <= 3; i++) {
  total = calc(students[i].firstGrade, students[i].secondGrade);
  if (total < 7) {
    console.log(
      "Aluno(a) " + students[i].name + " foi reprovado! Média: " + total
    );
  } else {
    console.log(
      "Aluno(a) " + students[i].name + " foi aprovado! Média: " + total
    );
  }
}
