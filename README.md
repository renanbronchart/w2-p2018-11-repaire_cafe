# Project Repaire Café

This is a school project. We are students of school named 'Hetic'.

Our project is to renew the current site

## Getting Started

These instructions will be used to install and start the project.

### Installing and test

Simply run the following commands into the project directory:
```sh
$ npm install
$ npm install webpack-dev-server -g # you might need "sudo" before that if you get an error
$ npm run dev
```
Your site should now be running at http://localhost:8080


## Guidlines.

These instructions will be used to know the guidelines of the project.

### Instructions of text editor to have Beautiful Code

• Indent spaces => 2 ; NO Tabs space Because are so different between text editor.

• Rulers(Numbers of characteres) => 100 ; For not having files with too long lines on github for review.

• ensure newline at eof on save ; It's a good practise on github.


### Instructions to have a coherent code.

• Always follow this convention with the preprocessor SCSS :

example:
```
footer {
  width: 100%;
  height: auto;
  margin: 20px 0 0 0;
  padding: 20px;
  position: absolute;
  top: ......
  display: .....
  ...
  ...
  ...
  animation: translateX(20px);
  @include medium {

  }
}
```

• Use BEM namming
