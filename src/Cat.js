import React from 'react';

class Cat extends React.Component {
    render() {
        return (
            <div className="cat">
                Davids best friend {this.props.animalName}
            </div>
        );
    }
}

export default Cat;