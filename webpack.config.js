const webpack = require('webpack')
const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
	devtool: 'source-map',
	entry: {
		app: './src/index.tsx'
	},
	output: {
		filename: 'app.js',
		publicPath: 'dist',
		path: path.resolve('dist')
	},
	devServer: {
		port: 9000,
		historyApiFallback: true,
		inline: true,
		stats: {
			modules: false,
			chunks: false,
			children: false,
			chunkModules: false,
			hash: false,
		},
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		modules: ['src', 'node_modules'],
	},
	module: {
		rules: [
			{ test: /\.css/i, use: 'style-loader!css-loader!postcss-loade' }, {
				test: /\.less$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "postcss-loader"
				}, {
					loader: "less-loader"
				}]
			},
			{ test: /\.tsx?$/, use: ['babel-loader', 'ts-loader'], include: path.resolve('src') }
		]
	},
	plugins: [
		new WebpackNotifierPlugin(),
		// new webpack.LoaderOptionsPlugin({
		// 	options: {
		// 		postcss: [require('autoprefixer')({ browsers: ['last 5 versions'] })]
		// 	}
		// }),
	]
}
