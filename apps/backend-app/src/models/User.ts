// src/models/User.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserUpdate {
  displayName: string;
  phoneNumber: string;
}
