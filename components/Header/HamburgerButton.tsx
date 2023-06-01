import styles from './HamburgerButton.module.scss';

export interface HamburgerButtonProps {
  onClick: () => void;
  classActive: boolean;
}

export default function HamburgerButton({ onClick, classActive = false }: HamburgerButtonProps) {
  return (
    <div>
      <button onClick={onClick} className={`${styles.navbar_menu_hamburger} ${classActive ? styles.active : ''}`} type="button">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}
