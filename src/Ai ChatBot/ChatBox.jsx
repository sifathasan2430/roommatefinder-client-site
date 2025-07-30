import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
  
const res = await axios.post("http://localhost:3000/api/chat", {
  message: input, // send only the latest user input
});
    
    setTimeout(() => {
      setMessages(res.data)
      return
    }, 600);
   
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
      >
        Chat 💬
      </button>

      {/* Popup Chat Modal */}
      {open && (
        <div className="fixed inset-0 z-50  flex items-end sm:items-center justify-center bg-black/40">
          <div className="bg-white  dark:bg-gray-900 w-full max-w-md h-[600px] rounded-xl shadow-xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-t-xl">
              <span className="font-bold">Customer Support</span>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-xs ${
                      msg.role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 border px-3 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
