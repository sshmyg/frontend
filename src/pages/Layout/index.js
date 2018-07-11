import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'app/redux/comments/actions';

import Button from 'app/components/Button';

import { StyledWrapper } from './style';

class Layout extends Component {
    static propTypes = {
        children: PropTypes.node,
        comments: PropTypes.array
    }

    render() {
        const {
            children,
            comments
        } = this.props;

        return (
            <StyledWrapper>
                {
                    children || (
                        <Fragment>
                            {
                                comments.map((c, i) => (
                                    <section key={i}>
                                        <p>{ c.content }</p>
                                        <a href="#">{ c.name }</a>
                                        <Button onClick={() => {alert('Button clicked')}}>Click me</Button>
                                    </section>
                                ))
                            }
                        </Fragment>
                    )
                }
            </StyledWrapper>
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

export default connect(mapStateToProps, mapDispachToProps)(Layout);