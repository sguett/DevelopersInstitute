var average = {
    student: null,
    score: 0
};

var course = {};

average.student = prompt("What is your name?");

// var name_course = prompt("Give me a name of the course", "");
// var grade_course = Number(prompt("how much do you think you'll get for this course", ""));
// var coeff_course = Number(prompt("Give me the coefficient for this course", ""));

while (true) {
    let name_course = prompt("Give me a name of the course");
    let grade_course = Number(prompt("how much do you think you'll get for this course", ""));
    let coeff_course = Number(prompt("Give me the coefficient for this course", ""));
    course[name_course] = [grade_course, coeff_course];
    if (confirm("Do you want to add another course") == false) { break };
}

average.courses = course;
let list = Object.getOwnPropertyNames(average.courses)
for (i of list) {
    average.score += average.courses[i][0] * average.courses[i][1]
}
average.score = (average.score / list.length).toFixed(2);
alert("The average score for " + average.student + " is: " + average.score)