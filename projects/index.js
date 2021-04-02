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
    name: "Homepage",
    description: "A homepage with a ToDo, Trello and Google Calendar Integration",
    thumbnail: "/thumbs/homepage.jpg",
    source: "https://github.com/Pauloo27/homepage",
    preview: "https://pauloo27.github.io/homepage",
    madeWith: [react],
  },
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
    thumbnail: "https://i.imgur.com/ArxvWCB.png",
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
    name: "MediaEnem",
    description: "Enem grade calculator",
    thumbnail: "/thumbs/enem.jpg",
    source: "https://github.com/Pauloo27/MediaEnem",
    preview: "https://pauloo27.github.io/MediaEnem/",
    madeWith: [react],
  },
  {
    name: "TrucoReact",
    description: "Web version of the card game 'Truco'",
    thumbnail: "/thumbs/truco.png",
    source: "https://github.com/Pauloo27/TrucoReact",
    preview: "https://pauloo27.github.io/TrucoReact/",
    madeWith: [react],
  },
  {
    name: "TL;DR",
    description: "TL;DR pages fetcher",
    thumbnail: "/thumbs/tldr.png",
    source: "https://github.com/Pauloo27/tldr",
    madeWith: [golang],
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
    thumbnail: "/thumbs/reddit.png",
    source: "https://github.com/Pauloo27/reddit",
    madeWith: [nodejs],
  },
  {
    name: "Go MPRIS",
    description: "A Go library for MPRIS",
    thumbnail: "/thumbs/gompris.png",
    source: "https://github.com/Pauloo27/go-mpris",
    madeWith: [golang],
  },
];

export default projects;
