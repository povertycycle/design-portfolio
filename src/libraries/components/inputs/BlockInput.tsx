import { ChangeEvent, InputHTMLAttributes, useContext, useId } from "react";

type BlockInputProps = {
    value?: string | null;
    children?: React.ReactNode;
    prefix?: string;
    onChange?: (value: string) => void;
    error?: string | null;
};

export const BlockInput: React.FC<
    Omit<InputHTMLAttributes<HTMLInputElement>, keyof BlockInputProps> &
        BlockInputProps
> = (props) => {
    const {
        value,
        children,
        onChange,
        prefix,
        error,
        className,
        style,
        ...restProps
    } = props;
    const id = useId();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={`w-full flex relative font-fjalla`}>
            <div
                style={{
                    ...style,
                }}
                className="text-white-1 border border-white-4 focus-within:outline-white-1 peer flex gap-1 px-2.5 w-full text-lg focus-within:outline-2 rounded-sm h-8"
            >
                {!!prefix && (
                    <span className="my-auto opacity-80">{prefix}</span>
                )}
                <input
                    id={id}
                    type="text"
                    placeholder={props.placeholder}
                    data-dark={true}
                    spellCheck={false}
                    style={{
                        ...style,
                    }}
                    className={`w-full focus:outline-none peer placeholder:text-white-1/60 transition-colors placeholder-theme placeholder:opacity-75 ${className}`}
                    {...restProps}
                />
            </div>
            {!!error && (
                <div className="border border-black font-bold bg-white text-red-0 rounded-full w-6 h-6 flex items-center justify-center absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
                    !
                </div>
            )}
            <label
                data-error={!!error}
                htmlFor={id}
                className="font-fjalla bg-black-1 border border-white-4 peer-focus-within:outline-white-1 px-2 peer-focus-within:outline-2 absolute top-0 right-2 -translate-y-1/2 rounded-sm"
            >
                <span>{props.children}</span>
                {!!error && (
                    <span className="pl-1 whitespace-nowrap">{error}</span>
                )}
            </label>
        </div>
    );
};
