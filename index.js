const sites = [
    {name: "Nail Archive",
    url: "https://hexique.github.io/nail-archive/",
    date: "10.02.2025",
    desc: "An archive of deleted videos from YouTube",
    } , {name: "Casino",
    url: "https://hexique.github.io/casino/",
    date: "10.02.2025",
    desc: "A simple casino game",
    } , {name: "Unix 2 time",
    url: "https://hexique.github.io/unix2time/",
    date: "12.02.2025",
    desc: "Converter from unix",
    } , {name: "Stopwatch",
    url: "https://hexique.github.io/stopwatch/",
    date: "13.02.2025",
    desc: "A stopwatch with pause, stop, reset and marks",
    }, {name: "Random Telegram message",
    url: "https://hexique.github.io/randomtg/",
    date: "13.02.2025",
    desc: "Gives you a link to random message on Telegram",
    } , {name: "Rock paper scissors",
    url: "https://hexique.github.io/rps/",
    date: "14.02.2025",
    desc: "Rock paper scissors game",
    } , {name: "Calculator",
    url: "https://hexique.github.io/calc/",
    date: "15.02.2025",
    desc: "A simple calculator with simple math operations",
    } , {name: "Hamster Kombat",
    url: "https://hexique.github.io/hamster/",
    date: "16.02.2025",
    desc: "A simple clicker-based game",
    } , {name: "Country info",
    url: "https://hexique.github.io/country-info/",
    date: "18.02.2025",
    desc: "Work with API, like a searcher",
    } , {name: "Apigif",
    url: "https://hexique.github.io/apigif/",
    date: "18.02.2025",
    desc: "Searcher of images (API Giphy)",
    } , {name: "My projects",
    url: "https://hexique.github.io/my-projects/",
    date: "21.02.2025",
    desc: "The site you are on right now",
    } , {name: "YouPipe",
    url: "https://hexique.github.io/youpipe/",
    date: "14.03.2025",
    desc: "YouTube clone, you can watch uploaded videos and upload your own.",
    } , {name: "Time progress",
    url: "https://hexique.github.io/liununu/",
    date: "31.03.2025",
    desc: "Progress of time in percentages with converter",
    }
];

for(let i=0; i<sites.length; i++){
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const desc = document.createElement("p");

    title.innerHTML = `<a href=${sites[i].url} target="_blank">${sites[i].name}</a> <a class="date" href=https://github.com/hexique/${sites[i].url.split('/')[3]} target="_blank">[${sites[i].date}]</a>`;
    desc.innerHTML = `<p>${sites[i].desc}</p></a>`;
    img.src = `img/${i}.png`;
    img.alt = `Image №${i}: ${sites[i].name}`;
    img.height = `250`

    document.body.append(title);
    document.body.append(desc);
    document.body.append(img);
}
/* <h3><a href="https://hexique.github.io/unix2time/">Unix 2 time</a> [10.02.2025]</h3>
<p>Converter from unix</p> */



