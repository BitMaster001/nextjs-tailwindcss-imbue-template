export const FormContainer = ({ className, children }) => {
  return (
    <div className={`${className} p-6`}>
      {children}
    </div>
  );
};

const Form = ({ children }) => {
  return (
    <div className="grid grid-flow-row grid-rows-1 grid-cols-2 rounded-[20px] overflow-hidden w-[80%] max-w-[1000px] mx-auto">
      {children}
    </div>
  );
};

export default Form;