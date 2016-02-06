import React from 'react';

class ReactModule extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        name: 'Hello world - props'
    };

    static propTypes = {
        name: React.PropTypes.string
    };

    state = {
        name: 'Hello world - state'
    };

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.state.name}</p>
            </div>
        );
    }
};

export default ReactModule;