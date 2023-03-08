import React, { Component } from 'react'
import Container from 'react-bootstrap/esm/Container';

export default class Books extends Component {
    render() {
        return (
            <div>
                <div></div>
                <Container>
                    <div className="bg-light border">Think and Grow Rich</div>
                    <div className="bg-light border">Think like a Monk</div>
                    <div className="bg-light border">Limitless</div>
                </Container>
            </div>

        );
    }
}