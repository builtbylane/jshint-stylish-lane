# jshint-stylish [![Build Status](https://secure.travis-ci.org/builtbylane/jshint-stylish-lane.png?branch=master)](http://travis-ci.org/builtbylane/jshint-stylish-lane)

> Stylish reporter for [JSHint](https://github.com/jshint/jshint)

![screenshot](screenshot.png)

Compared to the default reporter:

![default reporter](screenshot-default-formatter.png)


## Install

Install with [npm](https://npmjs.org/package/jshint-stylish): `npm install --save-dev jshint-stylish-lane`


## Getting started

Use it with:

#### JSHint CLI

```
jshint --reporter node_modules/jshint-stylish/stylish.js file.js
```

#### [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)

```js
grunt.initConfig({
	jshint: {
		options: {
			reporter: require('jshint-stylish')
		},
		target: ['file.js']
	}
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.registerTask('default', ['jshint']);
```


#
