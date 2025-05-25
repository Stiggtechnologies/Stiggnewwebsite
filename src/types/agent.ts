export type AgentRole = "CustomerSupport" | "Sales" | "SecurityExpert" | "SysAdmin";

export interface Message {
  sender: "user" | "agent";
  text: string;
  image?: string;
}

export interface AgentContext {
  CustomerSupport: string;
  Sales: string;
  SecurityExpert: string;
  SysAdmin: string;
}