import { PickerOverlay, PickerOverlayProps } from "filestack-react";
import { Dispatch, SetStateAction, useState } from "react";

interface FileUploaded {
	filename: string;
	url: string;
}

interface PickerOverlayType {
	filesFailed: [];
	filesUploaded: FileUploaded[];
}

export default function UploadPhoto({
	setRecipe,
}: {
	setRecipe: Dispatch<
		SetStateAction<{
			name: string;
			category: string;
			url: string;
			ingredients: string[];
			steps: string[];
		}>
	>;
}) {
	const [display, setDisplay] = useState(false);
	const displayButton = (e: React.SyntheticEvent) => {
		e.preventDefault();
		setDisplay(true);
	};
	return (
		<>
			<button onClick={displayButton} className="bg-white">
				Upload Photo
			</button>
			{display ? (
				<PickerOverlay
					apikey={"A1fRtRqdMQ2eueTZwM36Cz"}
					pickerOptions={{
						onClose: () => {
							setDisplay(false);
						},
					}}
					//@ts-ignore
					onUploadDone={(result: PickerOverlayType) => {
						setRecipe((prevRecipe) => ({
							...prevRecipe,
							url: result.filesUploaded[0].url,
						}));
					}}
				/>
			) : (
				<></>
			)}
		</>
	);
}
