import Chat from "./Chat";
import AnimatedHeader from "./AnimatedHeader";

export default function ChatInterface() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-8 relative z-10">
      <div
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/monkey.svg')",
          backgroundSize: "100px",
          backgroundRepeat: "repeat",
          backgroundPosition: "200px, 200px",
          paddingRight: "100px",
          backgroundOrigin: "content-box",
        }}
      ></div>
      <AnimatedHeader />
      <Chat />
      <footer className="mt-4 text-center text-sm text-gray-500">
        Powered by GPT 4 Mini and monkeys on the Querious George team
      </footer>
    </div>
  );
}
