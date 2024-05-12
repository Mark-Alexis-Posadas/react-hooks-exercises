export default function Input({
  text,
  value,
  id,
  type,
  name,
  handleChange,
  classNames,
}) {
  return (
    <div className="mb-4">
      <label htmlFor="first_name">{text}</label>
      <input
        type={type}
        className={classNames}
        placeholder={text}
        value={value}
        onChange={handleChange}
        id={id}
        name={name}
      />
    </div>
  );
}
