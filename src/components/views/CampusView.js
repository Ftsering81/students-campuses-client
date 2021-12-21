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
          let link = <h3><Link to={`/students/${student.id}`}> {name} </Link></h3>
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

      <h1> {campus.name} <Link to={`/editcampus/${campus.id}`}>
        <button style={{marginLeft: '30px'}}> Edit Campus </button></Link> 
      </h1>
      <h3> Description: {campus.description}</h3>
      <h3> Address: {campus.address}</h3>
      <h3> Campus ID: {campus.id} </h3>
      <h3> Students: </h3>
      <ul>
        {studentsList()}
      </ul>
    </div>
  );

};

export default CampusView;