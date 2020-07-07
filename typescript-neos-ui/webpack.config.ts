import * as webpack from "webpack";
import path from "path";

const config: webpack.Configuration = {
	devtool: "source-map",
	mode: "development",
	entry: ["./src/index.tsx"],
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "main.js",
	},
	devServer: {
		contentBase: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: "ts-loader",
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName:
									"[name]__[local]___[hash:base64:5]",
							},
							importLoaders: 1,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							config: {
								path: path.join(
									__dirname,
									"node_modules",
									"@neos-project/build-essentials/src/postcss.config.js"
								),
							},
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
};

export default config;
