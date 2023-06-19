import { AvatarProps } from './types.ts';
import styles from './avatar.module.css';

export function Avatar({ src, hasBorder = true }: AvatarProps) {
  return (
    <img
      src={src}
      alt={''}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
