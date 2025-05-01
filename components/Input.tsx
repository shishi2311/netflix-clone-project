

interface InputProps {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  label,
  value,
  type = "text", 
}) => {
  return (
    <div className="relative w-80">
      
      <input 
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        className="
          peer
          block
          w-full
          rounded-md
          px-6
          pt-4
          pb-1
          text-md
          text-white
          bg-neutral-700
          appearance-none
          focus:outline-none
          focus:ring-0
        "
        placeholder=" "
      />

     
      <label 
        htmlFor={id}
        className="
          absolute
          text-md
          text-zinc-400
          duration-300
          transform
          scale-75 
          -translate-y-3
          top-4
          left-6
          z-10
          origin-left
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
        "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
