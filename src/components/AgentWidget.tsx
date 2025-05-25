import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, User, DollarSign, Shield, Server, Send, Image as ImageIcon } from 'lucide-react';
import mockClickUpApi from '../api/clickup';
import mockGoogleDriveApi from '../api/googleDrive';

type AgentRole = "CustomerSupport" | "Sales" | "SecurityExpert" | "SysAdmin";

interface Message {
  sender: "user" | "agent";
  text: string;
  image?: string;
}

const AgentWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeRole, setActiveRole] = useState<AgentRole>("CustomerSupport");
  const [messages, setMessages] = useState<{ [key in AgentRole]: Message[] }>({
    CustomerSupport: [{ sender: "agent", text: "Hello! I'm the Customer Support Agent. How can I assist you?" }],
    Sales: [{ sender: "agent", text: "Hi! I'm the Sales Agent. Interested in our services?" }],
    SecurityExpert: [{ sender: "agent", text: "Greetings! I'm the Security Expert Agent. Need help with security systems?" }],
    SysAdmin: [{ sender: "agent", text: "Hi! I'm the System Admin Agent. Facing any IT issues?" }],
  });
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    { name: "Customer Support", role: "CustomerSupport", icon: User },
    { name: "Sales", role: "Sales", icon: DollarSign },
    { name: "Security Expert", role: "SecurityExpert", icon: Shield },
    { name: "System Admin", role: "SysAdmin", icon: Server },
  ];

  const handleSend = async () => {
    if (!input.trim() && !file) return;

    const userMessage: Message = { sender: "user", text: input };
    if (file) {
      setIsLoading(true);
      try {
        const result = await mockGoogleDriveApi.uploadImage(file, activeRole);
        userMessage.image = result.url;
        setFile(null);
      } catch (err) {
        setMessages((prev) => ({
          ...prev,
          [activeRole]: [...prev[activeRole], { sender: "agent", text: "Failed to upload image." }],
        }));
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    }

    setMessages((prev) => ({
      ...prev,
      [activeRole]: [...prev[activeRole], userMessage],
    }));
    setInput("");

    // Simulate agent response
    setIsLoading(true);
    try {
      let agentResponse = "";
      if (activeRole === "CustomerSupport") {
        if (input.toLowerCase().includes("invoice")) {
          const driveFile = await mockGoogleDriveApi.getFile("customer-invoice", activeRole);
          const invoice = driveFile.content;
          if (invoice.status === "Paid") {
            agentResponse = `Invoice ${invoice.id} is already paid. Amount: $${invoice.amount}.`;
          } else {
            agentResponse = "Issue escalated to human support for further review.";
            await mockClickUpApi.logInteraction(activeRole, { issue: input, status: "Escalated" });
            await mockGoogleDriveApi.saveFile("customer-support-log", { issue: input, status: "Escalated" }, activeRole);
          }
        } else {
          agentResponse = "Issue noted. A support representative will follow up soon.";
          await mockClickUpApi.logInteraction(activeRole, { issue: input });
          await mockGoogleDriveApi.saveFile("customer-support-log", { issue: input }, activeRole);
        }
      } else if (activeRole === "Sales") {
        if (input.toLowerCase().includes("small business")) {
          agentResponse = "Great! We offer services for small businesses. Can I schedule a meeting for you?";
          await mockClickUpApi.logInteraction(activeRole, { leadDetails: input, status: "Qualified" });
          await mockGoogleDriveApi.saveFile("sales-log", { leadDetails: input, status: "Qualified" }, activeRole);
        } else {
          agentResponse = "Please tell me more about your business needs.";
        }
      } else if (activeRole === "SecurityExpert") {
        if (input.toLowerCase().includes("warehouse")) {
          const driveFile = await mockGoogleDriveApi.getFile("security-manual", activeRole);
          agentResponse = `For a warehouse, I recommend ${driveFile.content.cameras.join(", ")}. Can I schedule an installation?`;
          await mockClickUpApi.logInteraction(activeRole, { request: input });
          await mockGoogleDriveApi.saveFile("security-log", { request: input }, activeRole);
        } else {
          agentResponse = "Please provide more details about your security needs.";
        }
      } else if (activeRole === "SysAdmin") {
        if (input.toLowerCase().includes("network error")) {
          const driveFile = await mockGoogleDriveApi.getFile("it-logs", activeRole);
          const incident = driveFile.content.incidents[0];
          if (incident.status === "Open") {
            agentResponse = "Network outage detected. Issue escalated to IT Ops. Try local Wi-Fi as a workaround.";
            await mockClickUpApi.logInteraction(activeRole, { issue: input, status: "Escalated" });
            await mockGoogleDriveApi.saveFile("it-incident-log", { issue: input, status: "Escalated" }, activeRole);
          } else {
            agentResponse = "Issue resolved. Please restart your system.";
          }
        } else {
          agentResponse = "Issue logged. IT team will investigate.";
          await mockClickUpApi.logInteraction(activeRole, { issue: input });
          await mockGoogleDriveApi.saveFile("it-incident-log", { issue: input }, activeRole);
        }
      }

      setMessages((prev) => ({
        ...prev,
        [activeRole]: [...prev[activeRole], { sender: "agent", text: agentResponse }],
      }));
    } catch (err) {
      setMessages((prev) => ({
        ...prev,
        [activeRole]: [...prev[activeRole], { sender: "agent", text: "Error processing request. Please try again." }],
      }));
    }
    setIsLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-600 text-white p-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Widget Pop-Up */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary-600 text-white p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">AI Agent Chat</h3>
              <button onClick={() => setIsOpen(false)} className="focus:outline-none">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
              {roles.map((role) => (
                <button
                  key={role.role}
                  onClick={() => setActiveRole(role.role as AgentRole)}
                  className={`flex-1 py-2 px-4 text-sm font-medium text-center ${
                    activeRole === role.role
                      ? "bg-primary-100 text-primary-800 border-b-2 border-primary-600"
                      : "text-steel-600 hover:bg-steel-100"
                  }`}
                >
                  <role.icon className="w-4 h-4 inline mr-1" />
                  {role.name}
                </button>
              ))}
            </div>

            {/* Chat Area */}
            <div className="p-4 h-64 overflow-y-auto">
              {messages[activeRole].map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-primary-500 text-white"
                        : "bg-steel-200 text-steel-800"
                    }`}
                  >
                    {msg.text}
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="Uploaded"
                        className="mt-2 w-full h-auto rounded-lg"
                        onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-steel-500 text-sm flex items-center"
                >
                  <span className="animate-pulse">Agent is typing...</span>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <ImageIcon className="w-5 h-5 text-steel-600 hover:text-primary-600" />
                </label>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              {file && (
                <p className="mt-2 text-sm text-steel-600">Selected: {file.name}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AgentWidget;