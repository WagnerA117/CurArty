import "./loadingspinner.scss";

export interface LoadingSpinner {
	color?: string;
}

export const LoadingSpinner = () => {
	return <div className="loading-spinner"></div>;
};
