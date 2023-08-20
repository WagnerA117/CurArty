import "./home.scss";
import {ImageCard, Button} from "../../components";

import {useRandomArtWork} from "../../api";
import {useGalleryStore} from "../../services/galleryStore";

export const Home = () => {
	const {
		data: randomArtwork,
		refetch,
		isRefetching,
		isLoading,
	} = useRandomArtWork();

	const {add} = useGalleryStore();

	const handleAdd = () => {
		const artwork = {...randomArtwork, description: ""};

		add(artwork);
		refetch();
	};

	const handleRefetch = () => {
		refetch();
	};
	console.log(isRefetching);

	if (isLoading || isRefetching || !randomArtwork) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ImageCard loading={isLoading} isRefetching={isRefetching}>
					<Button label="Next " variant="danger" />

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
						loading={isLoading}
						onClick={handleRefetch}
					/>

					<a href={learnMoreUrl} target="_blank">
						<Button label="Learn More" />
					</a>

					<Button label="Save" variant="sucess" onClick={handleAdd} />
				</ImageCard>
			</div>
		</>
	);
};
