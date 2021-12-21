import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return(<div>
            <Link to={`/`}>
              <button style={{marginRight: '10px'} }>Home</button>
            </Link>
            <Link to={`/students`}>
              <button style={{marginTop: '10px'}}>All students </button>
            </Link>
              <h1> Campuses </h1>
              <p> There are no campuses.</p>
              <br/>
            <Link to={`/newcampus`}>
              <button>Add New Campus</button>
            </Link>
            </div>
    );
  }

  return (
    <div style={{marginLeft: '10px'}}>
      <div>
        <Link to={`/`}>
          <button style={{marginRight: '15px'} }>Home</button>
        </Link>
        <Link to={`/students`}>
          <button style={{marginTop: '10px'}}>All students </button>
        </Link>
        <h1> Campuses </h1>
      </div>
      
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campuses/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
          <button onClick={() => props.deleteCampus(campus.id)}>Delete Campus</button>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;