import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk, fetchCampusThunk} from '../../store/thunks';


class NewStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "", 
          campusId: null, 
          email: "",
          redirect: false, 
          redirectId: 0
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        //Real-time error messages for when one or more field is not filled
        if(!this.state.firstname) {
          alert("First name is required")
          return
        }
        if(!this.state.lastname) {
          alert("Last name is required")
          return
        }
        if(!this.state.campusId) {
          alert("Campus ID is required")
          return
        }

        if(!this.state.email) {
          alert("Email is required")
          return
        }

        // Get the campus for the campus id user entered. If undefined, means campus not in our list of campuses.
        let campus = await this.props.getCampus(this.state.campusId);
        if(campus === undefined) {
          alert("The campus for the campus ID provided is not in the system")
          return
        }
        //Error checking ends

        let student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.state.campusId,
            email: this.state.email
        };
        
        let newStudent = await this.props.addStudent(student);

        this.setState({
          firstname: "", 
          lastname: "", 
          campusId: null, 
          email: "",
          redirect: true, 
          redirectId: newStudent.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        return (
          <NewStudentView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(addStudentThunk(student)),
        getCampus: (id) => dispatch(fetchCampusThunk(id))
    })
}

export default connect(null, mapDispatch)(NewStudentContainer);