import React from 'react';
import './Cat.css';

class Cat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selected : false
        }
    }
    
    selected() {
        this.setState({
            selected : !this.state.selected
        });
    }

    render() {
        let catClass = 'cat';
        if (this.state.selected) {
            catClass += ' cat-selected';
        } 
        console.log("Render: " + catClass);

        return (
            <div className={catClass}>
                <img src={this.props.animalPic} alt="" />
                <div className="cat-name">{this.props.animalName}</div>
                <button onClick={() => this.selected()}>Select</button>
            </div>
        );
    }
}

export default Cat;

