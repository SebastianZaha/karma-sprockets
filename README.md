karma-sprockets
===============

This is a plugin for sprockets based web applications. Notably, it tightens the integration
between karma and rails applications. (Because they use sprockets bundles by default).

Adds a couple of configuration options to help with loading js files defined in sprockets bundles
(via require directives). This is now the default way to structure client side code in Rails
applications.

You know... the files that look like this:

    //= require lib/jquery.js
    //= require app/my_notes_app.js

This plugin uses the [sprockets-chain](https://github.com/lucaong/sprockets-chain) node module.


Usage
-----

Add the plugin to the config file first, like so:

        plugins: [
            'karma-qunit',
            [...]
            'karma-sprockets'
        ],


Then customize the following 2 configuration options in your karma.conf.js file:

        sprocketsPath: [
            'app/assets/javascripts'
        ],
        sprocketsBundles: [
            'core.js',
            'foundation.js',
            'application.js'
        ]

The files referenced in those bundles will automatically be included in the `files` karma loads.


Development & debugging of karma plugins
----------------------------------------

    npm install -g ~/devel/karma-sprockets

#### Debugging with node-inspector

    node --debug-brk /usr/local/bin/karma start test/js/karma.conf.js --single-run
    node-inspector &

Visit http://127.0.0.1:8080/debug?port=5858 to start debugging.

#### Release

* install locally & test `npm install -g ~/devel/karma-sprockets`
* bump version & commit & push
* `npm publish`

License
-------

Copyright (c) 2014 Sebastian Zaha

MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
