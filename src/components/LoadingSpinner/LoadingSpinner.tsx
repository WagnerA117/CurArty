import "./loadingspinner.scss";

export interface LoadingSpinner {
	color?: string;
}

export const LoadingSpinner = () => {
	return (
		<div className="spinner-container">
			<div className="loading-spinner"></div>
		</div>
	);
};
