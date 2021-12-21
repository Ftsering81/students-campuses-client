import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;

  const campusName = () => {
    if(!student.campus) {
      return "Not enrolled"
    }
    else {
      return (<Link to={`/campuses/${student.campus.id}`}>{student.campus.name}</Link>);
    }
  }

  return (
    <div>
      <Link to={`/`}>
        <button style={{marginRight: '10px'} }>Home</button>
      </Link>
      <Link to={`/students`}>
        <button style={{marginTop: '10px'}}>All students </button>
      </Link>   
      <Link to={`/campuses`}>
        <button style={{marginLeft: '10px'}}>All campuses </button>
      </Link>      

      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imageUrl} alt="Student's image"/>
      <h3> Campus: {campusName()}</h3>
      <h3> Email: {student.email}</h3>
      <h3> GPA: {student.gpa} </h3>

    </div>
  );

};

export default StudentView;