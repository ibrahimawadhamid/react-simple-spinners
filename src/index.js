import React, {Component} from 'react';
import Bars from './Bars/Bars';
import Spinner1 from './Spinner1/Spinner1';

class LoadingAnimation extends Component {
    render() {
        switch (this.props.type) {
            case 'Bars':
                return (<Bars/>);
            case 'Spinner1':
                return (<Spinner1/>);
            default:
                return (<Bars/>);
        }
    }
}

export default LoadingAnimation;
