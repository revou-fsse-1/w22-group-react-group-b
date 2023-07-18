import { PickerOverlay, PickerOverlayProps } from "filestack-react";
import { useState } from "react";

interface FileUploaded {
	filename: string;
	url: string;
}

interface PickerOverlayType {
	filesFailed: [];
	filesUploaded: FileUploaded[];
}

export function UploadPhoto() {
	const [display, setDisplay] = useState(false);
	const displayButton = () => setDisplay(true);
	return (
		<>
			<button onClick={displayButton}>Abc</button>
			{display ? (
				<PickerOverlay
					apikey={"A1fRtRqdMQ2eueTZwM36Cz"}
					//@ts-ignore
					onUploadDone={(result: PickerOverlayType) => {
						console.log(result.filesUploaded[0].url);
					}}
				/>
			) : (
				<></>
			)}
		</>
	);
}
