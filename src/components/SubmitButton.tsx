interface IProps {
  name: string;
  isInvalid?: boolean;
  isSubmitting?: boolean;
}
const Button = ({ name, isInvalid = false, isSubmitting }: IProps) => {
  return (
    <div>
      <button
        disabled={isInvalid || isSubmitting}
        type="submit"
        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white duration-200 bg-blue-500 border border-transparent rounded-md shadow-sm bg-blue-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
