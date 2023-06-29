import styles from './avatar.module.css';
import { AvatarProps } from './types.ts';

export function Avatar({ src, hasBorder = true }: AvatarProps) {
  return (
    <img
      src={src}
      alt={''}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
