import {useMemo} from "react";
import "./imagecard.scss";
import {LoadingSpinner} from "..";

//create types folder

export type RandomArtworkType = {
	id: number;
};

interface ImageCardProps {
	buttonLabels?: string[];
	children?: React.ReactNode;
	description?: string;
	imgUrl?: string;
	loading?: boolean;
	isRefetching?: boolean;
	remove?: () => void;
}

//const defaultUrl =
//	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/540px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg";

export const ImageCard = ({imgUrl, isRefetching, children}: ImageCardProps) => {
	const buttonMemo = useMemo(() => {
		let buttons: React.ReactElement[] = [];

		if (!Array.isArray(children)) {
			if (!children) return [];
			return [children as React.ReactElement];
		}

		children.map((item) => {
			if (!item) return;
			if (typeof item === "boolean") return undefined;
			if (Array.isArray(item)) {
				buttons = [...buttons, ...item];
			} else {
				buttons = [...buttons, item];
			}
		});

		buttons.filter((item) => !!item);

		return buttons;
	}, [children]);

	return (
		<div className="card-container">
			<div className="image-container">
				{isRefetching ? (
					<LoadingSpinner></LoadingSpinner>
				) : (
					<img src={imgUrl} />
				)}
			</div>

			<div className="button-container">
				{buttonMemo.map((button) => button)}
			</div>
		</div>
	);
};
