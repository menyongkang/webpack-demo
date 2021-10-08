/**
 *
 * 集中管理webpack 配置
 *
 */

const path = require("path");
// 生成index.html 文件，并根据入口文件建立新的引用关系
const HtmlWebpackPlugin = require("html-webpack-plugin");

//导入自定义 JSON 模块 parser
// const toml = require("../src/data/data5.toml");
// console.log("toml: ", toml);
// const yaml = require("../src/data/data3.yaml");
// console.log("yaml: ", yaml);
// const json5 = require("../src/data/data2.json5");
// console.log("json5: ", json5);
module.exports = {
	mode: "development",
	// 入口
	entry: {
		index: "./src/index.js",
		print: "./src/print.js",
	},
	// 出口
	output: {
		filename: "[name].bundle.js", //出口文件名称
		path: path.resolve(__dirname, "../dist"), // 出口文件地址
		clean: true, //每次构建前清理 /dist 文件夹
	},
	// 如何以其他方式来控制 webpack 输出，manifest,通过 WebpackManifestPlugin 插件，可以将 manifest 数据提取为一个 json 文件以供使用。
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
			// {
			// 	test: /\.toml$/i,
			// 	type: "json",
			// 	// 解析器, 解析选项对象。
			// 	parser: {
			// 		//它可能在没有特定加载器的时候,自定义的逻辑，以解析模块的源和并将它转换成 JavaScript 对象
			// 		parse: toml.parse,
			// 	},
			// },
			// {
			// 	test: /\.yaml$/i,
			// 	type: "json",
			// 	parser: {
			// 		parse: yaml.parse,
			// 	},
			// },
			// {
			// 	test: /\.json5$/i,
			// 	type: "json",
			// 	parser: {
			// 		parse: json5.parse,
			// 	},
			// },
		],
	},
	plugins: [
		// 重新根据入口生成引入文件
		new HtmlWebpackPlugin({
			title: "webpackDemo",
		}),
	],
	// 如何设置一个开发环境
	// 使用 source map 将编译后的代码映射回原始源代码。
	// https://webpack.docschina.org/configuration/devtool
	devtool: "inline-source-map",
};
