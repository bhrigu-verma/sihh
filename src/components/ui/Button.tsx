
interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className = '' }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 rounded ${className}`}
      >
        {children}
      </button>
    )
  }
  
  export default Button