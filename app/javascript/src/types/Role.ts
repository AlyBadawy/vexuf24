export type Role = {
  id: string;
  name: Roles;
  icon?: string;
  position: number;
};

export enum Roles {
  Admin = 'Admin',
  Therapist = 'Therapist',
  Patient = 'Patient',
}
