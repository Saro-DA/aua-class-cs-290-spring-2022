import StudentItem from "./StudentItem";

function StudentList(props) {
    const students = props.students || [];

    return (
        <ul>
            {
                students.map(student => <StudentItem deleteStudentHandler={props.deleteStudentHandler} _id={student._id} firstName={student.firstName} lastName={student.lastName} />)
            }
        </ul>
    )
}

export default StudentList;