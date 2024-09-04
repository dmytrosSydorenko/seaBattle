import { FC, PropsWithChildren } from "react";

type MessageType = PropsWithChildren<{}>

const Message:FC<MessageType> = ({children}) => {
    return <div className="message">{children}</div>
}

export default Message;