import './MyClassComponent.css';
import React from 'react';
import image from '../../assets/img/logo192.png';

export default class MyClassComponent extends React.Component {
    render() {
        return (
            <>
            <span>Hello, </span>
            <span>class </span>
            <span>component </span>
            <img src={image} />
            </>
        )
    }
}

export const PI = 3.14;
export function multiplay(a, b) {
    return a * b;
}