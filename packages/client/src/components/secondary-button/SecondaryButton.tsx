import React, {FunctionComponent, MouseEventHandler} from 'react';
import styles from './SecondaryButton.module.scss'

interface ISecondaryButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
    text: string;
}

const SecondaryButton: FunctionComponent<ISecondaryButtonProps> = ({onClick, text, disabled}) => {
    return (
        <button className={styles.button} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};

export default SecondaryButton;