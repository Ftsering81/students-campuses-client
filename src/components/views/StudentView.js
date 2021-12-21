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

      <h1> {student.firstname + " " + student.lastname} <Link to={`/editstudent/${student.id}`}>
        <button style={{marginLeft: '30px'}}> Edit Student </button></Link> 
      </h1>
      <img src={'https://www.biography.com/.image/t_share/MTY2NTIzMzc4MTI2MDM4MjM5/vincent_van_gogh_self_portrait_painting_musee_dorsay_via_wikimedia_commons_promojpg.jpg'} 
           alt="Student's image" width="200" height="200" style={{marginLeft: '10px'}}/>
      <h3> Campus: {campusName()}</h3>
      <h3> Email: {student.email}</h3>
      <h3> GPA: {student.gpa} </h3>

    </div>
  );

};

export default StudentView;