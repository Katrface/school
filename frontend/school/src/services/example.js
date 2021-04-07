export const start = `# Построить удобное расписание за 19 кликов

VBA Excel макрос и пользовательская форма для построения расписания определенной группы на основе excel файла опубликованного КФУ ИВМиИТ.
Может использоваться для других институтов с незначительными изменениями.

## Пример работы макроса
![Пример работы макроса](https://sun9-53.userapi.com/WcjFrKTpsIwcXjQZPF8sJGbPfJVJ3BrOlMEG7Q/cG6gD3evUF4.jpg)

## Порядок действий:
### Подготовить Excel
1. Изменить формат на xlsm

   В открытом excel файле с расписанием:

   **Файл** - **Сохранить как** - Тип файла: **Книга Excel с поддержкой макросов (*.xlsm)** - **Сохранить**

![Тип файла xlsm](https://sun9-73.userapi.com/7YMsKYm6vunjmyygCdfCnx4mDxEGfTBUsssBaA/eRm7Kuv_49Q.jpg)

2. Включить вкладку "Разработчик"

   **Файл** - **Параметры** - **Настройка ленты** - В списке **Основные вкладки** установите флажок **Разработчик** - **ОК**

![Включение вкладки "Разработчик"](https://sun3-11.userapi.com/85KvEttZUjKtgCggDTUQIpn6kMAw8l97NagRNw/GRJiG5_LN-U.jpg)

3. Импортировать макрос и пользовательскую форму

   Вкладка **Разработчик** - **Visual Basic** - Перенесите файлы в окно структуры VBA Project (или импортируйте другим способом) - Закройте VBA

![Подключение файлов к проекту VBA](https://sun9-20.userapi.com/NNed5_rZ9QuadW3hLyjmazv0t8dUodf6VcuZrQ/KYMSshoagRY.jpg)
   
> При подключении файлов может возникнуть ошибка связанная с файлом c расширением .frx - Нажмите **ОК** - Переходите к следующему этапу


### Вызвать пользовательскую форму
Вкладка **Разработчик** - **Макросы** - Выбираем **showUserForm** - **Выполнить**

![Вызов макроса showUserForm](https://sun9-47.userapi.com/FVtgGLmt864CBUXn3F3xpXNpYovfPPoiquADEA/SzOUYi4gFjE.jpg)

***

Следуем форме, подстраиваем масштаб, делаем скриншот.`
;
export const end = `# Mirror

[![npm version](https://img.shields.io/npm/v/mirrorx.svg?colorB=007ec6&style=flat-square)](https://www.npmjs.com/package/mirrorx) [![build status](https://img.shields.io/travis/mirrorjs/mirror.svg?style=flat-square)](https://travis-ci.org/mirrorjs/mirror) [![coverage status](https://img.shields.io/coveralls/mirrorjs/mirror.svg?style=flat-square)](https://coveralls.io/github/mirrorjs/mirror?branch=master) [![license](https://img.shields.io/github/license/mirrorjs/mirror.svg?style=flat-square)](https://github.com/mirrorjs/mirror/blob/master/LICENSE)

[查看中文](https://github.com/mirrorjs/mirror/blob/master/README_zh.md)

A simple and powerful React framework with minimal API and zero boilerplate. (Inspired by [dva](https://github.com/dvajs/dva) and [jumpstate](https://github.com/jumpsuit/jumpstate))

> Painless React and Redux.

## Why?

We love React and Redux.

A typical React/Redux app looks like the following:

* An \`actions/\` directory to manually create all \`action type\`s (or \`action creator\`s)
* A \`reducers/\` directory and tons of \`switch\` clause to capture all \`action type\`s
* Apply middlewares to handle \`async action\`s
* Explicitly invoke \`dispatch\` method to dispatch all actions
* Manually create \`history\` to router and/or sync with store
* Invoke methods in \`history\` or dispatch actions to programmatically changing routes

The problem? [Too much boilerplates](https://github.com/reactjs/redux/blob/master/docs/recipes/ReducingBoilerplate.md) and a little bit tedious.

In fact, most part of the above steps could be simplified. Like, create \`action\`s and \`reducer\`s in a single method, or dispatch both sync and async actions by simply invoking a function without extra middleware, or define routes without caring about \`history\`, etc.

That's exactly what Mirror does, encapsulates the tedious or repetitive work in very few APIs to offer a high level abstraction with efficiency and simplicity, and without breaking the pattern.

## Features

* Minimal API(only 4 newly introduced)
* Easy to start
* Actions done easy, sync or async
* Support code splitting
* Full-featured hook mechanism

## Getting Started

### Creating an App

Use [create-react-app](https://github.com/facebookincubator/create-react-app) to create an app:

\`\`\`sh
$ npm i -g create-react-app
$ create-react-app my-app
\`\`\`

After creating, install Mirror from npm:

\`\`\`sh
$ cd my-app
$ npm i --save mirrorx
$ npm start
\`\`\`

### \`index.js\`

\`\`\`js
import React from 'react'
import mirror, {actions, connect, render} from 'mirrorx'

// declare Redux state, reducers and actions,
// all actions will be added to \`actions\`.
mirror.model({
  name: 'app',
  initialState: 0,
  reducers: {
    increment(state) { return state + 1 },
    decrement(state) { return state - 1 }
  },
  effects: {
    async incrementAsync() {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      actions.app.increment()
    }
  }
})

// connect state with component
const App = connect(state => {
  return {count: state.app}
})(props => (
    <div>
      <h1>{props.count}</h1>
      {/* dispatch the actions */}
      <button onClick={() => actions.app.decrement()}>-</button>
      <button onClick={() => actions.app.increment()}>+</button>
      {/* dispatch the async action */}
      <button onClick={() => actions.app.incrementAsync()}>+ Async</button>
    </div>
  )
)

// start the app，\`render\` is an enhanced \`ReactDOM.render\`
render(<App />, document.getElementById('root'))
\`\`\`

### [Demo](https://codesandbox.io/s/814mnvw1qj)

## Guide

See [Guide](https://github.com/mirrorjs/mirror/blob/master/docs/guide.md).

## API

See [API Reference](https://github.com/mirrorjs/mirror/blob/master/docs/api.md).

## Examples

* [User-Dashboard](https://github.com/mirrorjs/user-dashboard-example) (An example similar to dva-user-dashboard)
* [Counter](https://github.com/mirrorjs/mirror/blob/master/examples/counter)
* [Simple-Router](https://github.com/mirrorjs/mirror/blob/master/examples/simple-router)
* [Todo](https://github.com/mirrorjs/mirror/blob/master/examples/todo)

## Change log

See [CHANGES.md](https://github.com/mirrorjs/mirror/blob/master/CHANGES.md).

## FAQ

#### Does Mirror support TypeScript?

Yes, it does.

#### Does Mirror support [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)?

Yes, Mirror integrates Redux DevTools by default to make your debugging more easily.

#### Can I use extra Redux middlewares?

Yes, specify them in [\`mirror.defaults\`](https://github.com/mirrorjs/mirror/blob/master/docs/api.md#-optionsmiddlewares) is all you need to do, learn more from the Docs.

#### I'm really into Redux-Saga, is there any way to use it in Mirror?

Yes of course, take a look at the [\`addEffect\`](https://github.com/mirrorjs/mirror/blob/master/docs/api.md#-optionsaddeffect) option.

#### Which version of react-router does Mirror use?

react-router v4.
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    start,
    end
}