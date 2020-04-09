const webpack = require('webpack');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		filename: './src/Modulos/app.js'
	},
	output: {
		filename: './src/Modulos/build.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ [ 'es2015', { modules: false } ] ]
				}
			}
		]
	}
	// optimization: {
	// 	minimizer: [
	// 		new UglifyJsPlugin({
	// 			sourceMap: true,
	// 			compress: {
	// 				warnings: false
	// 			},
	// 			output: { comments: false }
	// 		})
	// 	]
	// }
};
