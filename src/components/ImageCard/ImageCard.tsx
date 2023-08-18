import {useMemo} from "react";
import "./imagecard.scss";

//create types folder

export type RandomArtworkType = {
	id: number;
};

interface ImageCardProps {
	description?: string;
	imgUrl?: string;
	remove?: () => void;
	buttonLabels?: string[];
	children?: React.ReactNode;
	loading?: boolean;
}

const defaultUrl =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/540px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg";

export const ImageCard = ({
	description,
	imgUrl = defaultUrl,
	children,
}: ImageCardProps) => {
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
			<img src={imgUrl} />

			<div className="button-container">
				{buttonMemo.map((button) => button)}
			</div>
		</div>
	);
};
