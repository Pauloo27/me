const react = { name: "React" };
const golang = { name: "Go" };

const projects = [
  {
    name: "Homepage",
    description: "A homepage with a ToDo, Trello and Google Calendar Integration",
    thumbnail: "https://i.imgur.com/BGpE4nu.png",
    source: "https://github.com/Pauloo27/homepage",
    preview: "https://pauloo27.github.io/homepage",
    madeWith: [react],
  },
  {
    name: "Tuner",
    description: "Search and Play songs from YouTube inside your terminal",
    thumbnail: "https://i.imgur.com/REvt9Kw.png",
    source: "https://github.com/Pauloo27/tuner",
    madeWith: [golang],
  },
  {
    name: "Gotroller",
    description: "MPRIS controller wrote in Go for Polybar with extra GUI",
    thumbnail: "https://i.imgur.com/HrEGG2E.png",
    source: "https://github.com/Pauloo27/gotroller",
    madeWith: [golang],
  },
];

export default projects;
