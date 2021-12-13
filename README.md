# eslint-plugin-yykjlint

夜莺科技的订制lint

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-yykjlint`:

```sh
npm install eslint-plugin-yykjlint --save-dev
```

## Usage

Add `yykjlint` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "yykjlint"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "yykjlint/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


