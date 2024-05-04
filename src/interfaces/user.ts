export interface User {
    username: string;
    email: string;
    password: string;
    location?: string;
    role?: "user" | "admin";
  }
  