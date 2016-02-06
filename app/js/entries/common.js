import React from 'react';
import {render} from 'react-dom';

import TestModule from 'module-test';
import ReactModule from 'module-react';

TestModule();

class ReactModuleExt extends ReactModule {
    render() {
        return (
            <p>Test</p>
        );
    }
};

render(<ReactModule />, document.querySelector('.page h1'));

console.log('App started');