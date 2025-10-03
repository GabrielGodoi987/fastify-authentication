import { UserRole } from "../enums/user-role.enum";

export class UserEntity {
  private id: string;
  private name: string;
  private email: string;
  private userRole: UserRole;

  constructor(id: string, name: string, email: string, userRole: UserRole) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.userRole = userRole;
  }
}
