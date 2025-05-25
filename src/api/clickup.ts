const CLICKUP_API_KEY = 'pk_32117864_6D9AWD14LU9C6V54035PQHJDL1NBFWLM';
const CLICKUP_API_URL = 'https://api.clickup.com/api/v2';

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

const clickUpApi: ClickUpApi = {
  logInteraction: async (role: string, data: any) => {
    try {
      const response = await fetch(`${CLICKUP_API_URL}/task`, {
        method: 'POST',
        headers: {
          'Authorization': CLICKUP_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${role} Interaction`,
          description: JSON.stringify(data, null, 2),
          status: 'Open'
        })
      });
      if (!response.ok) throw new Error('Failed to log interaction');
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  getCustomerData: async (customerId: string) => {
    try {
      const response = await fetch(`${CLICKUP_API_URL}/list/customers/task?custom_id=${customerId}`, {
        headers: {
          'Authorization': CLICKUP_API_KEY
        }
      });
      if (!response.ok) throw new Error('Failed to get customer data');
      return response.json();
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  getLeadData: async (leadId: string) => {
    try {
      const response = await fetch(`${CLICKUP_API_URL}/list/leads/task?custom_id=${leadId}`, {
        headers: {
          'Authorization': CLICKUP_API_KEY
        }
      });
      if (!response.ok) throw new Error('Failed to get lead data');
      return response.json();
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  getSecurityProtocols: async () => {
    try {
      const response = await fetch(`${CLICKUP_API_URL}/list/protocols/tasks`, {
        headers: {
          'Authorization': CLICKUP_API_KEY
        }
      });
      if (!response.ok) throw new Error('Failed to get security protocols');
      return response.json();
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  getITLogs: async () => {
    try {
      const response = await fetch(`${CLICKUP_API_URL}/list/it_incidents/tasks`, {
        headers: {
          'Authorization': CLICKUP_API_KEY
        }
      });
      if (!response.ok) throw new Error('Failed to get IT logs');
      return response.json();
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  scheduleMeeting: async (leadId: string, date: string) => {
    try {
      const response = await fetch(`${CLICKUP_API_URL}/task`, {
        method: 'POST',
        headers: {
          'Authorization': CLICKUP_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `Sales Meeting - Lead ${leadId}`,
          due_date: new Date(date).getTime(),
          status: 'Scheduled'
        })
      });
      if (!response.ok) throw new Error('Failed to schedule meeting');
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  scheduleInstallation: async (date: string) => {
    try {
      const response = await fetch(`${CLICKUP_API_URL}/task`, {
        method: 'POST',
        headers: {
          'Authorization': CLICKUP_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Security System Installation',
          due_date: new Date(date).getTime(),
          status: 'Scheduled'
        })
      });
      if (!response.ok) throw new Error('Failed to schedule installation');
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  updateITIncident: async (id: string, status: string) => {
    try {
      const response = await fetch(`${CLICKUP_API_URL}/task/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': CLICKUP_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: status
        })
      });
      if (!response.ok) throw new Error('Failed to update incident');
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  }
};

export default clickUpApi;