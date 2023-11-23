import * as React from 'react';
import Button from "./Button";

export default {
    title: "Button",
    component: Button,
}

export const Primary = () => <Button
    label="Click me!"
    onClick={()  => alert('Button clicked!')}
    disabled={false}
    mode="primary"/>

export const PrimaryDisabled = () => <Button
    label="Click me!"
    onClick={()  => alert('Button clicked!')}
    disabled={true}
    mode="primary"/>

export const Secondary = () => <Button
    label="Click me!"
    onClick={()  => alert('Button clicked!')}
    disabled={false}
    mode="secondary"/>

export const SecondaryDisabled = () => <Button
    label="Click me!"
    onClick={()  => alert('Button clicked!')}
    disabled={true}
    mode="secondary"/>