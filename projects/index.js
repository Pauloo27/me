import {
  faJs, faNodeJs, faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

const react = { name: "React", icon: faReact };
const go = { name: "Go", icon: faTerminal };
const node = { name: "Node", icon: faNodeJs };
const js = { name: "JS", icon: faJs };

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
    madeWith: [go],
  },
  {
    name: "Gotroller",
    description: "MPRIS controller wrote in Go for Polybar with extra GUI",
    thumbnail: "/thumbs/gotroller.jpg",
    source: "https://github.com/Pauloo27/gotroller",
    madeWith: [go],
  },
  {
    name: "TicTacToe",
    description: "Tic Tac Toe multiplayer",
    thumbnail: "/thumbs/tictactoe.jpg",
    source: "https://github.com/Pauloo27/tictactoe",
    madeWith: [react, node],
  },
  {
    name: "Morcego",
    description: "Blind SQLI Tool to fetch size and data",
    thumbnail: "/thumbs/morcego.jpg",
    source: "https://github.com/Pauloo27/morcego",
    madeWith: [go],
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
    madeWith: [go],
  },
  {
    name: "GCO",
    description: "Tool to help writting better commit messages",
    thumbnail: "/thumbs/gco.jpg",
    source: "https://github.com/Pauloo27/gco",
    madeWith: [go],
  },
  {
    name: "SHOP",
    description: "A shop managament system with backend and frontend",
    thumbnail: "/thumbs/shop.jpg",
    source: "https://github.com/Pauloo27/gco",
    madeWith: [go, react],
  },
  {
    name: "NormiGO",
    description: "Translate reddit memes from English to Portuguese",
    thumbnail: "/thumbs/normigo.jpg",
    source: "https://github.com/Pauloo27/normigo",
    preview: "https://youtu.be/QTLuuaR1y7Y",
    madeWith: [go],
  },
  {
    name: "Reddit",
    description: "Reddit Video Downloader library",
    thumbnail: "/thumbs/reddit.jpg",
    source: "https://github.com/Pauloo27/reddit",
    madeWith: [node],
  },
  {
    name: "Go MPRIS",
    description: "A Go library for MPRIS",
    thumbnail: "/thumbs/gompris.jpg",
    source: "https://github.com/Pauloo27/go-mpris",
    madeWith: [go],
  },
];

export default projects;
