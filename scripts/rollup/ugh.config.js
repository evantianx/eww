import generatePackageJSON from 'rollup-plugin-generate-package-json';
import {
	getCommonRollupPlugins,
	getPackageJSON,
	resolvePkgPath
} from './utils';

const { name, module } = getPackageJSON('ugh');
const pkgPath = resolvePkgPath(name);
const pkgDistPath = resolvePkgPath(name, true);

export default [
	// react bundle
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${pkgDistPath}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: [
			...getCommonRollupPlugins(),
			generatePackageJSON({
				inputFolder: pkgPath,
				outputFolder: pkgDistPath,
				baseContents: ({ name, description, version }) => ({
					name,
					description,
					version,
					main: 'index.js'
				})
			})
		]
	},

	// jsx
	{
		input: `${pkgPath}/src/jsx.ts`,
		output: [
			//jsx-runtime
			{
				file: `${pkgDistPath}/jsx-runtime.js`,
				name: 'jsx-runtime.js',
				format: 'umd'
			},

			{
				file: `${pkgDistPath}/jsx-dev-runtime.js`,
				name: 'jsx-runtime.js',
				format: 'umd'
			}
		],
		plugins: getCommonRollupPlugins()
	}
];
