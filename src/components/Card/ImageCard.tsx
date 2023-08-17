import "./imagecard.scss";
import {Button} from "../Button/Button";

interface ImageCardProps {
	description?: string;
	imgUrl?: string;
}

const defaultUrl =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/540px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg";

export const ImageCard = ({
	description,
	imgUrl = defaultUrl,
}: ImageCardProps) => {
	return (
		<div className="card-container">
			<img src={imgUrl} />

			<div className="card-content">
				<p>{description}</p>
			</div>

			<div className="button-container">
				<Button label="Remove" variant="danger" />
				<Button label="Edit Description" variant="card-button" />
			</div>
		</div>
	);
};
