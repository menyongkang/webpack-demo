/**
 *
 * 集中管理webpack 配置
 *
 */

const path = require("path");
//导入自定义 JSON 模块 parser
const toml = require("../src/data/data.toml");
const yaml = require("../src/data/data.yaml");
const json5 = require("../src/data/data.json5");
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
		// 创建模块时，匹配请求的规则数组
		rules: [
			{
				// 处理css
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			// {
			//   test: /\.css$/,
			//   use: [
			//     // [style-loader](/loaders/style-loader)
			//     { loader: 'style-loader' },
			//     // [css-loader](/loaders/css-loader)
			//     {
			//       loader: 'css-loader',
			//       options: {
			//         modules: true
			//       }
			//     },
			//     // [sass-loader](/loaders/sass-loader)
			//     { loader: 'sass-loader' }
			//   ]
			// },
			{
				// 处理 images
				test: /\.(png|svg|jpg|jpeg|git)$/i,
				// 设置类型用于匹配模块。
				type: "asset/resource",
			},
			{
				// 处理字体
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				// 转化 csv tsv文件
				test: /\.(csv|tsv)$/i,
				use: ["csv-loader"],
			},
			{
				// 转化xml
				test: /\.xml$/i,
				use: ["xml-loader"],
			},
			{
				test: /\.toml$/i,
				type: "json",
				// 解析器, 解析选项对象。
				parser: {
					//它可能在没有特定加载器的时候,自定义的逻辑，以解析模块的源和并将它转换成 JavaScript 对象
					parse: toml.parse,
				},
			},
			{
				test: /\.yaml$/i,
				type: "json",
				parser: {
					parse: yaml.parse,
				},
			},
			{
				test: /\.json5$/i,
				type: "json",
				parser: {
					parse: json5.parse,
				},
			},
		],
	},
};
