
import Card from "../components/Project";

const projects = [
    {
        id: 1,
        title: "The Final Frontier",
        description: "Full Stack",
        githubURL: "https://github.com/RyanH118/The_Final_Frontier",
        link: "https://ryanh118.github.io/The_Final_Frontier/",
        image: "src/assets/Frontier.png"
    },
    {
        id: 2,
        title: "Venue Voyager",
        description: "This is project 2",
        githubURL: "https://github.com/P5YC0DR3AM3R/venueVoyager",
        link: "https://p5yc0dr3am3r.github.io/venueVoyager/",
        image: "src/assets/Venue.png"
    },
    {
        id: 3,
        title: "Note Taker",
        description: "This is project 3",
        githubURL: "https://github.com/RyanH118/Note_Taker",
        link: "https://note-taker-qwr0.onrender.com",
        image: "src/assets/Note.png"
    },
    {
        id: 4,
        title: "Weather Forecast",
        description: "This is project 4",
        githubURL: "https://github.com/RyanH118/Weather_Forecast",
        link: "https://ryanh118.github.io/Weather_Forecast/",
        image: "src/assets/Weather.png"
    },
    {
        id: 5,
        title: "Personal Blog",
        description: "This is project 5",
        githubURL: "https://github.com/RyanH118/personal_blog",
        link: "https://ryanh118.github.io/personal_blog/",
        image: "src/assets/Personal.png"
    },
    {
        id: 6,
        title: "Payroll Tracker",
        description: "This is project 6",
        githubURL: "https://github.com/RyanH118/Payroll_Tracker",
        link: "https://ryanh118.github.io/Payroll_Tracker/",
        image: "src/assets/Payroll.png"
    },
]

export default function Portfolio() {
    return <Card projects={projects} />;
}
