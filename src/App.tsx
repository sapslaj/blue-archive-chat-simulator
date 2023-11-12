import { useCallback, useState } from 'react';
import './App.css'
import { MessageInput } from './components/MessageInput';
import { MessageList } from './components/MessageList';

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = useCallback((newMessage: string) => setMessages([...messages, newMessage]), [messages]);

  return (
    <div className="app">
      <h1>Blue Archive Chat Simulator</h1>
      <MessageList messages={messages} />
      <hr />
      <MessageInput onSubmit={addMessage} />
    </div>
  )
}

export default App
