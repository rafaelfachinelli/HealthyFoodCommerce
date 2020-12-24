import { InputHTMLAttributes } from 'react';

import '../styles/components/input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  placeholder: string;
  pattern?: string;
  title?: string;
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, pattern, title, ...rest }) => {
  return(
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      pattern={pattern}
      title={title}
      {...rest}
    />
  );
}

export default Input;