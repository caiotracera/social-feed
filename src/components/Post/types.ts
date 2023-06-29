import { SyntheticEvent } from 'react';
import { AuthorProps } from '../Author/types';
import { CommentProps } from '../Comment/types';

export type PostProps = {
  id: string;
  author: AuthorProps;
  publishedAt: string;
  content: string;
  comments: CommentProps[];
};

export type FormEvent<T = Element> = SyntheticEvent<T>;
