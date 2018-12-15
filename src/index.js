import React, {Component} from 'react';
import Bars from './Bars/Bars';

class LoadingAnimation extends Component {
    render () {
        const animationType = this.props.type;
        let animation = null;
        switch (animationType) {
            case 'Bars':
                animation = <Bars/>;
                break;
            default:
                animation = <Bars/>;
        }
        return (
            animation
        );
    }
}

export default LoadingAnimation;
