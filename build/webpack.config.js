/**
 *
 * 集中管理webpack 配置
 *
 */

const path = require("path");

module.exports = {
	// 入口
	entry: "./src/index.js",
	// 出口
	output: {
		filename: "main.js", //出口文件名称
		path: path.resolve(__dirname, "../dist"), // 出口文件地址
	},
	//Loader
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
