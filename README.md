# my-ref-front

> my ref project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## Compoenets

#### index

> props: -
>
> methods: -

#### mainContent

> props: -
>
> methods: createIngredient

#### ingredientElement

> props: name, amount, expiaryDate
>
> methods: edit, editConfirm, delete

#### sidebar

> props: - 
>
> methods: - 

#### userInfo

> props: userName
>
> methods: refreshRequest

#### recommendedReciept

> props: receiptList(json)
>
> methods: requestReceiptList

#### receiptElement

> props: name, ingredient, receipt
>
> methods: openReceiptModal

#### receiptModal

> props: name, ingredient, receipt
>
> methods: closeReceiptModal