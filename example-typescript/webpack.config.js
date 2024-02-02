const path = require('path');

module.exports = {
    target: "web",
    
    entry: './src/index.ts',    
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
	resolve: {
		extensions: ['.ts', '.js'],
	},

	module: {
		rules: [
			{
				test: /\.ts$/i,
				use: ["ts-loader"],
                exclude: /node_modules/,
			},
		],
	},	
}    
