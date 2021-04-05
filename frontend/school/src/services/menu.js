const getMenuLinks = () => {
    const links = [
        {
            name: "Сведения об образовательной организации",
            link: "/events",
        },
        {
            name: "Министерство образования",
            link: "/events",
        },
        {
            name: "Контактная информация",
            link: "/about",
        },
    ];

    return links;
}

export default {getMenuLinks}