## Команда
- Саша Смирнова - вёрстка
- Алексей Камынин - бэк
- Мариша - дизайн
- Настя Санитарова - менеджер

# Настройки для скачивания с nas

В файле `~/.ssh/config`:

```
host nas
  hostname 192.168.10.156
  user USERNAME
```

В консоли:
```
ssh-copy-id nas
ssh nas
```

На насе:
```
chmod 755 $(pwd)
chmod 700 .ssh
chmod 600 .ssh/authorized_keys
```

# Ссылки
- https://woocommerce.github.io/woocommerce-rest-api-docs/
- https://co-cart.github.io/co-cart-docs/


# Пароль для стэйджа

```txt
address: https://zielinski.beta.agency/wp-admin
login: bubujka
password: &YhgILq9PI^&enG3hsJIJ!IS
```


# При новом деплое, чтобы настроить апи

```sh
wp user create bubujka kamynin@betaagency.ru --role=administrator
mysql zielensky -e "INSERT INTO wp_woocommerce_api_keys VALUES (2,5,'bubujka','read_write','cea5f3501ddf1a6eb011ba5031a0595ed9ac0a26ddd9d540630509817f50556b','cs_22ac6cf370ab6ef4e8d45d18d8d50d08b0fe4186',NULL,'577be95','2019-06-17 17:37:43');"
```


# **!ATTENTION: READ CAREFULLY!**
* **Don't use property type `Array` in typescript components, it will ruin your day**
```
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ExampleComponent',
  props: {
    /** DON'T DO IT, USE Object INSTEAD, UNLESS YOU WANT SPEND HOURS IN PAIN SUFFERING OF MISTERIOS ERRORS */
    testProp: Array 
  },
})
</script>
```
* At the very first build you might face error like there is no index page, don't worry, stop the dev server and run it again - everything will be fine
* **Dynamic image src bug. Thanks to Bemto**: this will NOT work: ```+e.IMG.image(:src="imagePathVariable")``` bemto converts image path to an emty base64 image. Don't use ```+e``` or ```+b``` bemto syntax with ```img``` tag with dynamic src. Use normal pug syntax instead ```IMG.image(:src="imagePathVariable" class="blockName__image")```
* At the very first build you might face error like there is no index page, don't worry, stop the dev server and run it again - everything will be fine
* **Async functions inside router-view hooks**: all synchronous code must run first. Any synchronous code written after ```await``` will NOT work properly.


## Build Setup
``` bash
# install dependencies
$ yarn install

# serve in development mode with hot reload at localhost:3000
$ yarn start

# serve in production mode with hot reload at localhost:3000
$ yarn prod

# generate static project
$ yarn run generate
```
# nuxtjs-blank
