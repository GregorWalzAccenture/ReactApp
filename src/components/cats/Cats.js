import React from 'react';
import './Cats.css';

class Cats extends React.Component {
    render() {
        return (
        <div class="cats">
           {this.props.children}
        </div>
        )
    }
}

export default Cats;