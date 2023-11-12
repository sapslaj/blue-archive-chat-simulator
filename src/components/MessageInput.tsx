import { useState } from "react";
import { useCensorship } from "../hooks/useCensorship";
import { Message } from "./Message";

export function MessageInput({ onSubmit }: { onSubmit: (m: string) => void }) {
  const [message, setMessage] = useState('');
  const censoredMessage = useCensorship(message);
  return (
    <div className="message-input">
      <div className="message-preview">
        <Message message={censoredMessage} placeholder="Message preview" />
      </div>
      <form className="message-input-form" onSubmit={(e) => {
        e.preventDefault();
        onSubmit(message);
        setMessage('');
      }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={52}
          placeholder="Send Message"
        />
        <button>Send</button>
      </form>
    </div>
  );
}
