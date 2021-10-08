import _ from "lodash";
import "./styles/index.css";
import "../src/assets/iconfont/iconfont.css";
import WebpackImages from "./assets/images/webpack.png";
import DataXml from "../src/data/data.xml";
import Notes from "../src/data/data.csv";
import toml from "../scr/data/data.toml";
import yaml from "../scr/data/data.yaml";
import json from "../scr/data/data.json5";

console.log("toml: ", toml.title);
console.log("toml: ", toml.owner.name);

console.log("yaml: ", yaml.title);
console.log("yaml: ", yaml.owner.name);

console.log("json: ", json.title);
console.log("json: ", json.owner.name);

function component() {
	const element = document.createElement("div");
	element.innerHTML = _.join(["Hello", "webpack"], "");
	element.classList.add("hello");

	const images = new Image();
	images.src = WebpackImages;
	element.appendChild(images);

	console.log(DataXml);
	console.log(Notes);

	return element;
}

document.body.appendChild(component());
