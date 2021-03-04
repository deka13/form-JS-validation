lint:
	npx stylelint ./src/styles/*.css
	npx eslint .
	npx htmlhint ./src/*.html