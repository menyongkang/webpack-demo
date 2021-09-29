import _ from "lodash";
import "./styles/index.css";
import WebpackImages from "./assets/images/webpack.png";

function component() {
	const element = document.createElement("div");
	element.innerHTML = _.join(["Hello", "webpack"], "");
	element.classList.add("hello");

	const images = new Image();
	images.src = WebpackImages;
	element.appendChild(images);

	return element;
}

document.body.appendChild(component());
