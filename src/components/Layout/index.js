import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'app/redux/comments/actions';

import './layout.css';

class Layout extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        let {children} = this.props;

        return (
            <div className="wrapper">
                <a href="#">Test link</a>
                {
                    children
                        ? React.cloneElement(children, this.props)
                        : null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    };
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const LayoutConnected = connect(mapStateToProps, mapDispachToProps)(Layout);

export default LayoutConnected;