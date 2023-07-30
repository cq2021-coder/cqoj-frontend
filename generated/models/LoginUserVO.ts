export type LoginUserVO = {
  createTime?: string;
  id?: number;
  updateTime?: string;
  userAvatar?: string;
  userName?: string;
  userProfile?: string;
  userRole?: LoginUserVO.userRole;
};

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LoginUserVO {
  export enum userRole {
    ADMIN = "ADMIN",
    BAN = "BAN",
    USER = "USER",
  }
}
