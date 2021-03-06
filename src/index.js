import _ from "lodash";
import "./styles/index.css";
import "../src/assets/iconfont/iconfont.css";
import WebpackImages from "./assets/images/webpack.png";
import DataXml from "../src/data/data4.xml";
import Notes from "../src/data/data1.csv";
// import toml from "../scr/data/data5.toml";
// import yaml from "../scr/data/data3.yaml";
// import json from "../scr/data/data2.json5";

// console.log("toml: ", toml.title);
// console.log("toml: ", toml.owner.name);

// console.log("yaml: ", yaml.title);
// console.log("yaml: ", yaml.owner.name);

// console.log("json: ", json.title);
// console.log("json: ", json.owner.name);

import printMe from "./print.js";

function component() {
	const element = document.createElement("div");
	const btn = document.createElement("button");
	element.innerHTML = _.join(["Hello", "webpack"], "");

	element.classList.add("hello");

	btn.innerHTML = "Click me and check the console!";
	btn.onclick = printMe;

	const images = new Image();
	images.src = WebpackImages;

	element.appendChild(btn);

	console.log(DataXml);
	console.log(Notes);

	return element;
}

document.body.appendChild(component());
