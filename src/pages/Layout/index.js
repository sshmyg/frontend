import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';

import useActions from 'app/hooks/useActions';

import * as commentsActions from 'app/redux/comments/actions';

import Button from 'app/components/Button';

import './style.css';

export default function Layout({
    children
}) {
    const { actionCommentAdd } = useActions(commentsActions);
    const {
        comments,
        lang
    } = useSelector(state => ({
        comments: state.comments,
        lang: state.session.lang
    }));

    return (
        <div className="l-wrapper">
            <Link to="/test-page">Test page</Link>
            {
                comments.map((c, i) => (
                    <section key={i}>
                        <p>{ c.content }</p>
                        <a href="#">{ c.name }</a>
                        <Button onClick={() => {actionCommentAdd(`Text ${i}`);}}>
                            <FormattedMessage
                                id="Click me"
                                defaultMessage="Click me"
                            />
                        </Button>
                    </section>
                ))
            }
            { children }
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node
};
