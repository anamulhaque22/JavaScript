import student from "./studentList.js";

student.map((s, index) => {
    console.log("Student Name: ", s.name, "\nId: ", s.id, '\nIndex: ', index, '\n');
})