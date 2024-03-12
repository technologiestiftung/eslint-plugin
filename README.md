![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# @Technologiestiftung/eslint-plugin

This is a sharable eslint plugin for the @technologiestiftung organization. Should be the basis for JS and TS. Still WIP. Currently we only have one rule that we stole from the [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/src/rules/no-default-export.js).

> [!IMPORTANT]
> We only support flat config!

Features:

- no default exports

## Prerequisites

- Node.js
- eslint

## Installation

```bash
npm i @technologiestiftung/eslint-plugin --save-dev
```

## Usage

In your `eslint.config.js` file, add the following:

```javascript
import { plugin as technologiestiftungPlugin } from "@technologiestiftung/eslint-plugin";

export default [
	{
		files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
		rules: {
			"@technologiestiftung/no-default-export": "error",
		},
		plugins: { "@technologiestiftung": technologiestiftungPlugin },
	},
];
```

## Development

tbd...

## Tests

TODO:

see https://eslint.org/docs/latest/integrate/nodejs-api#ruletester

## Contributing

Before you create a pull request, write an issue so we can discuss your changes.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Credits

<table>
  <tr>
    <td>
      Made by <a href="https://citylab-berlin.org/de/start/">
        <br />
        <br />
        <img width="200" src="https://logos.citylab-berlin.org/logo-citylab-berlin.svg" />
      </a>
    </td>
    <td>
      A project by <a href="https://www.technologiestiftung-berlin.de/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-de.svg" />
      </a>
    </td>
    <td>
      Supported by <a href="https://www.berlin.de/rbmskzl/">
        <br />
        <br />
        <img width="80" src="https://logos.citylab-berlin.org/logo-berlin-senatskanzelei-de.svg" />
      </a>
    </td>
  </tr>
</table>

## Related Projects

- [@technologiestiftung/eslint-config](https://github.com/technologiestiftung/eslint-config)
- https://github.com/import-js/eslint-plugin-import/blob/main/src/rules/no-default-export.js
