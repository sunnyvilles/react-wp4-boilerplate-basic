const path = require('path');
const htmlWP = require('html-webpack-plugin');

module.exports = {
	entry:'./src',
	output: {
		path: path.join(__dirname + '/dist'),
		filename : 'bundle.js'
	},
	//loaders go inside modules obj rules array , which is an array of objects
	//objects take test key which are regex
	module:{
		rules:[
			{
				test:/\.js$/, //looks at jsx also
				exclude: /node_modules/,
				use:{
					loader: 'babel-loader'
				}
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                use:["style-loader","css-loader"]
            }
		]
	},
	plugins:[
		new htmlWP({
			template:'./src/index.html'
		})
	]
}