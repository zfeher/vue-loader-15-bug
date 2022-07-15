# Vue Loader 15.10.0 bug

## To reproduce the issue

```Bash
# clone the repo
npm install
npm run webpack

# check the output: it has the content of the whole vue file not just the content of <template>

# to see previous version
npm remove vue-loader
npm install -D vue-loader@15.9.0
npm run webpack

# check the output: it has only the content of the <template> tag as expected.
```
