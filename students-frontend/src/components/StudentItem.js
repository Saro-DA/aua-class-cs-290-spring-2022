import { useCallback } from "react";
import "./StudentItem.css";

function StudentItem(props) {
    const deleteAction = useCallback((id) => {
        props.deleteStudentHandler(id);
    }, [])
    return (
        <li key={props._id}>{props.firstName} {props.lastName} <span onClick={() => deleteAction(props._id)} className="delete-student-button">X</span></li>
    )
}

export default StudentItem;