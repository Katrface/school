const getNavigationLinks = () => {
    const links = [
        { name: "Новости", link: "/news", iconClass: "icon icon-feed" },
        {
            name: "События",
            link: "/events",
            iconClass: "icon icon-notification"
        },
        {
            name: "О школе",
            link: "/about",
            iconClass: "icon icon-feed_active"
        }
    ];

    return links;
}

export default {getNavigationLinks}