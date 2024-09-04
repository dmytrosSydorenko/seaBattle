import { FC, useContext } from "react"
import { TranslationContext } from "../../context/context";
import Message from "../../utils/ui/button/Message";
import styles from './Header.module.scss';

type HeaderProps = {
    turnQty: number,
    shipLength: number,
    wreckedСells: number
}

const Header:FC<HeaderProps> = ({turnQty, wreckedСells, shipLength}) => {
    const translation = useContext(TranslationContext);
    const isGameFinished = wreckedСells && wreckedСells === shipLength;

    return <div className={styles.header}>
        <h3>{translation.turnsLabel.replace('{qty}', turnQty.toString())}</h3>
        {isGameFinished ? <Message>{translation.successMessage}</Message> : ''}
    </div>
}

export default Header;