const newsCards = [
    {
        id: 1,
        title: "Анализ предметной области",
        link: "@subject-area",
        imgLink:
            "https://lh3.googleusercontent.com/proxy/VIPtuFBZRgMWIf7d6EcSC61IA7obUqtvxtJ_F35ENSyWrFLTJjg3vrM_gB4Fwo0V7Z29FVJq_0zYqA25CrOlzwOUKcgF9N0Kn2yBiAF_Q9HZNNr99Vjq8Pz4NJpIzVGymerzb8frWrQ8n-Hz"
    },
    {
        id: 2,
        title: "124124124125dgadga",
        link: "@end",
        imgLink:
            "https://lh3.googleusercontent.com/proxy/VIPtuFBZRgMWIf7d6EcSC61IA7obUqtvxtJ_F35ENSyWrFLTJjg3vrM_gB4Fwo0V7Z29FVJq_0zYqA25CrOlzwOUKcgF9N0Kn2yBiAF_Q9HZNNr99Vjq8Pz4NJpIzVGymerzb8frWrQ8n-Hz"
    },
    {
        id: 3,
        title: "124124124125dgadga",
        link: "#",
        imgLink:
            "data:image/jpeg;base64,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"
    },
    {
        id: 4,
        title: "124124124125dgadga",
        link: "#",
        imgLink:
            "data:image/jpeg;base64,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"
    }
];

export default newsCards