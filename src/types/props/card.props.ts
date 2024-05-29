import { UserInfoProps } from "./userinfo.props";

export interface GistData {
  userInfo: UserInfoProps
  id: string;
  fileName: string;
  fileURL: string;
}

export interface CardProps {
  userDisplay?: boolean;
  hoverAffect?: boolean;
  className?: string;
  gistData: GistData;
}
