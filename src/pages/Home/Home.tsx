import "./home.scss";
import {ImageCard, Button, LoadingSpinner} from "../../components";

import {useRandomArtWork} from "../../api";
import {useGalleryStore} from "../../services/galleryStore";

export const Home = () => {
	const {
		data: randomArtwork,
		refetch,
		isFetching,
		isLoading,
	} = useRandomArtWork();

	const {add} = useGalleryStore();

	const handleAdd = () => {
		add(randomArtwork);
		refetch();
	};

	const handleRefetch = () => {
		refetch();
	};

	if (isLoading || isFetching || !randomArtwork) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ImageCard>
					<LoadingSpinner></LoadingSpinner>

					<Button label="Learn More"></Button>

					<Button label="Save" variant="sucess"></Button>
				</ImageCard>
			</div>
		);
	}

	const imageUrl = `https://www.artic.edu/iiif/2/${randomArtwork["image_id"]}/full/843,/0/default.jpg`;

	const learnMoreUrl = `https://www.artic.edu/artworks/${randomArtwork["id"]}`;

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ImageCard imgUrl={imageUrl}>
					<Button
						label="Next "
						variant="danger"
						onClick={handleRefetch}
					></Button>
					<a href={learnMoreUrl} target="_blank">
						<Button label="Learn More"></Button>
					</a>
					<Button label="Save" variant="sucess" onClick={handleAdd}></Button>
				</ImageCard>
			</div>
		</>
	);
};
