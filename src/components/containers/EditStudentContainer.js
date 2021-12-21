import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import {editStudentThunk, fetchStudentThunk} from "../../store/thunks";


class EditStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            imageUrl : "",
            gpa: "",    
            redirect: false,
            redirectId: null   //student ID from url
        };
    }

    componentDidMount() {
        //getting Student ID from url
        this.props.fetchStudent(this.props.match.params.id);
    }
        

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let editedStudent = {
            id: this.props.match.params.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            imageUrl: this.state.imageUrl,
            gpa: this.state.gpa   
        };

        if(!editedStudent.firstname) {
            editedStudent.firstname = this.props.student.firstname
        }
        if(!editedStudent.lastname) {
            editedStudent.lastname = this.props.student.lastname
        }
        if(!editedStudent.email) {
            editedStudent.email = this.props.student.email
        }
        if(!editedStudent.imageUrl) {
            editedStudent.imageUrl = this.props.student.imageUrl
        }
        if(!editedStudent.gpa) { //if nothing entered
            editedStudent.gpa = this.props.student.gpa
        } //if gpa entered out of range
        if(parseFloat(editedStudent.gpa) < 0.0 || parseFloat(editedStudent.gpa) > 4.0) {
            // editedStudent.gpa = this.props.student.gpa //keep the old gpa value
            alert("Please enter a valid gpa between 0.0 and 4.0")
            return 
        }
        // editedStudent = Object.keys(editedStudent).forEach((key) => editedStudent[key] == null && delete editedStudent[key]);
        // console.log(editedStudent)
        await this.props.editStudent(editedStudent);

        this.setState({
          firstname: "",
          lastname: "",
          email: "",
          imageUrl: "",
          redirect: true, 
          redirectId: this.props.student.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to={`/students/${this.state.redirectId}`}/>)
        }
        return (
          <EditStudentView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}   
          />
        );
    }
}

// Map state to props;
const mapState = (state) => {
    return {
      student: state.student,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editStudent: (student) => dispatch(editStudentThunk(student)),
        fetchStudent: (id) => dispatch(fetchStudentThunk(id))
    })
};

export default connect(mapState, mapDispatch)(EditStudentContainer);