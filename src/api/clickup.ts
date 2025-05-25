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
    console.log(`[ClickUp] Logging ${role} interaction:`, data);
    return Promise.resolve();
  },
  getCustomerData: async (customerId: string) => {
    return Promise.resolve({
      id: customerId,
      name: "John Doe",
      invoices: [
        { id: "INV-001", status: "Paid", amount: 1500 },
        { id: "INV-002", status: "Pending", amount: 2000 }
      ]
    });
  },
  getLeadData: async (leadId: string) => {
    return Promise.resolve({
      id: leadId,
      name: "Jane Smith",
      company: "ABC Corp",
      status: "New"
    });
  },
  getSecurityProtocols: async () => {
    return Promise.resolve({
      cameras: ["HD-PTZ-2000", "IR-Dome-500", "4K-Bullet-Pro"],
      accessControl: ["Biometric", "RFID", "PIN"],
      monitoring: ["24/7", "AI-Enhanced", "Remote"]
    });
  },
  getITLogs: async () => {
    return Promise.resolve({
      incidents: [
        { id: "INC-001", status: "Open", type: "Network", priority: "High" },
        { id: "INC-002", status: "Closed", type: "Software", priority: "Medium" }
      ]
    });
  },
  scheduleMeeting: async (leadId: string, date: string) => {
    console.log(`[ClickUp] Scheduling meeting for lead ${leadId} on ${date}`);
    return Promise.resolve();
  },
  scheduleInstallation: async (date: string) => {
    console.log(`[ClickUp] Scheduling installation for ${date}`);
    return Promise.resolve();
  },
  updateITIncident: async (id: string, status: string) => {
    console.log(`[ClickUp] Updating incident ${id} status to ${status}`);
    return Promise.resolve();
  }
};

export default mockClickUpApi;