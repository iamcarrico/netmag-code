## What is in here?

This is a code sample for the article written in net magazine on "Tools for Painless Sass Development". It is a fully function repo with all the config files needed to:

* Have your ruby version be managed by rbenv, RVM or chruby.
* Always utilize the correct gem versions with Bundler.
* Compile all your Sass files with Compass
* Use Gulp.js as a task manager, as well as a simple web server.
* Use BrowserSync within Gulp to automagically update the content of your files.

This is meant just as an example of some tools that can be used, and how to use them. Feel free to take some examples and use them on your own project.

## Installation

First off, read the guide in NetMag, which will go over the tools used in this demo code. After that, there are a few commands you will want to run from within the repo to make sure you have all the right tools here.

```bash
# Install all bundler gems
$ bundle install

# Install all node packages
$ npm install
```

## Using Gulp.js

Gulp.js is a wonderful frontend task manager. To display a sample site here, just run ```gulp server```. This will run a simple server locally that will watch all your files and make changes live in the browser. Go ahead, run that command, then make changes to this file. On save, you should see the changes appear in the browser.

There are also a few more commands available to you to test out and try.

```bash
# Compile all of your Sass files.
$ gulp sass

# Lint all of the JavaScript.
$ gulp lint

# Concatenate and minify the JavaScript.
$ gulp scripts
```

## BrowserSync

This is one of my favorite pieces of this Gulpfile. [BrowserSync](http://www.browsersync.io/) allows for injection of changes, similar to LiveReload, but also synchronised actions to occur on each device you are connected with. This means if you are looking at your instance on a phone, a tablet and your laptop, and you scroll using your laptop--- your phone and tablet will scroll with it. It is a major timesaver in frontend development.


## License

Copyright (c) 2014 Ian Carrico

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
