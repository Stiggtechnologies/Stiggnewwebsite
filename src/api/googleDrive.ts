interface GoogleDriveApi {
  uploadImage: (file: File, role: string) => Promise<{ url: string }>;
  getFile: (name: string, role: string) => Promise<any>;
  saveFile: (name: string, data: any, role: string) => Promise<void>;
}

const mockGoogleDriveApi: GoogleDriveApi = {
  uploadImage: async (file: File, role: string) => {
    console.log(`[Drive] Uploading image for ${role}:`, file.name);
    return Promise.resolve({ url: URL.createObjectURL(file) });
  },
  getFile: async (name: string, role: string) => {
    console.log(`[Drive] Getting file ${name} for ${role}`);
    return Promise.resolve({
      content: {
        id: "INV-001",
        status: "Paid",
        amount: 1500,
        cameras: ["HD-PTZ-2000", "IR-Dome-500"],
        incidents: [{ status: "Open", type: "Network" }]
      }
    });
  },
  saveFile: async (name: string, data: any, role: string) => {
    console.log(`[Drive] Saving file ${name} for ${role}:`, data);
    return Promise.resolve();
  }
};

export default mockGoogleDriveApi;