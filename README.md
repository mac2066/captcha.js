# captcha.js
This is a Captcha for Node.js Applications.

## Requirements

- ImageMagick 6.9+
- Ghostscript 8+

#### Ubuntu

```
sudo apt-get install imagemagick ghostscript
```

#### Mac OS X

```bash
brew install imagemagick ghostscript
```

## Example
![1](https://raw.githubusercontent.com/monkeym4ster/captcha.js/master/example/assets/4g63.png)
![2](https://raw.githubusercontent.com/monkeym4ster/captcha.js/master/example/assets/9Y5P.png)
![3](https://raw.githubusercontent.com/monkeym4ster/captcha.js/master/example/assets/W8yu.png)
![4](https://raw.githubusercontent.com/monkeym4ster/captcha.js/master/example/assets/nIvW.png)
![5](https://raw.githubusercontent.com/monkeym4ster/captcha.js/master/example/assets/REVN.png)
![6](https://raw.githubusercontent.com/monkeym4ster/captcha.js/master/example/assets/uX3A.png)
![7](https://raw.githubusercontent.com/monkeym4ster/captcha.js/master/example/assets/7u5s.png)


## Usage

### Quick Example

```js
const Captcha = require('captcha.js');
const captcha = new Captcha({length: 5});

captcha.create((err, result) => {
  if(err) throw err;
  console.log(JSON.stringify(result, null, 2));
});
```


### [Example](https://github.com/monkeym4ster/captcha.js/tree/master/example)

## API

### Captcha.create(opt)

```js
opt = {
  length: 4,
  font_size: 45,
  implode: 0.4,
  colorful: true,
  line: true,
  cache_limit: 5,
  cache_dir: `/tmp/${pkg.name}`
}

```
### Captcha.randomColor(colorful)

### Captcha.randomChars()

### Captcha.randomLineTop()

