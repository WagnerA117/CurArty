import {LoadingSpinner} from "..";
import "./button.scss";

interface ButtonProps {
	variant?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "sucess"
		| "danger"
		| "card-button";

	primary?: boolean;

	backgroundColor?: string;

	size?: "small" | "medium" | "large";

	label: string;
	loading?: boolean;

	onClick?: () => void;
}

export const Button = ({
	backgroundColor,
	label,
	loading,
	primary = false,
	size = "medium",
	variant,
	...props
}: ButtonProps) => {
	const mode = primary ? "button--primary" : "button--secondary";

	return (
		<button
			type="button"
			className={["button", `button--${size}`, mode, variant].join(" ")}
			style={{backgroundColor}}
			{...props}
		>
			{loading ? <LoadingSpinner></LoadingSpinner> : label}
		</button>
	);
};
