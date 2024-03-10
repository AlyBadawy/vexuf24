export type Role = {
  id: string;
  name: Roles;
};

export enum Roles {
  Admin = 'Admin',
  Therapist = 'Therapist',
  Patient = 'Patient',
}
