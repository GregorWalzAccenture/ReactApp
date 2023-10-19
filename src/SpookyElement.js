import React from 'react';

class SpookyElement extends React.Component {
    render() {
        return (
            <div className="spookyElements">
                This is one sPoOoky element {this.props.spookDescription}
                <image src={this.props.spookURL}> </image>
            </div>
        );
    }
}

export default SpookyElement;