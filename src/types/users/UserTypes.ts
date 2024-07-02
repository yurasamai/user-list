
export enum Gender {
    Male = 'male',
    Female = 'female',
  }

  export enum Status {
    Inactive = 'inactive',
    Active = 'active',
  }

  export interface User {
    id: string;
    name: string;
    email: string;
    gender: Gender;
    status: Status;
  }