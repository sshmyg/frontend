import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import './_layout.sass';

import * as actions from 'redux/comments/actions';

class Layout extends React.Component {
    static propTypes = {
        children: React.PropTypes.any
    }

    render() {
        let {children} = this.props;

        return (
            <div className="wrapper">
                {
                    children
                    ? React.cloneElement(children, this.props)
                    : null
                }
            </div>
        );
    }
}

//Container example, you can move this part into different file, to reuse it
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