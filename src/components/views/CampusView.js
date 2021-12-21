import { Link } from "react-router-dom";

// Single Campus View 
const CampusView = (props) => {
  const {campus} = props;

  const studentsList = () => {
    if(!campus.students.length) {
      return(<li> There are no students. </li>);
    }
    else {
      return(
        campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          let link = <Link to={`/students/${student.id}`}> {name} </Link>
          return (<li key={student.id}>{link}</li>);
        })
      );
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

      <h1>{campus.name}</h1>
      <p> Description: {campus.description}</p>
      <p> Address: {campus.address}</p>
      <p> Campus ID: {campus.id} </p>
      <p> Students: </p>
      <ul>
        {studentsList()}
      </ul>
    </div>
  );

};

export default CampusView;