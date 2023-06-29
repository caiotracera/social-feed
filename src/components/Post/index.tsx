import { useState } from 'react';

import { faker } from '@faker-js/faker';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import { CommentProps } from '../Comment/types';

import styles from './post.module.css';
import { PostProps } from './types';

export function Post({ author, comments, content, publishedAt }: PostProps) {
  const [postComments, setPostComments] = useState<CommentProps[]>(comments);
  const [newCommentText, setNewCommentText] = useState<string>('');

  const publishedDateFormatted = format(
    new Date(publishedAt),
    "d 'de' LLLL 'às' HH:mm'h'",
  );

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt),
    {
      locale: ptBR,
    },
  );

  function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setPostComments((prevState) => [
      ...prevState,
      {
        id: faker.string.uuid(),
        content: newCommentText,
        publishedAt: new Date().toISOString(),
        author: {
          id: faker.string.uuid(),
          name: faker.person.fullName(),
          avatar_url: faker.internet.avatar(),
          role: faker.person.jobTitle(),
        },
        likes: 0,
      },
    ]);

    setNewCommentText('');
  }

  function handleNewCommentInvalid(
    event: React.FormEvent<HTMLTextAreaElement>,
  ) {
    event.currentTarget.setCustomValidity('O comentário não pode ser vazio!');
  }

  function deleteComment(id: string) {
    setPostComments((prevState) =>
      prevState.filter((comment) => comment.id !== id),
    );
  }

  function handleNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.authorContainer}>
          <Avatar src={author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time dateTime={publishedDateFormatted}>
          Públicado há {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder={'Deixe um comentário'}
          name={'comment'}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          value={newCommentText}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className="commentList">
        {postComments.map((comment) => (
          <Comment
            key={comment.id}
            {...comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
