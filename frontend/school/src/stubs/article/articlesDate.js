const stub = `# План
- [Анализ прежметной области](/#/@subject-area)
- [Цели и задачи](/#/@purpose)
- [Архитектура web-приложения](/#/@web-application-architecture)
- [Структура графического интерфейса](/#/@gui)
- [Выбор инструментов и технологий](/#/@tools)
- [Рекомендуемые этапы разработки](/#/@development-stages)
- [Итерации разработки](/#/@development-iterations)
- [Описание первой итерации](/#/@first-iter-description)
- [Вывод](/#/@summary)

&ensp;
`;

const subjectArea = `# Анализ предметной области

## Классификация имеющихся решений
- Устаревшие сайты ([пример](http://ozr-school27.ucoz.ru/index/telefonnyj_spravochnik/0-6))
- Конструкторы сайтов образовательных организаций ([пример](https://xn--80aaacg3ajc5bedviq9k9b.xn--p1ai/))
- Региональные решения ([Татарстан](https://edu.tatar.ru/aviastroit/about), [Иркутск](http://school.irk.ru/))
- Шаблонные решения ([1C-битрикс](https://schooldemo.1c-bitrix.ru/about/a_public_report_of_the_director/))

&ensp;

### Выявленные проблемы данных решений
- Плохая структуризация данных и навигации
- Устаревший дизайн (со временем все устаревает)
- Отсутствие адаптивного дизайна или его плохая реализация
- Превосходство законов и методичек над удобством пользователя

&ensp;
---
&ensp;

## Анализ пользователей
### Конечные пользователи:
- Родители обучающихся (и сами обучающиеся)
- Родители, планирующие поступление своего ребенка

| Родители обучающихся      | Родители, планирующие поступление своего ребенка  |
| ------------------------- |-----------------------------------------------|
| новости                   | о школе: |
| события и мероприятия     | местоположение |
| уведомления               | безопасность|
|                           | питание |
|                           | контактная информация |
|                           | секции |
|                           | форма обратной связи |

##### Пояснения:
- События и мероприятия - то, что произойдет в будущем
- Новость - результат того, что произошло или информация не входящая в события и уведомления
- Уведомления - востребованная информация с точки зрения актуальности (не стоит засорять)

##### Примеры:
- новости: *Заняли 3-е место в соревнованиях*
- события и мероприятия: *3-его сентября поход в театр кукол*
- уведомления: *каникулы с 03.09 по 04.09 включительно* **или** *сдача учебников с 23.05 по 04.06*
 
&ensp;
 
### Обслуживающие пользователи:

Администратор сайта и контента (заполняет информацию)

&ensp;
---
&ensp;

## Поиск минимально необходимого функционала и модулей (фундамента системы)
- Модуль статей
- Модуль навигации

&ensp;
---
&ensp;

## Ограничения
- не стоит полагаться на изображения (большинство школ не имеют возможности делать качественные фотографии)
- законодательство РФ. На всех страницах необходимо иметь:
    - полное название школы
    - ссылку на сведения об образовательной организации
    - возможность перехода в режим для слабовидящих
    - ссылку на министерство образования
    >[подробнее](https://xn--80aaacg3ajc5bedviq9k9b.xn--p1ai/low)
    
&ensp;
---
&ensp;

[Цели и задачи](/#/@purpose)

&ensp;
`;

const purpose = `# Цели и задачи
## Формирование цели
**Цель:** Разработать **масштабируемое** web-приложение информационного портала среднего общеобразовательного учреждения, использующее современные (2020-2021 года) UX/UI решения

&ensp;

## Формирование задач
* Разработать масштабируемую архитектуру web-приложения
* Спроектировать архитектуру интерфейса на основании современных UX/UI решений
* Использовать итеративный подход разработки

&ensp;

[Архитектура web-приложения](/#/@web-application-architecture)

&ensp;
`;

