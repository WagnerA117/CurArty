import "./home.scss";
import {ImageCard, Button, LoadingSpinner} from "../../components";

import {useRandomArtWork} from "../../api";
import {useGalleryStore} from "../../services/gallery";

export const Home = () => {
	const {
		data: randomArtwork,
		refetch,
		isFetching,
		isLoading,
	} = useRandomArtWork();

	const {add} = useGalleryStore();

	const handleRefetch = () => {
		refetch();
	};

	if (isLoading || isFetching || !randomArtwork) {
		return (
			<div>
				<LoadingSpinner></LoadingSpinner>
			</div>
		);
	}

	const imageUrl = `https://www.artic.edu/iiif/2/${randomArtwork["image_id"]}/full/843,/0/default.jpg`;

	const learnMoreUrl = `https://www.artic.edu/artworks/${randomArtwork["id"]}`;

	return (
		<>
			<div>
				<ImageCard imgUrl={imageUrl}>
					<Button
						label="next!"
						variant="danger"
						onClick={handleRefetch}
					></Button>
					<a href={learnMoreUrl} target="_blank">
						<Button label="testButton2"></Button>
					</a>
					<Button label="testButton2" variant="sucess"></Button>
				</ImageCard>
			</div>
		</>
	);
};
