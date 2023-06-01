import styles from './Logo.module.scss';

type LogoProps = {
  size: 'small' | 'medium' | 'large'
};

export default function Logo({ size }: LogoProps) {
  return (
    <div className={`${styles.logo_container} ${styles[`logo_container_size_${size}`]}`}>
      <img src="/Cocktail-Drink-PNG-Free-Download.png" alt="cocktail logo" />
    </div>
  );
}
