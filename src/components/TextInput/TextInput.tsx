import "./textinput.scss";
interface TextInputProps {
	value: string;
	onChange: (value: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({value, onChange}) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<textarea
			type="text"
			className={"input"}
			value={value}
			onChange={handleInputChange}
		/>
	);
};
