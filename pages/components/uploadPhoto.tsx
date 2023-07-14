import { PickerOverlay, PickerOverlayProps } from "filestack-react";
import { useState } from "react";

export function UploadPhoto() {
	const [display, setDisplay] = useState(false);
	const displayButton = () => setDisplay(true);
	return (
		<>
			<button onClick={displayButton}>Abc</button>
			{display ? (
				<PickerOverlay
					apikey={"A1fRtRqdMQ2eueTZwM36Cz"}
					onUploadDone={(result) => {
						//@ts-ignore
						console.log(result.filesUploaded[0].url);
					}}
				/>
			) : (
				<></>
			)}
		</>
	);
}
