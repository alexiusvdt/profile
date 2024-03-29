/* eslint-disable */
import js from "./img/javascript.svg";
import py from "./img/python-icon.svg";
import dockr from "./img/docker.svg";
import node from "./img/nodejs.svg";
import dotnet from "./img/dotnet.svg";
import github from "./img/github.svg";
import reactlogo from "./img/react.svg";
import csharp from "./img/csharp.svg";
import gis from "./img/gis.svg";
import cicd from './img/cicd.svg';
import tail from './img/tailwind.svg';
import linux from './img/linux.svg';
import pandas from './img/pandas.svg';

export const config = {
  email: 'alex.johnson293@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/alexiusVDT',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ajohns12/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ob.nixillis/',
    },
  ],
  projects: [
    {
      name: 'Sorting',
      url: 'https://github.com/alexiusvdt/sorting',
      blurb: 'Visualize sorting algorithms at work by sending API requests',
      features: 'Python, Flask, React'
    },
    {
      name: 'Alien Game',
      url: 'https://github.com/alexiusvdt/alien-game',
      blurb: 'A clone of alien invaders, complete with leaderboard and scaling difficulty',
      features: 'Python',
    },
    {
      name: 'Help Queue',
      url: 'https://github.com/alexiusvdt/help-queue-hooks',
      blurb: 'A help ticket queue using React that stores tickets in a firestore database.',
      features: 'Javascript, React',
    },
    {
      name: 'To Do List',
      url: 'https://github.com/alexiusvdt/ToDoList-Styled',
      blurb: 'An ASP.NET to do list application that stores entries in a SQL database.',
      features: '.NET6, SQL',
    },

    {
      name: 'Marquee',
      url: 'https://github.com/alexiusvdt/YourMovieDatabase',
      blurb: 'An application for users to select movies and leave ratings using ASP.NET, public API calls & a SQL database. Made for a team week project.',
      features: '.NET6, SQL',
    },
  ],
  skills: {
    title: "Skills",
    subtitle: "Here are some of my proficiencies:",
    skillsList: [
      {
        name: 'Python',
        // subtext: 'placeholder text',
        logo: py
      },
      {
        name: 'Pandas',
        logo: pandas
      },
      {
        name: 'Javascript',
        logo: js
      },
      {
        name: 'Docker',
        logo: dockr
      },
      {
        name: 'Nodejs',
        logo: node
      },
      {
        name: 'C#',
        logo: csharp
      },
      {
        name: '.NET',
        logo: dotnet
      },
      {
        name: 'Github',
        logo: github
      },
      {
        name: 'React',
        logo: reactlogo
      },
      {
        name: 'GIS',
        logo: gis
      },
      {
        name: 'CI/CD',
        logo: cicd
      },
      // {
      //   name: 'Tailwind',
      //   // subtext:
      //   logo: tail
      // },
      {
        name: 'Linux',
        logo: linux
      },
    ],
  }
};
