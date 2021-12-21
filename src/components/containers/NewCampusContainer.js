import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import {addCampusThunk} from "../../store/thunks";


class NewCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "",
          address: "",
          description: "",
          redirect: false,
          redirectId: null
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
        if(!this.state.name) {
          alert("Campus is required")
          return
        }
        if(!this.state.address) {
          alert("Address is required")
          return
        }
        //Error checking ends

        let campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description
        };
        
        let newCampus = await this.props.addCampus(campus);

        this.setState({
          name: "",
          address: "",
          description: "",
          redirect: true, 
          redirectId: newCampus.id
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
          <NewCampusView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus))
    })
};

export default connect(null, mapDispatch)(NewCampusContainer);