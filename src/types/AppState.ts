import { Comment } from './Comment';

export interface AppState {
  session: {
    lang: string;
  };
  comments: Comment[];
}
