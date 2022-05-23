import styles from "./Select.module.css";

const Select = ({ text, name, option, handleOnChange, value }) => {
  return (
    <div className={styles.select_control}>
      <label htmlFor={name}>{text}:</label>
      <select
            name={name}
            id={name}
            onChange={handleOnChange}
            value={value || ''}
      >
        <option>selecione uma opção</option>
        {option.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
        {/* ele pega o  array categories que recebe da api  e passa o map no array */}
      </select>
    </div>
  );
};

export default Select;
