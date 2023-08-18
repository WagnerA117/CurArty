import "./gallery.scss";
import {ImageCard} from "../../components/ImageCard/ImageCard";
import {useGalleryStore} from "../../services/galleryStore";
import {Button} from "../../components";

export const Gallery = () => {
	const {images, remove} = useGalleryStore();

	console.log(remove);
	console.log(images);
	console.log(images);
	const handleRemove = (id: number) => {
		remove(id);
	};

	return (
		<div className="image-grid">
			{images.map((item) => {
				return (
					<ImageCard
						imgUrl={`https://www.artic.edu/iiif/2/${item["image_id"]}/full/843,/0/default.jpg`}
					>
						<Button
							label="Remove"
							variant="danger"
							onClick={() => handleRemove(item?.id)}
						></Button>

						<a
							href={`https://www.artic.edu/artworks/${item["id"]}`}
							target="_blank"
						>
							<Button label="Learn More"></Button>
						</a>
					</ImageCard>
				);
			})}
		</div>
	);
};
