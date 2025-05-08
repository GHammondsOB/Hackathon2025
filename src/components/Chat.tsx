"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const messages = [
  { id: 1, content: "Hello! How can I assist you today?", isUser: false },
];

export default function Chat() {
  const [input, setInput] = useState('');
  const [messagesList, setMessages] = useState(messages);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [
      ...prev,
      { id: Date.now(), content: input, isUser: true },
      { id: Date.now() + 1, content: "I'm processing your request...", isUser: false },
    ]);
    setInput('');
  };

  return (
    <div className="w-[90%] max-w-[800px] h-[calc(100vh-200px)] flex flex-col gap-2 p-3 rounded-lg bg-white shadow-sm">
      <div className="flex-1 overflow-y-auto flex flex-col-reverse gap-2">
        {messagesList.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`w-fit max-w-[80%] self-${message.isUser ? 'end' : 'start'}`}
          >
            <div className={`p-2 rounded-lg ${message.isUser ? 'bg-blue-100' : 'bg-white'} shadow-sm`}
              style={{
                borderColor: message.isUser ? 'rgb(0 123 255 / 0.5)' : 'rgb(229 231 235 / 0.5)'
              }}
            >
              <p className="text-gray-800">{message.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="p-2 rounded-lg bg-yellow-600 text-white font-bold tracking-wider hover:bg-yellow-700 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
