import styles from './Select.module.scss';

type SelectProps = {
  selectedOption: string;
  options: string[];
  label: string;
  setOption: (option: string) => void;
};

export default function Select(
  {
    selectedOption, options, setOption, label,
  }: SelectProps,
) {
  return (
    <div className={styles.selectWrapper}>
      <label className={styles.label} htmlFor={label}>
        {label}
        :
        {' '}
      </label>
      <div className={styles.selectContainer}>
        <select
          name={label}
          value={selectedOption}
          onChange={(e) => setOption(e.target.value)}
          className={styles.select}
        >
          <option value="">Select</option>
          {
            options.map((option) => <option key={option} value={option}>{option}</option>)
          }
        </select>
      </div>
    </div>
  );
}
