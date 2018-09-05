import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from 'app/redux/comments/actions';

import Button from 'app/components/Button';

import { StyledWrapper } from './style';

function mapStateToProps(state) {
    return {
        comments: state.comments
    };
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function Layout({
    children,
    comments,
    actionCommentAdd
}) {
    return (
        <StyledWrapper>
            <Link to="/test-page">Test page</Link>
            {
                comments.map((c, i) => (
                    <section key={i}>
                        <p>{ c.content }</p>
                        <a href="#">{ c.name }</a>
                        <Button onClick={() => {actionCommentAdd(`Text ${i}`);}}>Click me</Button>
                    </section>
                ))
            }
            { children }
        </StyledWrapper>
    );
}

export default connect(mapStateToProps, mapDispachToProps)(Layout);
