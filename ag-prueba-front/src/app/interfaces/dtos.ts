export interface MessageDto {
  message: string;
}

export interface TokenDto {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  id_token?: string;
  refresh_token?: string;
}
