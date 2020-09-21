import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import { fetchUsers } from './../redux/actions/userAction';

 class UserContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    console.log(this.props.fetchUsers())
  }
    render() {
        // const {x, increment, decrement, reset} = this.props;
        
        return (
          this.props.userData.loading ? (
            <h2>Loading</h2>
          ) : this.props.userData.error ? (
            <h2>{this.props.userData.error}</h2>
          ) : (
            <div>
              <h2>Users List</h2>
              <div>
                {this.props.userData &&
                  this.props.userData.users &&
                  this.props.userData.users.map(user => <p>{user.name}</p>)}
              </div>
            </div>
          )
        )
    }
}

const mapStateToProps = state => {
  return {
    userData: state.userList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(UserContainer);



