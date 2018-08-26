# unique-token
Generate unique token or a random character string


## Generate a token
```sh
npm i --save unique-token

const uniqueToken = require('unique-token');

const token = uniqueToken.token();
```

## Generate a random string
```sh
npm i --save unique-token

const uniqueToken = require('unique-token');

const randString = uniqueToken.random();

# String length can be passed is an options parameter [default value is 6]
```


## Generate a random alphabet string
```sh
npm i --save unique-token

const uniqueToken = require('unique-token');

const options = {
    type:uniqueToken.ALPHABET
}
const randString = uniqueToken.random(options);
```

## Generate a random numeric string
```sh
npm i --save unique-token

const uniqueToken = require('unique-token');

const options = {
    type:uniqueToken.NUMERIC
}
const randString = uniqueToken.random(options);
```