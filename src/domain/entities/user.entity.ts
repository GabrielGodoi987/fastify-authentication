import { UserRole } from "../enums/user-role.enum";

export class UserEntity {
  id: string;
  name: string;
  email: string;
  role: UserRole;

  constructor(id: string, name: string, email: string, role: UserRole) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}
