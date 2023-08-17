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

	onClick?: () => void;
}

export const Button = ({
	variant,
	primary = false,
	size = "medium",
	backgroundColor,
	label,
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
			{label}
		</button>
	);
};
