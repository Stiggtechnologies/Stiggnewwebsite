// Mock ClickUp API for development
interface ClickUpApi {
  logInteraction: (role: string, data: any) => Promise<void>;
  getCustomerData: (customerId: string) => Promise<any>;
  getLeadData: (leadId: string) => Promise<any>;
  getSecurityProtocols: () => Promise<any>;
  getITLogs: () => Promise<any>;
  scheduleMeeting: (leadId: string, date: string) => Promise<void>;
  scheduleInstallation: (date: string) => Promise<void>;
  updateITIncident: (id: string, status: string) => Promise<void>;
}

const mockClickUpApi: ClickUpApi = {
  logInteraction: async (role: string, data: any) => {
    console.log(`[Mock ClickUp] Logging interaction for ${role}:`, data);
    return Promise.resolve();
  },
  getCustomerData: async (customerId: string) => {
    console.log(`[Mock ClickUp] Getting customer data for ID: ${customerId}`);
    return Promise.resolve({
      id: customerId,
      name: "Sample Customer",
      status: "Active",
      services: ["Security Guards", "Camera Systems"]
    });
  },
  getLeadData: async (leadId: string) => {
    console.log(`[Mock ClickUp] Getting lead data for ID: ${leadId}`);
    return Promise.resolve({
      id: leadId,
      status: "New",
      interest: ["Alarm Systems", "Guard Services"]
    });
  },
  getSecurityProtocols: async () => {
    console.log('[Mock ClickUp] Getting security protocols');
    return Promise.resolve([
      { id: "1", name: "Emergency Response", status: "Active" },
      { id: "2", name: "Access Control", status: "Active" }
    ]);
  },
  getITLogs: async () => {
    console.log('[Mock ClickUp] Getting IT logs');
    return Promise.resolve([
      { id: "1", type: "System Update", status: "Completed" },
      { id: "2", type: "Security Alert", status: "Resolved" }
    ]);
  },
  scheduleMeeting: async (leadId: string, date: string) => {
    console.log(`[Mock ClickUp] Scheduling meeting for lead ${leadId} on ${date}`);
    return Promise.resolve();
  },
  scheduleInstallation: async (date: string) => {
    console.log(`[Mock ClickUp] Scheduling installation for ${date}`);
    return Promise.resolve();
  },
  updateITIncident: async (id: string, status: string) => {
    console.log(`[Mock ClickUp] Updating incident ${id} to status: ${status}`);
    return Promise.resolve();
  }
};

export default mockClickUpApi;