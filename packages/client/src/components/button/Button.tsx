import React, {FunctionComponent, MouseEventHandler} from 'react';
import styles from './Button.module.scss'

interface IButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    label: string;
    mode: string;
    dataTestId?: string
}

const Button: FunctionComponent<IButtonProps> = ({onClick, label, disabled = false, mode, dataTestId = 'button'}) => {
    return (
        <button data-testid={dataTestId} className={mode === "primary" ? styles.primaryButton : styles.secondaryButton}
                onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;