const { Seq } = require('immutable');

function printBestStudents(grades) {
    // Convert the grades object to an Immutable Map
    const gradesMap = fromJS(grades);

    // Use Seq to transform and filter the data
    const updatedGrades = Seq(gradesMap)
        .filter(student => student.get('score', 0) >= 70)
        .map(student =>
            student
                .update('firstName', firstName => firstName.charAt(0).toUpperCase() + firstName.slice(1))
                .update('lastName', lastName => lastName.charAt(0).toUpperCase() + lastName.slice(1))
        )
        .toObject(); // Convert back to a plain JavaScript object

    // Print the updated grades
    console.log(updatedGrades);
}
