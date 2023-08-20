import "./gallery.scss";
import React, {useState} from "react";
import {ImageCard, Button, TextInput} from "../../components";
import {useGalleryStore} from "../../services/galleryStore";

import Modal from "react-modal";

export const Gallery = () => {
	const {images, remove, updateDescription} = useGalleryStore();

	const [toggleModal, setToggleModal] = useState(false);
	const [text, setText] = useState("");
	const [id, setId] = useState(0);

	const handleRemove = (id: number) => {
		remove(id);
	};

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	console.log(images);
	console.log(id);

	const handleToggle = () => {
		setToggleModal(!toggleModal);
	};

	if (images.length === 0) {
		return (
			<div className="gallery-container">
				<h1>Gallery is empty! Check and Add images</h1>
			</div>
		);
	}

	return (
		<div className="gallery-container">
			<Modal
				isOpen={toggleModal}
				style={{
					overlay: {
						backgroundColor: "rgba(0,0,0,0.5",
					},
					content: {
						top: "50%",
						left: "50%",
						right: "auto",
						bottom: "auto",
						marginRight: "-50%",
						transform: "translate(-50%, -50%)",
						backgroundColor: "rgba(245, 245, 245, 1)",
						width: 400,
					},
				}}
			>
				<div>
					<TextInput onChange={handleTextChange} />
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
					}}
				>
					<Button
						label="Close"
						variant="danger"
						onClick={() => {
							handleToggle();
							setText("");
						}}
					></Button>
					<Button
						label="Add Note"
						variant="sucess"
						onClick={() => {
							updateDescription(id, text);
							handleToggle();
							setText("");
						}}
					></Button>
				</div>
			</Modal>

			<div className="image-grid">
				{images.map((item) => {
					return (
						<>
							<ImageCard
								imgUrl={`https://www.artic.edu/iiif/2/${item["image_id"]}/full/843,/0/default.jpg`}
							>
								<Button
									label="Add Note"
									variant="primary"
									onClick={() => {
										setId(item?.id);
										setToggleModal(!toggleModal);
									}}
								></Button>
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
						</>
					);
				})}
			</div>
		</div>
	);
};
