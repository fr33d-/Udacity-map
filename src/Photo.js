import React, { Component } from 'react'

class Photo extends Component {

  render() {
		return (
        	<li className="li-photo">
                <img src={require('./img/' + this.props.photo.photo)} alt={this.props.photo.title} />
                <h3>{this.props.photo.title}</h3>
                {/* <span className="photo-description">{this.props.photo.description}</span> */}
            </li>
		)
	}
}

export default Photo