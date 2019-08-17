import * as webpack from "webpack";
import { clone } from "ramda";
import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";

const common: webpack.Configuration = {
	devtool: 'source-map',
	node: { __dirname: false, __filename: false },
	output: {
		path: __dirname + '/dist',
		publicPath: './'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader'
				}
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'],
		alias: {
			'@@app': path.resolve(__dirname, 'src/')
		}
	}
};

const app: webpack.Configuration = clone(common);
app.entry = './src/app/main.ts';
app.target = 'electron-main';
(app.output as webpack.Output).filename = 'main.bundle.js';

const index: webpack.Configuration = clone(common);
index.entry = './src/index.ts';
index.target = 'electron-renderer';
(index.output as webpack.Output).filename = 'index.bundle.js';
index.plugins = [
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, './src/app/index.html'),
		inject: false
	})
];

export default [app, index];