function checkGrade(score) {
    let letterGrade = null;
    if (score >= 90) {
        letterGrade = 'A';
    } else if (score >= 80 && score < 90) {
        letterGrade = 'B';
    } else if (score >= 70 && score < 80) {
        letterGrade = 'C';
    } else {
        letterGrade = 'F';
    }
    return letterGrade;
}

const checkGrade2 = (score) => {
    let letterGrade = null;
    if (score >= 90) {
        letterGrade = 'A';
    } else if (score >= 80 && score < 90) {
        letterGrade = 'B';
    } else if (score >= 70 && score < 80) {
        letterGrade = 'C';
    } else {
        letterGrade = 'F';
    }
    return letterGrade;
}

const student1 = 100;
console.log('student1 grade', checkGrade(student1));

const student2 = 67;
console.log('student2 grade', checkGrade2(student2));