const webApplicationArchitecture = `# Архитектура web-приложения

![Архитектура web-приложения](https://sun9-28.userapi.com/impg/uDjxFamZIdm7CXO81Qaqoy1_qd0z0pq1HvMhhw/qEtsg0Srqm4.jpg?size=401x361&quality=96&sign=080c34f4ad48cc7e07277678595d576e&type=album)

> Здесь отображено разделение на основные архитектурные единицы. Их можно расположить как на нескольких, так и на одном сервере

&ensp;

#### Достоинства:
- Разделение данных от их отображения
- Возможность замены модулей на сторонние решения
- Распараллеливание этапов разработки

> - Допустим, появится национальный проект по хранению данных школ, API можно заменить как в "frontend" (плохое решение), так и использовать "backend" в качестве прокси (сохраняется единственность источника данных)
> - Возможность создания мобильного приложения, данные так же могут браться из backend

&ensp;

#### Недостатки:
- Используется n-ое количество инструментов и технологий

> Для поддержки необходимо будет знать инструменты реализации каждого из модулей (если 1 человек)

&ensp;
---
&ensp;

## Архитектура frontend
Применяется компонентный подход
![Архитектура frontend](https://sun9-49.userapi.com/impg/SZ5kgQUCrGIpnTgUvAoiQSI89OSCqOU545Bxdg/txcs7Mmpp4w.jpg?size=211x631&quality=96&sign=b7f73ef37d978e198697661bf49ff515&type=album)

> На практике, "слой редактирования формата данных" может не понадобиться и тогда стоит отказаться от него и вводить только при необходимости

> Могут присутствовать компоненты тесно связанные с логикой, например, поля поиска. Можно воспользоваться компонентом оберткой и поднять состояние до него.

&ensp;

#### Достоинства:
- Гибкость
- Тестируемость
- Компоненты отображения могут быть взяты из библиотек

> Проявление гибкости:
> - Изменится API или захотим перейти на web-socket, необходимо будет изменить только слой "API".
> - Хотим обновить внешний вид, добавить анимации, обращаемся к слою "Компоненты отображения"
> - и тд.

&ensp;

#### Недостатки:
- Много кодить

&ensp;
---
&ensp;

## Архитектура backend

####  Требования:
- Возможность реализовать REST API
- Возможность взаимодействовать с базой данных

> Применяется архитектура выбранного инструмента. Подробнее в разделе описывающий выбранные инструменты

&ensp;

[Структура графического интерфейса](/#/@gui)

&ensp;

`;

const gui = `# Структура графического интерфейса

### Необходимые виды интерфейсов
![Необходимые виды интерфейсов](https://sun9-42.userapi.com/impg/tykMPEOQgzXO1ZqlbOfHSwu2KXKkAv8kSR9BlA/fRUq4QAlVAY.jpg?size=601x221&quality=96&sign=4f81e1b10a599b23171de14ba5b545a4&type=album)

#### Рассмотрим подробнее "frontend конечных пользователей"

> Замечание: интерфейс мобильного устройства и интерфейс компьютера должны быть функционально эквивалентны

&ensp;
---
&ensp;

### Виды компонентов:
- Комбинированный компонент
    - Компоненты для мобильных устройств
    - Компоненты для компьютеров
    > Происходит выбор компонента на основании режима интерфейса и содержит в себе общую логику
- Адаптивные компоненты
    > Приспосабливаются к размерам экрана (например с помощью медиа запросов в css)

&ensp;

#### Иерархия компонентов

![Виды компонентов](https://sun9-19.userapi.com/impg/u1V_xJHPPA8CXh53-894EEeiNEQephtUbK6V_Q/Kv-elGSF-g4.jpg?size=681x381&quality=96&sign=e320629910332851faa00f3d00a0258a&type=album)

&ensp;
---
&ensp;

### Структура интерфейса для компьютера:

![Структура интерфейса компьютера](https://sun9-7.userapi.com/impg/b-uSWgJXBkawwGFWwacggrepCKfQr6BX328RHQ/IN9eDXCB-yQ.jpg?size=761x521&quality=96&sign=bb5e7546e68c64b1f491715c4fbdef6f&type=album)

&ensp;

### Структура интерфейса для мобильного устройства:

![Структура интерфейса компьютера](https://sun9-50.userapi.com/impg/EufU0VgpabToM8Xk97gmRLSZ5tWc8USiYc1Wwg/W0booxW4qpo.jpg?size=361x481&quality=96&sign=080cf243e9038edc08362756cf1d2cbd&type=album)

&ensp;
---
&ensp;

#### "frontend обслуживающего персонала"
##### Структура интерфейса
![Структура интерфейса обслуживающего персонала](https://sun9-74.userapi.com/impg/xexD01wIoTxPvVZS9PAeOk2rYfB-7qbSjGlN_A/TV1rkddqkOQ.jpg?size=601x361&quality=96&sign=6f715231bf9ef3e1208f340385f171d4&type=album)

&ensp;

[Выбор инструментов и технологий](/#/@tools)

&ensp;
`;

