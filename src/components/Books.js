import React, { Component } from 'react'
import Stack from 'react-bootstrap/Stack';
export default class Books extends Component {
    render() {
        return (
            <Stack gap={3}>
                <div className="bg-light border">Think and Grow Rich</div>
                <div className="bg-light border">Think like a Monk</div>
                <div className="bg-light border">Limitless</div>
            </Stack>

        );
    }
}