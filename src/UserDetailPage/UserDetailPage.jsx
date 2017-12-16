import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class UserDetailPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(userActions.getUser(this.props.match.params.number));
    }

    render(){
        const { users } = this.props;
        return (
            <div>
                {users.currentUser && 
                    <div>
                        <h1>Hi {users.currentUser.firstName} {users.currentUser.lastName}  </h1>
                        <h2> Phone  {users.currentUser.phone} </h2> <h2> Email {users.currentUser.email}  </h2>
                    </div>
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { users } = state;
    return {
        users
    };
}

const connectedUserDetailPage = connect(mapStateToProps)(UserDetailPage);
export { connectedUserDetailPage as UserDetailPage };