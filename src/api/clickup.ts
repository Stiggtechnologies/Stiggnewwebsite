const CLICKUP_API_KEY = import.meta.env.VITE_CLICKUP_API_KEY || '';
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

async function handleClickUpError(response: Response, operation: string) {
  const errorText = await response.text();
  let errorMessage = `ClickUp ${operation} failed with status ${response.status}`;
  
  try {
    const errorJson = JSON.parse(errorText);
    errorMessage += `: ${errorJson.err || errorText}`;
  } catch {
    errorMessage += `: ${errorText}`;
  }

  if (response.status === 401) {
    errorMessage = 'Invalid ClickUp API key. Please check your credentials.';
  } else if (response.status === 429) {
    errorMessage = 'ClickUp API rate limit exceeded. Please try again later.';
  }

  throw new Error(errorMessage);
}

const clickUpApi: ClickUpApi = {
  logInteraction: async (role: string, data: any) => {
    if (!CLICKUP_API_KEY) {
      throw new Error('ClickUp API key not configured. Please set VITE_CLICKUP_API_KEY in your environment.');
    }

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

      if (!response.ok) {
        await handleClickUpError(response, 'log interaction');
      }
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  getCustomerData: async (customerId: string) => {
    if (!CLICKUP_API_KEY) {
      throw new Error('ClickUp API key not configured. Please set VITE_CLICKUP_API_KEY in your environment.');
    }

    try {
      const response = await fetch(`${CLICKUP_API_URL}/list/customers/task?custom_id=${customerId}`, {
        headers: {
          'Authorization': CLICKUP_API_KEY
        }
      });
      
      if (!response.ok) {
        await handleClickUpError(response, 'get customer data');
      }
      
      return response.json();
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  getLeadData: async (leadId: string) => {
    if (!CLICKUP_API_KEY) {
      throw new Error('ClickUp API key not configured. Please set VITE_CLICKUP_API_KEY in your environment.');
    }

    try {
      const response = await fetch(`${CLICKUP_API_URL}/list/leads/task?custom_id=${leadId}`, {
        headers: {
          'Authorization': CLICKUP_API_KEY
        }
      });
      
      if (!response.ok) {
        await handleClickUpError(response, 'get lead data');
      }
      
      return response.json();
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  getSecurityProtocols: async () => {
    if (!CLICKUP_API_KEY) {
      throw new Error('ClickUp API key not configured. Please set VITE_CLICKUP_API_KEY in your environment.');
    }

    try {
      const response = await fetch(`${CLICKUP_API_URL}/list/protocols/tasks`, {
        headers: {
          'Authorization': CLICKUP_API_KEY
        }
      });
      
      if (!response.ok) {
        await handleClickUpError(response, 'get security protocols');
      }
      
      return response.json();
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  getITLogs: async () => {
    if (!CLICKUP_API_KEY) {
      throw new Error('ClickUp API key not configured. Please set VITE_CLICKUP_API_KEY in your environment.');
    }

    try {
      const response = await fetch(`${CLICKUP_API_URL}/list/it_incidents/tasks`, {
        headers: {
          'Authorization': CLICKUP_API_KEY
        }
      });
      
      if (!response.ok) {
        await handleClickUpError(response, 'get IT logs');
      }
      
      return response.json();
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  scheduleMeeting: async (leadId: string, date: string) => {
    if (!CLICKUP_API_KEY) {
      throw new Error('ClickUp API key not configured. Please set VITE_CLICKUP_API_KEY in your environment.');
    }

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
      
      if (!response.ok) {
        await handleClickUpError(response, 'schedule meeting');
      }
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  scheduleInstallation: async (date: string) => {
    if (!CLICKUP_API_KEY) {
      throw new Error('ClickUp API key not configured. Please set VITE_CLICKUP_API_KEY in your environment.');
    }

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
      
      if (!response.ok) {
        await handleClickUpError(response, 'schedule installation');
      }
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  },
  updateITIncident: async (id: string, status: string) => {
    if (!CLICKUP_API_KEY) {
      throw new Error('ClickUp API key not configured. Please set VITE_CLICKUP_API_KEY in your environment.');
    }

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
      
      if (!response.ok) {
        await handleClickUpError(response, 'update incident');
      }
    } catch (error) {
      console.error('ClickUp API Error:', error);
      throw error;
    }
  }
};

export default clickUpApi;