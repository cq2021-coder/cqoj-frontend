export type User = {
  createTime?: string;
  id?: number;
  isDelete?: number;
  mpOpenId?: string;
  unionId?: string;
  updateTime?: string;
  userAccount?: string;
  userAvatar?: string;
  userName?: string;
  userPassword?: string;
  userProfile?: string;
  userRole?: User.userRole;
};

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace User {
  export enum userRole {
    ADMIN = "ADMIN",
    BAN = "BAN",
    USER = "USER",
  }
}
