import { FC, useContext } from "react"
import { TranslationContext } from "../../context/context";
import Button from "../../utils/ui/button/Button";

type FooterProps = {
    setNewGame: () => void
}

const Footer:FC<FooterProps> = ({setNewGame}) => {
    const translation = useContext(TranslationContext);

    return <Button className="button button-action" onClick={setNewGame}>{translation.setNewGameLabel}</Button>
}

export default Footer;