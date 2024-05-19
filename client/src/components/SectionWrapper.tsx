const SectionWrapper = ({ title, children }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-wide dark:text-jet">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default SectionWrapper;
