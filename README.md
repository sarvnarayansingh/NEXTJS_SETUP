## eslint configuration

(1) npm install eslint -D

(2) npx eslint --fix

## (3) npx eslint --init

(i) How would you like to use ESLint? >> To check syntax, find problems, and enforce code style

(ii) What type of modules does your project use? >> JavaScript modules (import/export)

(iii) Which framework does your project use? >> react

(iv) Does your project use TypeScript? >> NO

(v) Where does your code run? >> (press a because, both select - browser and node )

(vi) How would you like to define a style for your project? >> Use a popular style guide

(vii) Which style guide do you want to follow? >> Standard: https://github.com/standard/standard

(viii) What format do you want your config file to be in? >> javascript

(ix) Would you like to install them now with npm? >>NO

(x) npm install >> (eslint-plugin-react eslint-config-standard eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard)

(xi) npm install eslint-plugin-prettier

(xii) npx eslint .

(xiii) npx eslint . --fix

## prettier

(1) npm install eslint-config-prettier -D

(2) npm install prettier -D

(3) create newfile >> .prettierrc and paste rule

(4) npx prettier . --check

(5) npx prettier . --write

## npx mrm lint-staged

(1) added in package json

"husky":{
"hooks":{
"pre-commit":"lint-staged"
}
},

"lint-staged": {
"_.js": "eslint --cache --fix",
"_.{js,css,md}": "prettier --write"
}
