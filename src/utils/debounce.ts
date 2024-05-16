export const debounce = (onChange: (form: HTMLFormElement) => void) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget.form;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            onChange(form);
        }, 1000);
    };
};