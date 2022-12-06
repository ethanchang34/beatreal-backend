import { Reel } from "./reel";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  spotifyId: string;
  friendIds: string[];
  reels: Reel[];
  email: string;
  profilePic: string | null;
  bio: string;
}