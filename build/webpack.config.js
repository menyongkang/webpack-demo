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
		],
	},
};
