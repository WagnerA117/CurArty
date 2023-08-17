import {ImageCard} from "../../components/ImageCard/ImageCard";
import {useGalleryStore} from "../../services/gallery";

export const Gallery = () => {
	const {images} = useGalleryStore();

	console.log(images);
	return (
		<div style={{display: "flex", justifyContent: "center"}}>
			<ImageCard buttonLabels={["Remove", "Edit"]} />
		</div>
	);
};
