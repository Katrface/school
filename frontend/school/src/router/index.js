const staticRouter = {
    main: {
        path: "/"
    },
    news: {
        path: "/news",
        element: "/news/:id"
    },
    events: {
        path: "/events",
        element: "/news/:id"
    },
    about: {
        path: "/about",
        element: "/news/:id"
    },
}

export default staticRouter;