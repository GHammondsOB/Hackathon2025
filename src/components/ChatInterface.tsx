import Chat from './Chat';
import AnimatedHeader from './AnimatedHeader';

export default function ChatInterface() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 pt-8">
      <AnimatedHeader />
      <Chat />
      <footer className="mt-4 text-center text-sm text-gray-500">
        Powered by GPT 4 Mini and monkeys on the Querious George team
      </footer>
    </div>
  );
}