const tools = `# Выбор инструментов и технологий

### База данных - Postgresql

&ensp;

### Backend - Python Django rest-framework
>  - Скорость разработки
>  - Ожидается относительно низкая нагрузка на систему (менее 100 пользователей в пиковый час)

&ensp;

### Frontend конечных пользователей - React
>  - Малое количество двусторонней связи данных и отображения
>  - Экосистема
>  - Уверенность в поддержке технологии (за React стоит Facebook)

- [Markdown](https://markdown.ru/) (для реализации модуля статей)
- [Remarkable](https://www.npmjs.com/package/remarkable) (для рендеринга markdown разметки)
- [Github Markdown CSS](https://github.com/sindresorhus/github-markdown-css) (стили для статей)
- [React-router](https://reactrouter.com/)
- [Axios](https://github.com/axios/axios) (для http запросов)
- [Figma](https://www.figma.com/) (для создания макетов)

&ensp;

### Frontend обслуживающего персонала - React
>  - Чтобы не разводить "зоопарк" технологий

- [Element React](https://elemefe.github.io/element-react/#/en-US/quick-start) (библиотека компонентов)
- [React-router](https://reactrouter.com/)
- [Axios](https://github.com/axios/axios) (для http запросов)

&ensp;

[Рекомендованные этапы разработки](/#/@development-stages)

&ensp;
`;

const developmentStages = `# Рекомендуемые этапы разработки
> при условии что функциональность уже известна:

&ensp;

1. Описание user story.
2. Построение макета UX (gray box)
3. Определение интерфейса API и JSON форматов
4. Основная реализация (могут идти параллельно):
    - backend
        - модели
        - template (сериализаторы)
        - vuew (rest)
        - маршрутизатор
    - frontend обслуживающего персонала
        - API
        - бизнес логика
        - компоненты таблиц
        - добавление в список таблиц
    - frontend конечных пользователей
        - построение макета в редакторе Figma
        - верстка
        - компоненты отображения (минимальное)
        - слой бизнес логики
        - компонент обертки
        - API
    - покрытие тестами
    - документирование

5. Продвинутое отображение и анимации во "frontend конечных пользователей"

&ensp;

[Итерации разработки](/#/@development-iterations)

&ensp;
`;

const developmentIterations = `# Итерации разработки

## Первая итерация (возможен релиз):
- модуль статей markdown
- модуль навигации (первичная навигация и меню)
- модуль новостей (список, поиск по заголовку)
- модуль авторизации для обслуживающего персонала (jwt)
- "frontend для конечных пользователей"
    - анимация загрузки
    - page ошибок (404 и тд)
    - page статья по ссылке не найдена

&ensp;

## Вторая итерация:
- модуль о школе
- модуль уведомлений
- анимации на frontend конечных пользователей

&ensp;

## Третья итерация:
- модуль преподавателей
- модуль событий и мероприятий
- модуль фотогалереи
- модуль статей (добавление поиска по содержанию)

&ensp;

## Четвертая итерация:
- добавление возможности фильтрации по классам новостей, событий, уведомлений (с запоминанием на стороне клиента)
- добавление категорий новостей, событий (закрепленные) (тесно связано с предыдущим)

&ensp;

[Описание первой итерации](/#/@first-iter-description)

&ensp;
`;

