import axios, { AxiosResponse } from "axios";

interface Credentials {
  email: string;
  password: string;
}

interface Callbacks {
  onRequest: () => void;
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
}

interface SocialSignInParams {
  provider: string;
}

const authClient = axios.create({
  baseURL: "http://localhost:7001/api", // Ensure this is the correct base URL for your backend
  withCredentials: true,
});

const signIn = {
  email: async (
    credentials: Credentials,
    callbacks: Callbacks
  ): Promise<void> => {
    try {
      callbacks.onRequest();
      const response: AxiosResponse<any> = await authClient.post(
        "/auth/sign-in/email",
        credentials
      );
      callbacks.onSuccess(response.data);
    } catch (error: any) {
      callbacks.onError(error.response?.data);
    }
  },
  social: async ({ provider }: SocialSignInParams): Promise<void> => {
    window.location.href = `${authClient.defaults.baseURL}/auth/sign-in/${provider}`;
  },
};

export default { signIn };
