import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar';

import styles from './comment.module.css';
import { CommentProps } from './types';

export function Comment({
  id,
  author,
  content,
  likes,
  publishedAt,
  onDeleteComment,
}: CommentProps) {
  function handleDeleteComment() {
    onDeleteComment && onDeleteComment(id);
  }

  return (
    <div className={styles.comment}>
      <Avatar src={author.avatar_url} hasBorder={false} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time dateTime={publishedAt}>Cerca de 1hr atrás</time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
