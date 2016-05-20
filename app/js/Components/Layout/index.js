import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from 'actions/actionsComments';

class Layout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                {
                    this.props.children
                    ? React.cloneElement(this.props.children, this.props)
                    : null
                }
            </div>
        );
    }
}

//Map state to props
function mapStateToProps(state) {
    return {
        comments: state.comments
    };
}

//Map actions to props
function mapDispachToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const LayoutConnected = connect(mapStateToProps, mapDispachToProps)(Layout);

export default LayoutConnected;