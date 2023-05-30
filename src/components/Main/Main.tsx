import styles from './styles.module.scss';

export type MainProps = {
  children: React.ReactNode;
};

export default function Main({ children }: MainProps) {
  return (
    <main className={styles.main}>{children}</main>
  )
}
