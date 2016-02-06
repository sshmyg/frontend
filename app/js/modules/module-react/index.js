import React from 'react';
import {decorate as mixin} from 'react-mixin';
import autobind from 'autobind-decorator'

@mixin({
    componentDidMount() {
        console.log('componentDidMount mixin');
    }
})

@autobind

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

    componentDidMount() {
        console.log('componentDidMount native');
    }

    handleClick() {
        console.log(this.props.name);
    }

    render() {
        return (
            <div>
                <p onClick={this.handleClick}>{this.props.name}</p>
                <p>{this.state.name}</p>
            </div>
        );
    }
};

export default ReactModule;