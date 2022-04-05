import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentsList";

function Dashboard() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetchStudents();
    }, [])

    const fetchStudents = useCallback(async () => {
        const result = await axios.get('http://localhost:3000/students');
        setStudents(result.data);
    }, [])

    const deleteStudent = useCallback(async (id) => {
        await axios.delete(`http://localhost:3000/students/${id}`);
        fetchStudents();
    }, [])

    const createStudent = useCallback(async (data) => {
        await axios.post('http://localhost:3000/students', data);
        fetchStudents();
    }, [])

    return (
        <div>
            <StudentForm submitHandler={createStudent} />
            <StudentList deleteStudentHandler={deleteStudent} students={students} />
        </div>
    )
}

export default Dashboard;