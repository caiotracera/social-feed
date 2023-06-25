import { useState } from 'react';
import { faker } from '@faker-js/faker';

import { Comment } from '../Comment';
import { CommentProps } from '../Comment/types';
import { Avatar } from '../Avatar';

import styles from './post.module.css';
import { PostProps } from './types';

export function Post({ author, comments, content, publishedAt }: PostProps) {
  const [postComments, setPostComments] = useState<CommentProps[]>(comments);
  const [newCommentText, setNewCommentText] = useState<string>('');

  function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setPostComments((prevState) => [
      ...prevState,
      {
        id: faker.string.uuid(),
        content: newCommentText,
        publishedAt: new Date().toISOString(),
        author: author,
        likes: 0,
      },
    ]);

    setNewCommentText('');
  }

  function deleteComment(id: string) {
    setPostComments((prevState) =>
      prevState.filter((comment) => comment.id !== id),
    );
  }

  function handleNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    setNewCommentText(event.target.value);
  }

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
        <time dateTime={publishedAt}>Públicado há 1hr</time>
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
          value={newCommentText}
        />
        <footer>
          <button type="submit">Publicar</button>
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
