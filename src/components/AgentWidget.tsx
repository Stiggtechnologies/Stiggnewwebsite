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
          const customerData = await mockClickUpApi.getCustomerData("CUST-001");
          const invoice = customerData.invoices[0];
          if (invoice.status === "Paid") {
            agentResponse = `Invoice ${invoice.id} is already paid. Amount: $${invoice.amount}.`;
          } else {
            agentResponse = "I understand there might be an issue with your invoice. Let me help you with that. Could you please provide more details about what seems incorrect? This will help me better assist you or escalate to the appropriate team if needed.";
            await mockClickUpApi.logInteraction(activeRole, { issue: input, status: "Escalated" });
            await mockGoogleDriveApi.saveFile("customer-support-log", { issue: input, status: "Escalated" }, activeRole);
          }
        } else {
          agentResponse = "I'm here to help! Could you please provide more details about your concern? This will help me assist you more effectively. For example, if it's about billing, services, or technical support, I can guide you accordingly.";
          await mockClickUpApi.logInteraction(activeRole, { issue: input });
          await mockGoogleDriveApi.saveFile("customer-support-log", { issue: input }, activeRole);
        }
      } else if (activeRole === "Sales") {
        if (input.toLowerCase().includes("small business")) {
          agentResponse = "That's great! We specialize in security solutions for small businesses. To better understand your needs, could you tell me:\n1. How many locations do you need to secure?\n2. Are you interested in physical security guards, surveillance systems, or both?\n3. Do you have any specific security concerns?\n\nThis will help me recommend the most suitable solutions for your business.";
          await mockClickUpApi.logInteraction(activeRole, { leadDetails: input, status: "Qualified" });
          await mockGoogleDriveApi.saveFile("sales-log", { leadDetails: input, status: "Qualified" }, activeRole);
        } else {
          agentResponse = "Welcome! I'd be happy to discuss our security solutions. To provide you with the most relevant information, could you tell me about:\n1. The type of business you operate\n2. Your current security challenges\n3. Your budget range for security services\n\nThis will help me tailor our solutions to your specific needs.";
        }
      } else if (activeRole === "SecurityExpert") {
        if (input.toLowerCase().includes("warehouse")) {
          const driveFile = await mockGoogleDriveApi.getFile("security-manual", activeRole);
          const protocols = await mockClickUpApi.getSecurityProtocols();
          agentResponse = `For warehouse security, I recommend a comprehensive solution including:\n
1. Surveillance: ${protocols.cameras.join(", ")} for complete coverage\n
2. Access Control: ${protocols.accessControl.join(", ")} systems\n
3. Monitoring: ${protocols.monitoring.join(", ")}\n\n
Would you like to schedule a site assessment to customize this solution for your facility?`;
          await mockClickUpApi.logInteraction(activeRole, { request: input });
          await mockGoogleDriveApi.saveFile("security-log", { request: input }, activeRole);
        } else {
          agentResponse = "I'm here to help design a security solution for you. To provide the best recommendations, could you tell me:\n1. The type of facility you need to secure\n2. Approximate square footage\n3. Any specific security concerns\n4. Current security measures in place";
        }
      } else if (activeRole === "SysAdmin") {
        if (input.toLowerCase().includes("network error")) {
          const itLogs = await mockClickUpApi.getITLogs();
          const incident = itLogs.incidents[0];
          if (incident.status === "Open") {
            agentResponse = `I've detected an ongoing network issue. Let me help you troubleshoot:

1. First, please try these steps:
   - Restart your computer
   - Check your network cable connection
   - Try connecting to a different network if available

2. If the issue persists, I'll need:
   - Your system ID
   - Any error messages you're seeing
   - When the issue started

I've already escalated this to our IT Ops team for investigation.`;
            await mockClickUpApi.logInteraction(activeRole, { issue: input, status: "Escalated" });
            await mockGoogleDriveApi.saveFile("it-incident-log", { issue: input, status: "Escalated" }, activeRole);
          } else {
            agentResponse = "Good news! The network issue has been resolved. Please:\n1. Restart your system\n2. Clear your DNS cache\n3. Test your connection\n\nLet me know if you still experience any issues after these steps.";
          }
        } else {
          agentResponse = "I'll help you resolve your IT issue. To better assist you, please provide:\n1. Your system ID or hostname\n2. A detailed description of the problem\n3. Any error messages you're seeing\n4. When the issue started";
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