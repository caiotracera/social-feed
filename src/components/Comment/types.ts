import { AuthorProps } from '../Author/types';

export type CommentProps = {
  id: string;
  author: AuthorProps;
  publishedAt: string;
  content: string;
  likes: number;
  onDeleteComment?: (id: string) => void;
};
