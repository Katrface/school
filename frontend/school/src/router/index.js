import News from "../views/Main/News";
import React from "react";

const staticRouter = {
    main: {
        path: "/"
    },
    news: {
        path: "/news"
    },
    events: {
        path: "/events",
    },
    about: {
        path: "/about",
    },
    article: {
        path: "/@:id"
    }
}

// TODO вынести в массив по которому будет строится роутинг Main
// сейчас проблема со связями, решится при добавление оберток
const mainRouter = [
    {
        route: {
            path: staticRouter.main,
            exact: true,
        },
        component: <div>Main</div>
    },
];

export default staticRouter;