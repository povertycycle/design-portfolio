interface UnderlinedInputProps {
    placeholder?: string;
}

export const UnderlinedInput: React.FC<UnderlinedInputProps> = ({
    placeholder,
}) => {
    return (
        <input
            className="auth__input--default w-full max-w-lg"
            placeholder={placeholder}
        />
    );
};
