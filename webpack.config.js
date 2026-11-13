const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const WebpackObfuscator = require( 'webpack-obfuscator' );

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	...defaultConfig,
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules.map( ( rule ) => {
				// Target the default style loader rules injected by wp-scripts
				if ( rule.use && Array.isArray( rule.use ) ) {
					return {
						...rule,
						use: rule.use.filter( ( loaderEntry ) => {
							const loaderName = typeof loaderEntry === 'string' ? loaderEntry : loaderEntry.loader;
							// Prevent sass-loader from touching our vanilla .css and .module.css files
							return !loaderName.includes( 'sass-loader' );
						} ),
					};
				}
				return rule;
			} ),
		],
	},
	plugins: [
		...defaultConfig.plugins,
		...( isProduction
			? [
					new WebpackObfuscator(
						{
							rotateStringArray: true,
							stringArray: true,
							stringArrayThreshold: 0.75,
							reservedStrings: [ 'wp', 'wp-blocks', 'wp-element' ], 
							compact: true,
							controlFlowFlattening: false,
							deadCodeInjection: false,
						},
						// Exclude chunks/styles to keep the obfuscator from disrupting asset manifests
						[ 'chunks/**', '*.css' ]
					),
			  ]
			: [] ),
	],
};
