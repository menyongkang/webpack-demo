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
	// mode："development",
	//Loader
	module: {
		rules: [
			{
				// 处理css
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				// 处理 images
				test: /\.(png|svg|jpg|jpeg|git)$/i,
				type: "asset/resource",
			},
			{
				// 处理字体
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
};
