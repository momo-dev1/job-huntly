const FormWrapper = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center bg-gray-200 dark:bg-eerie-black/95">
      <div className="z-20 flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
