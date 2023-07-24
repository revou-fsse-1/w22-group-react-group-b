const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const rootDir = "./pages"; // Change this to your project's root directory

function checkAnyTypes(filePath) {
	const fileContent = fs.readFileSync(filePath, "utf8");

	const sourceFile = ts.createSourceFile(
		filePath,
		fileContent,
		ts.ScriptTarget.Latest,
		/*setParentNodes */ true
	);

	let anyTypeFound = false;

	function checkNode(node) {
		if (node.kind === ts.SyntaxKind.AnyKeyword) {
			anyTypeFound = true;
		}

		ts.forEachChild(node, checkNode);
	}

	checkNode(sourceFile);

	return anyTypeFound;
}

function traverseDirectory(dir) {
	const files = fs.readdirSync(dir);

	files.forEach((file) => {
		const filePath = path.join(dir, file);
		const stats = fs.statSync(filePath);

		if (stats.isDirectory()) {
			traverseDirectory(filePath);
		} else if (stats.isFile() && filePath.endsWith(".ts")) {
			if (checkAnyTypes(filePath)) {
				console.log(`"any" type found in: ${filePath}`);
			}
		}
	});
}

traverseDirectory(rootDir);
