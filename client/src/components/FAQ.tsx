import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I create a new job entry?",
      answer:
        "To create a new job entry, navigate to the 'New Job' tab in the application. Fill in the necessary details such as job title, description, and deadline, then click 'Submit'.",
    },
    {
      question: "How can I update the status of a job?",
      answer:
        "To update the status of a job, go to the 'Job List' tab. Click on the job you want to update, then select the new status from the dropdown menu.",
    },
    {
      question: "Can I assign a job to a team member?",
      answer:
        "Yes, you can assign a job to a team member. When creating or editing a job, you can select a team member from the 'Assigned to' dropdown menu.",
    },
    {
      question: "How can I reach to support?",
      answer:
        "If you need further assistance, please click on the 'Support' tab in the application. You can also reach us via email at support@jobtracker.com.",
    },
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-rich-black sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black dark:text-white lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-jet">
            Here are some common questions about our job tracking application.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 rounded-md shadow-lg cursor-pointer dark:bg-rich-black hover:bg-gray-50 dark:hover:bg-eerie-black "
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => handleClick(index)}
              >
                <span className="flex text-lg font-semibold text-black dark:text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 dark:text-white ${
                    activeIndex === index ? "" : "rotate-180"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeIndex === index && (
                <div className="px-4 pb-5 dark:text-jet sm:px-6 sm:pb-6">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
