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
			step: string[];
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
			<button
				onClick={displayButton}
				className="cursor-pointer "
				style={{
					color: "#181823",
					backgroundColor: "#F5F5F5",
					display: "block",
					padding: "8px",
					border: "3px solid black",
					boxShadow: "5px -5px 0 0px black",
					position: "relative",
					top: "0",
					left: "0",
					transition: "box-shadow 1s, left 1s, top 1s",
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.boxShadow = "0 0 0 -3px white";
					e.currentTarget.style.top = "-10px";
					e.currentTarget.style.left = "10px";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.boxShadow = "5px -5px 0 0px black";
					e.currentTarget.style.top = "0";
					e.currentTarget.style.left = "0";
				}}
			>
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