const firstIterDescription = `# Описание модулей первой итерации

## Модуль статей Markdown
#### Данные:
![](https://sun9-76.userapi.com/impg/JjnYUKw_2T7kPtgD8gWmT3Mc_9A7D4EQbgE1RQ/9YTDbMnx0nI.jpg?size=289x225&quality=96&sign=1f0edb9413a23f8983b357f521b1483a&type=album)

> name_link - ограничение на уникальность
> status - показывает доступ для конечного пользователя

#### Функционал:
- CRUD для персонала
- Получение контента статьи из списка открытых для просмотра статей по name_link

#### Основной компонент:

    import { Remarkable } from 'remarkable';

    const ArticleMarkdown = (props) => {
        const md = new Remarkable();
    
        const markdownContent = props.content;
    
        const getRawMarkup = () => {
            return { __html: md.render(markdownContent) };
        }
    
        return (
            <article className="markdown-body" dangerouslySetInnerHTML={getRawMarkup()}/>
        );
    }
    
##### Онлайн редактор Markdown [Dillinger](https://dillinger.io/)
##### [Руководство по Markdown](https://paulradzkov.com/2014/markdown_cheatsheet/)
##### Пример синтаксиса Markdown

    ## Модуль статей Markdown
    #### Данные:
    ![](https://sun9-76.userapi.com/impg/JjnYUKw_2T7kPtgD8gWmT3Mc_9A7D4EQbgE1RQ/9YTDbMnx0nI.jpg?size=289x225&quality=96&sign=1f0edb9413a23f8983b357f521b1483a&type=album)
    
    > name_link - ограничение на уникальность
    > status - показывает доступ для конечного пользователя
    
    #### Функционал:
    - CRUD для персонала
    - Получение контента статьи из списка открытых для просмотра статей по name_link

&ensp;

## Модуль навигации
#### Данные:
![](https://sun9-70.userapi.com/impg/-6-qRGBgLpiRXcIEruNuAO2uOb__n9w_4UpWhA/JahgdpCe27w.jpg?size=837x435&quality=96&sign=c2d195b8db4d72cdbb54000d115ddc08&type=album)
#### Функционал:
- CRUD для персонала
- Получение списка элементов навигации с svg иконок
- Получение списка элементов меню

#### Описание:
> Navigation выполняй роль первичной навигации, то есть обеспечивает доступ к часто используемым сценариям.
> Рекомендуется отображать не более 4 таких сценариев.

> Menu реализует обязательные и не часто используемые сценарии.

&ensp;

## Модуль новостей
#### Данные:
![](https://sun9-63.userapi.com/impg/ewwMvBEvlXrzxslKKu-0Wcx7QXlC0XmCTkl2Tw/_-Y3pB7_zgE.jpg?size=286x224&quality=96&sign=f45d2b0736661fe5f588366460aefa51&type=album)
#### Функционал:
- CRUD для персонала
- Поиск по полю name
- Получение списка новостей отсортированного по дате добавления с пагинацией (сначала актуальные)

&ensp;

## Модуль авторизации
> Использование сторонних решений

&ensp;

[Вывод](/#/@summary)

&ensp;
`;

const summary = `# Резюмирую

### Разрабатываемую систему можно описать следующим образом:
Шаблон навигации, использующий конструктор статей для блока контента.

&ensp;

#### Дополнительно:
... с возможностью добавления более узкоспециализированных модулей (компонентов), таких как "о школе", "преподаватели", "уведомления" и так далее

&ensp;

### Пути коммерциализации:

- Open source с добавлением возможности пожертвовать автору
- Open source с монетизацией поддержки
- Выдача под ключ
- Выдвинуть на региональный уровень (субсидии, гранты)
- Зарабатывать на вычислительных ресурсах во внепиковое время

`;

export default {
    stub,
    subjectArea,
    purpose,
    webApplicationArchitecture,
    gui,
    tools,
    developmentStages,
    developmentIterations,
    firstIterDescription,
    summary

}