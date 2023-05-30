import styles from './styles.module.scss';

type SelectProps = {
  option: string;
  options: string[];
  label: string;
  setOption: (option: string) => void;
} 

export default function Select (
  { option, options, setOption, label }: SelectProps
  ) {
  return (
    <div className={styles.selectWrapper}>
      <label className={styles.label} htmlFor={label}>{label}: </label>
      <div className={styles.selectContainer}>
        <select name={label} value={option} onChange={(e) => setOption(e.target.value)} className={styles.select}>
          <option value="">Select</option>
          {
            options.map((option) => {
              return <option key={option} value={option}>{option}</option>
            })
          }
        </select>
      </div>
    </div>
  );
}