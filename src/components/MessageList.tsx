import { Message } from "./Message";

export function MessageList({ messages }: { messages: string[] }) {
  return (
    <ul className="message-list">
      {messages.map(message => <li><Message message={message} /></li>)}
    </ul>
  )
}
