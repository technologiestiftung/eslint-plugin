import eslintPluginRecommended from "eslint-plugin-eslint-plugin/configs/recommended";

import { plugin as technologiestiftungPlugin } from "./index.js";
// eslint-disable-next-line @technologiestiftung/no-default-export
export default [
	eslintPluginRecommended,
	{
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
		rules: {
			"@technologiestiftung/no-default-export": "error",
		},
		plugins: { "@technologiestiftung": technologiestiftungPlugin },
	},
];
