import React, {FunctionComponent, MouseEventHandler} from 'react';
import styles from './Button.module.scss'

interface IButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
    label: string;
    mode: string
}

const Button: FunctionComponent<IButtonProps> = ({onClick, label, disabled = false, mode}) => {
    return (
        <button className={mode === "primary" ? styles.primaryButton : styles.secondaryButton} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;