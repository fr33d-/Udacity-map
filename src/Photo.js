import React, { Component } from 'react'

class Photo extends Component {

    constructor(props) {
        super(props)
        this.openMarker = this.openMarker.bind(this)
    }
    
    openMarker(marker) {
        console.log(marker);
        window.google.maps.event.trigger(marker, 'click');
    }

  render() {
		return (
        	<li className="li-photo" tabIndex={this.props.photo.id+4} onClick={() => this.openMarker(this.props.photo.marker)} > 
                <img src={require('./img/' + this.props.photo.photo)} alt={this.props.photo.title} />
                <h3>{this.props.photo.title}</h3>
                {/* <span className="photo-description">{this.props.photo.description}</span> */}
            </li>
		)
	}
}

export default Photo