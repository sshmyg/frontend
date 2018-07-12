import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Router({
    children,
    component: Component,
    ...othersProps
}) {
    console.info(othersProps, 'ppp othersProps');
    return (
        <Fragment>
            <Component {...othersProps}>
                { children }
            </Component>
        </Fragment>
    );
}

Router.propTypes = {
    children: PropTypes.node,
    component: PropTypes.func
};