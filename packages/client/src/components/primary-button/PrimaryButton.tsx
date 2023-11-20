import React, {FunctionComponent, MouseEventHandler} from 'react';
import styles from './PrimaryButton.module.scss'

interface IPrimaryButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
    text: string;
}

const PrimaryButton: FunctionComponent<IPrimaryButtonProps> = ({onClick, text, disabled}) => {
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default PrimaryButton;