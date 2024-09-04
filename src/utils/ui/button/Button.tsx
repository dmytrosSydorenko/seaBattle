import { FC, PropsWithChildren } from "react";

type ButtonType = PropsWithChildren<{
    className?: string,
    onClick: () => void
}>

const Button:FC<ButtonType> = ({onClick, children, className}) => {
    return <button className={className} type="button" onClick={onClick}>{children}</button>
}

export default Button;