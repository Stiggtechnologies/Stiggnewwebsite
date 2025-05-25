interface ClickUpApi {
  logInteraction: (role: string, data: any) => Promise<void>;
}

const mockClickUpApi: ClickUpApi = {
  logInteraction: async (role: string, data: any) => {
    console.log(`[ClickUp] Logging ${role} interaction:`, data);
    return Promise.resolve();
  }
};

export default mockClickUpApi;