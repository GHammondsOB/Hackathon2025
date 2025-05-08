import ChatInterface from '../components/ChatInterface';

const messages = [
  { id: 1, content: "Hello! How can I assist you today?", isUser: false },
];

export default function Home() {
  return <ChatInterface />;
}

