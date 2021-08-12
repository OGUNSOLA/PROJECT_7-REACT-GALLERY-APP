import React, { Component } from 'react'

export default class Photo extends Component {
    render() {
        return (
            <div className="photo">
                 <li>
                <img src={this.props.src} alt={this.props.alt} />
            </li>

            </div>
           
        )
    }
}
