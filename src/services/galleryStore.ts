import {create} from "zustand";

export type RandomArtwork = {
	id: number;
	image_id: string;
	description?: string;
};

interface GalleryState {
	images: RandomArtwork[];
}

interface GalleryActions {
	add: (newImage: RandomArtwork) => void;
	remove: (imageId: number) => void;
}

export const useGalleryStore = create<GalleryState & GalleryActions>((set) => {
	const storage = localStorage.getItem("galleryStore");
	let gallery: Partial<GalleryState> | undefined;
	if (storage !== null) {
		gallery = JSON.parse(storage) as Partial<GalleryState>;
	}

	return {
		images: gallery?.images ?? [],

		add: (newImage: RandomArtwork) => {
			set(({images}) => {
				return {
					images: [...images, newImage],
				};
			});
		},
		remove: (imageId: number) => {
			set(({images}) => {
				return {
					images: images.filter((image) => image.id !== imageId),
				};
			});
		},
	};
});

useGalleryStore.subscribe((state) => {
	localStorage.setItem("galleryStore", JSON.stringify(state));
});

/* const Foo = () => {
	const {add, remove, images} = useGalleryStore()

	useGalleryStore

	return (
		// <div>
	)
} */

//export function remove(imageId: number) {
//	useGalleryStore.setState(({images}) => {
//		return {
//			images: images.filter((image) => image.id !== imageId),
//		};
//	});
//}
