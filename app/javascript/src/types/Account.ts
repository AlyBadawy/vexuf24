import { Role } from './Role';

export type Account = {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  roles: Role[];
  unconfirmedEmail?: string;
};
