import React, { Component } from 'react'

export default class Photo extends Component {
    render() {
        return (
            <li>
                <img src={this.props.src} alt={this.props.alt} />
            </li>
        )
    }
}
