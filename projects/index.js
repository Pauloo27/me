import {
  faJs, faNodeJs, faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

const react = { name: "React", icon: faReact };
const golang = { name: "GoLang", icon: faTerminal };
const nodejs = { name: "NodeJS", icon: faNodeJs };
const js = { name: "VanillaJS", icon: faJs };

const projects = [
  {
    name: "Tuner",
    description: "Search and Play songs from YouTube inside your terminal",
    thumbnail: "/thumbs/tuner.jpg",
    source: "https://github.com/Pauloo27/tuner",
    madeWith: [golang],
  },
  {
    name: "Gotroller",
    description: "MPRIS controller wrote in Go for Polybar with extra GUI",
    thumbnail: "/thumbs/gotroller.jpg",
    source: "https://github.com/Pauloo27/gotroller",
    madeWith: [golang],
  },
  {
    name: "TicTacToe",
    description: "Tic Tac Toe multiplayer",
    thumbnail: "/thumbs/tictactoe.jpg",
    source: "https://github.com/Pauloo27/tictactoe",
    madeWith: [react, nodejs],
  },
  {
    name: "Homepage",
    description: "A homepage with a ToDo, Trello and Google Calendar Integration",
    thumbnail: "/thumbs/homepage.jpg",
    source: "https://github.com/Pauloo27/homepage",
    preview: "https://pauloo27.github.io/homepage",
    madeWith: [react],
  },
  {
    name: "Morcego",
    description: "Blind SQLI Tool to fetch size and data",
    thumbnail: "/thumbs/morcego.jpg",
    source: "https://github.com/Pauloo27/morcego",
    madeWith: [golang],
  },
  {
    name: "Snek",
    description: "Web version of the Sneak game",
    thumbnail: "/thumbs/snek.jpg",
    source: "https://github.com/Pauloo27/snek",
    preview: "https://pauloo27.github.io/snek/",
    madeWith: [js],
  },
  {
    name: "TL;DR",
    description: "TL;DR pages fetcher",
    thumbnail: "/thumbs/tldr.jpg",
    source: "https://github.com/Pauloo27/tldr",
    madeWith: [golang],
  },
  {
    name: "GCO",
    description: "Tool to help writting better commit messages",
    thumbnail: "/thumbs/gco.jpg",
    source: "https://github.com/Pauloo27/gco",
    madeWith: [golang],
  },
  {
    name: "SHOP",
    description: "A shop managament system with backend and frontend",
    thumbnail: "/thumbs/shop.jpg",
    source: "https://github.com/Pauloo27/gco",
    madeWith: [golang, react],
  },
  {
    name: "NormiGO",
    description: "Translate reddit memes from English to Portuguese",
    thumbnail: "/thumbs/normigo.jpg",
    source: "https://github.com/Pauloo27/normigo",
    preview: "https://youtu.be/QTLuuaR1y7Y",
    madeWith: [golang],
  },
  {
    name: "Reddit",
    description: "Reddit Video Downloader library",
    thumbnail: "/thumbs/reddit.jpg",
    source: "https://github.com/Pauloo27/reddit",
    madeWith: [nodejs],
  },
  {
    name: "Go MPRIS",
    description: "A Go library for MPRIS",
    thumbnail: "/thumbs/gompris.jpg",
    source: "https://github.com/Pauloo27/go-mpris",
    madeWith: [golang],
  },
];

export default projects;
