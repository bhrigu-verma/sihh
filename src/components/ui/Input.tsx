interface InputProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Input: React.FC<InputProps> = ({ id, label, type = 'text', value, onChange }) => {
    return (
      <div>
        <label htmlFor={id} className="block">{label}</label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
    )
  }
  
  export default Input