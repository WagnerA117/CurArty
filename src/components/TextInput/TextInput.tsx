import "./textinput.scss";
interface TextInputProps {
	value?: string;
	onChange?: React.ChangeEvent<HTMLTextAreaElement>;
}

export const TextInput: React.FC<TextInputProps> = ({onChange}) => {
	return (
		<textarea style={{width: "100%", height: "100%"}} onChange={onChange} />
	);
};
