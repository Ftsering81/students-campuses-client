import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import {editCampusThunk, fetchCampusThunk} from "../../store/thunks";


class EditCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "",
          description: "",
          address: "",
          imageUrl: "",
          redirect: false,
          redirectId: null   //campus ID from url
        };
    }

    componentDidMount() {
        //getting campus ID from url
        this.props.fetchCampus(this.props.match.params.id);

        // this.setState({
        //     name: this.props.campus.name,
        //     address: this.props.campus.address,
        //     description: this.props.campus.name.description,
        //     imageUrl: this.props.campus.name.imageUrl
        // })
    }
        

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let editedCampus = {
            id: this.props.match.params.id,
            name: this.state.name,
            description: this.state.description,
            address: this.state.address,
            imageUrl: this.state.imageUrl
        };

        if(!editedCampus.name) {
            editedCampus.name = this.props.campus.name
        }
        if(!editedCampus.description) {
            editedCampus.description = this.props.campus.description
        }
        if(!editedCampus.address) {
            editedCampus.address = this.props.campus.address
        }
        if(!editedCampus.imageUrl) {
            editedCampus.imageUrl = this.props.campus.imageUrl
        }
        // editedCampus = Object.keys(editedCampus).forEach((key) => editedCampus[key] == null && delete editedCampus[key]);
        // console.log(editedCampus)
        await this.props.editCampus(editedCampus);

        this.setState({
          name: "",
          description: "",
          address: "",
          imageUrl: "",
          redirect: true, 
          redirectId: this.props.match.params.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
            return (<Redirect to={`/campuses/${this.state.redirectId}`}/>)
        }
        return (
          <EditCampusView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}   
          />
        );
    }
}

// Map state to props;
const mapState = (state) => {
    return {
      campus: state.campus,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editCampus: (campus) => dispatch(editCampusThunk(campus)),
        fetchCampus: (id) => dispatch(fetchCampusThunk(id))
    })
};

export default connect(mapState, mapDispatch)(EditCampusContainer);