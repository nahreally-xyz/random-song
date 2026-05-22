// Add your songs here. Drop MP3s in songs/ and artwork in artwork/.
const songs = [
  { track: 1,  title: "1010 WINS", artist: "NAHreally", src: "songs/01 - 1010 WINS - NAHreally - Extra Cheese.mp3", artwork: "artwork/01 Extra Cheese_Front Cover_web_FINAL (2).jpg", album: "Extra Cheese", year: 2026, albumUrl: "https://5oclockshadowboxers.bandcamp.com/album/extra-cheese", lyrics: "" },
  { track: 2,  title: "Moderately Well", artist: "NAHreally", src: "songs/02 - Moderately Well - NAHreally - Extra Cheese.mp3", artwork: "artwork/01 Extra Cheese_Front Cover_web_FINAL (2).jpg", album: "Extra Cheese", year: 2026, albumUrl: "https://5oclockshadowboxers.bandcamp.com/album/extra-cheese", lyrics: "" },
  { track: 3,  title: "Umpteen", artist: "NAHreally", src: "songs/03 - Umpteen - NAHreally - Extra Cheese.mp3", artwork: "artwork/01 Extra Cheese_Front Cover_web_FINAL (2).jpg", album: "Extra Cheese", year: 2026, albumUrl: "https://5oclockshadowboxers.bandcamp.com/album/extra-cheese", lyrics: "" },
  { track: 4,  title: "Kick In The Pants", artist: "NAHreally", src: "songs/04 - Kick In The Pants - NAHreally - Extra Cheese.mp3", artwork: "artwork/01 Extra Cheese_Front Cover_web_FINAL (2).jpg", album: "Extra Cheese", year: 2026, albumUrl: "https://5oclockshadowboxers.bandcamp.com/album/extra-cheese", lyrics: "" },
  { track: 5,  title: "FUKWITME 2", artist: "NAHreally", src: "songs/05 - FUKWITME 2 - NAHreally - Extra Cheese.mp3", artwork: "artwork/01 Extra Cheese_Front Cover_web_FINAL (2).jpg", album: "Extra Cheese", year: 2026, albumUrl: "https://5oclockshadowboxers.bandcamp.com/album/extra-cheese", lyrics: "" },
  { track: 6,  title: "I Need A Hobby", artist: "NAHreally", src: "songs/06 - I Need A Hobby - NAHreally - Extra Cheese.mp3", artwork: "artwork/01 Extra Cheese_Front Cover_web_FINAL (2).jpg", album: "Extra Cheese", year: 2026, albumUrl: "https://5oclockshadowboxers.bandcamp.com/album/extra-cheese", lyrics: "" },
  { track: 7,  title: "You've Got A Friend Type Beat", artist: "NAHreally", src: "songs/07 - You've Got A Friend Type Beat - NAHreally - Extra Cheese.mp3", artwork: "artwork/01 Extra Cheese_Front Cover_web_FINAL (2).jpg", album: "Extra Cheese", year: 2026, albumUrl: "https://5oclockshadowboxers.bandcamp.com/album/extra-cheese", lyrics: "" },
  { track: 8,  title: "Too Many Cooks", artist: "NAHreally", src: "songs/08 - Too Many Cooks - NAHreally - Extra Cheese.mp3", artwork: "artwork/01 Extra Cheese_Front Cover_web_FINAL (2).jpg", album: "Extra Cheese", year: 2026, albumUrl: "https://5oclockshadowboxers.bandcamp.com/album/extra-cheese", lyrics: "" },
  { track: 9,  title: "How We Always Gotta Be", artist: "NAHreally", src: "songs/09 - How We Always Gotta Be - NAHreally - Extra Cheese.mp3", artwork: "artwork/01 Extra Cheese_Front Cover_web_FINAL (2).jpg", album: "Extra Cheese", year: 2026, albumUrl: "https://5oclockshadowboxers.bandcamp.com/album/extra-cheese", lyrics: "" },
  { track: 10, title: "Find Our Way", artist: "NAHreally", src: "songs/10 - Find Our Way - NAHreally - Extra Cheese.mp3", artwork: "artwork/01 Extra Cheese_Front Cover_web_FINAL (2).jpg", album: "Extra Cheese", year: 2026, albumUrl: "https://5oclockshadowboxers.bandcamp.com/album/extra-cheese", lyrics: "" },
  { track: 11, title: "Human Error", artist: "NAHreally", src: "songs/11 - Human Error - NAHreally - Extra Cheese.mp3", artwork: "artwork/01 Extra Cheese_Front Cover_web_FINAL (2).jpg", album: "Extra Cheese", year: 2026, albumUrl: "https://5oclockshadowboxers.bandcamp.com/album/extra-cheese", lyrics: "" },
  { track: 1,  title: "Cook For You", artist: "NAHreally", src: "songs/NAHreally - Secret Pancake - 01 Cook For You-.mp3", artwork: "artwork/secret pancake cover.jpg", album: "Secret Pancake", year: 2025, albumUrl: "https://nahreally.bandcamp.com/album/secret-pancake", lyrics: "" },
  { track: 2,  title: "Do Not Say Thanks", artist: "NAHreally", src: "songs/NAHreally - Secret Pancake - 02 Do Not Say Thanks.mp3", artwork: "artwork/secret pancake cover.jpg", album: "Secret Pancake", year: 2025, albumUrl: "https://nahreally.bandcamp.com/album/secret-pancake", lyrics: "" },
  { track: 3,  title: "Secret Pancake", artist: "NAHreally", src: "songs/NAHreally - Secret Pancake - 03 Secret Pancake.mp3", artwork: "artwork/secret pancake cover.jpg", album: "Secret Pancake", year: 2025, albumUrl: "https://nahreally.bandcamp.com/album/secret-pancake", lyrics: "" },
  { track: 4,  title: "Onions", artist: "NAHreally", src: "songs/NAHreally - Secret Pancake - 04 Onions.mp3", artwork: "artwork/secret pancake cover.jpg", album: "Secret Pancake", year: 2025, albumUrl: "https://nahreally.bandcamp.com/album/secret-pancake", lyrics: "" },
  { track: 5,  title: "Sims (feat. Meechy718)", artist: "NAHreally", src: "songs/NAHreally - Secret Pancake - 05 Sims (feat. Meechy718).mp3", artwork: "artwork/secret pancake cover.jpg", album: "Secret Pancake", year: 2025, albumUrl: "https://nahreally.bandcamp.com/album/secret-pancake", lyrics: "" },
  { track: 6,  title: "Nik Wallenda", artist: "NAHreally", src: "songs/NAHreally - Secret Pancake - 06 Nik Wallenda.mp3", artwork: "artwork/secret pancake cover.jpg", album: "Secret Pancake", year: 2025, albumUrl: "https://nahreally.bandcamp.com/album/secret-pancake", lyrics: "" },
  { track: 7,  title: "Left With A Sense (feat. Jesse the Tree)", artist: "NAHreally", src: "songs/NAHreally - Secret Pancake - 07 Left With A Sense (feat. Jesse the Tree).mp3", artwork: "artwork/secret pancake cover.jpg", album: "Secret Pancake", year: 2025, albumUrl: "https://nahreally.bandcamp.com/album/secret-pancake", lyrics: "" },
  { track: 8,  title: "Landslide, Landscape, Landmine", artist: "NAHreally", src: "songs/NAHreally - Secret Pancake - 08 Landslide, Landscape, Landmine.mp3", artwork: "artwork/secret pancake cover.jpg", album: "Secret Pancake", year: 2025, albumUrl: "https://nahreally.bandcamp.com/album/secret-pancake", lyrics: "" },
  { track: 9,  title: "That's That", artist: "NAHreally", src: "songs/NAHreally - Secret Pancake - 09 That's That.mp3", artwork: "artwork/secret pancake cover.jpg", album: "Secret Pancake", year: 2025, albumUrl: "https://nahreally.bandcamp.com/album/secret-pancake", lyrics: "" },
  { track: 10, title: "God Knows (Odd Flows)", artist: "NAHreally", src: "songs/NAHreally - Secret Pancake - 10 God Knows (Odd Flows).mp3", artwork: "artwork/secret pancake cover.jpg", album: "Secret Pancake", year: 2025, albumUrl: "https://nahreally.bandcamp.com/album/secret-pancake", lyrics: "" },
  { track: 1,  title: "These Days", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 01 These Days.mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 2,  title: "Smarter Than I Am", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 02 Smarter Than I Am.mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 3,  title: "Breaking Down In Real Time (feat. Open Mike Eagle)", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 03 Breaking Down In Real Time (ft. Open Mike Eagle).mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 4,  title: "Rapper Hands", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 04 Rapper Hands.mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 5,  title: "Why Don't You?", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 05 Why Don't You-.mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 6,  title: "Movement & Light (feat. Hemlock Ernst)", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 06 Movement & Light (ft. Hemlock Ernst).mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 7,  title: "All At Once", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 07 All At Once.mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 8,  title: "Push Pressure Points (feat. Dillon)", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 08 Push Pressure Points (ft. Dillon).mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 9,  title: "Read The Room", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 09 Read The Room.mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 10, title: "That Many of 'Em", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 10 That Many of 'Em.mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 11, title: "Brainstorm With Showers (feat. Jesse The Tree)", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 11 Brainstorm With Showers (ft. Jesse The Tree).mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 12, title: "Bubble Wrap", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 12 Bubble Wrap.mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 13, title: "So It Goes", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 13 So It Goes.mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 14, title: "Little Wins", artist: "NAHreally & The Expert", src: "songs/NAHreally & The Expert - BLIP - 14 Little Wins.mp3", artwork: "artwork/blip cover.jpg", album: "BLIP", year: 2024, albumUrl: "https://theexpert.bandcamp.com/album/blip", lyrics: "" },
  { track: 1,  title: "Lay Claim", artist: "NAHreally", src: "songs/NAHreally - HACKINAWAY - 01 Lay Claim.mp3", artwork: "artwork/hackinaway cover.jpg", album: "HACKINAWAY", year: 2022, albumUrl: "https://nahreally.bandcamp.com/album/hackinaway", lyrics: "" },
  { track: 2,  title: "Sick Days", artist: "NAHreally", src: "songs/NAHreally - HACKINAWAY - 02 Sick Days.mp3", artwork: "artwork/hackinaway cover.jpg", album: "HACKINAWAY", year: 2022, albumUrl: "https://nahreally.bandcamp.com/album/hackinaway", lyrics: "" },
  { track: 3,  title: "Rap Practice", artist: "NAHreally", src: "songs/NAHreally - HACKINAWAY - 03 Rap Practice.mp3", artwork: "artwork/hackinaway cover.jpg", album: "HACKINAWAY", year: 2022, albumUrl: "https://nahreally.bandcamp.com/album/hackinaway", lyrics: "" },
  { track: 4,  title: "Hackin' Away", artist: "NAHreally", src: "songs/NAHreally - HACKINAWAY - 04 Hackin' Away.mp3", artwork: "artwork/hackinaway cover.jpg", album: "HACKINAWAY", year: 2022, albumUrl: "https://nahreally.bandcamp.com/album/hackinaway", lyrics: "" },
  { track: 5,  title: "Simple Truth, Matter Of Fact", artist: "NAHreally", src: "songs/NAHreally - HACKINAWAY - 05 Simple Truth, Matter Of Fact.mp3", artwork: "artwork/hackinaway cover.jpg", album: "HACKINAWAY", year: 2022, albumUrl: "https://nahreally.bandcamp.com/album/hackinaway", lyrics: "" },
  { track: 6,  title: "Already", artist: "NAHreally", src: "songs/NAHreally - HACKINAWAY - 06 Already.mp3", artwork: "artwork/hackinaway cover.jpg", album: "HACKINAWAY", year: 2022, albumUrl: "https://nahreally.bandcamp.com/album/hackinaway", lyrics: "" },
  { track: 7,  title: "Plain Cheerios", artist: "NAHreally", src: "songs/NAHreally - HACKINAWAY - 07 Plain Cheerios.mp3", artwork: "artwork/hackinaway cover.jpg", album: "HACKINAWAY", year: 2022, albumUrl: "https://nahreally.bandcamp.com/album/hackinaway", lyrics: "" },
  { track: 8,  title: "Like Minds", artist: "NAHreally", src: "songs/NAHreally - HACKINAWAY - 08 Like Minds.mp3", artwork: "artwork/hackinaway cover.jpg", album: "HACKINAWAY", year: 2022, albumUrl: "https://nahreally.bandcamp.com/album/hackinaway", lyrics: "" },
  { track: 9,  title: "Brittle Brain", artist: "NAHreally", src: "songs/NAHreally - HACKINAWAY - 09 Brittle Brain.mp3", artwork: "artwork/hackinaway cover.jpg", album: "HACKINAWAY", year: 2022, albumUrl: "https://nahreally.bandcamp.com/album/hackinaway", lyrics: "" },
  { track: 10, title: "I Am Amazing", artist: "NAHreally", src: "songs/NAHreally - HACKINAWAY - 10 I Am Amazing.mp3", artwork: "artwork/hackinaway cover.jpg", album: "HACKINAWAY", year: 2022, albumUrl: "https://nahreally.bandcamp.com/album/hackinaway", lyrics: "" },
  { track: 1,  title: "Head Grew", artist: "NAHreally", src: "songs/NAHreally - Loose Around The Edges - 01 Head Grew.mp3", artwork: "artwork/loose around the edges cover.jpg", album: "Loose Around The Edges", year: 2021, albumUrl: "https://nahreally.bandcamp.com/album/loose-around-the-edges", lyrics: "" },
  { track: 2,  title: "By Hook or By Crook", artist: "NAHreally", src: "songs/NAHreally - Loose Around The Edges - 02 By Hook or By Crook.mp3", artwork: "artwork/loose around the edges cover.jpg", album: "Loose Around The Edges", year: 2021, albumUrl: "https://nahreally.bandcamp.com/album/loose-around-the-edges", lyrics: "" },
  { track: 3,  title: "Wishful Thoughts on Beliefs Held", artist: "NAHreally", src: "songs/NAHreally - Loose Around The Edges - 03 Wishful Thoughts on Beliefs Held.mp3", artwork: "artwork/loose around the edges cover.jpg", album: "Loose Around The Edges", year: 2021, albumUrl: "https://nahreally.bandcamp.com/album/loose-around-the-edges", lyrics: "" },
  { track: 4,  title: "Civic (Interlude)", artist: "NAHreally", src: "songs/NAHreally - Loose Around The Edges - 04 Civic (Interlude).mp3", artwork: "artwork/loose around the edges cover.jpg", album: "Loose Around The Edges", year: 2021, albumUrl: "https://nahreally.bandcamp.com/album/loose-around-the-edges", lyrics: "" },
  { track: 5,  title: "Civic", artist: "NAHreally", src: "songs/NAHreally - Loose Around The Edges - 05 Civic.mp3", artwork: "artwork/loose around the edges cover.jpg", album: "Loose Around The Edges", year: 2021, albumUrl: "https://nahreally.bandcamp.com/album/loose-around-the-edges", lyrics: "" },
  { track: 6,  title: "Don't Send Me Clips of People Rapping on Ellen", artist: "NAHreally", src: "songs/NAHreally - Loose Around The Edges - 06 Don't Send Me Clips of People Rapping on Ellen.mp3", artwork: "artwork/loose around the edges cover.jpg", album: "Loose Around The Edges", year: 2021, albumUrl: "https://nahreally.bandcamp.com/album/loose-around-the-edges", lyrics: "" },
  { track: 7,  title: "Curmudgeon Emerge in Me", artist: "NAHreally", src: "songs/NAHreally - Loose Around The Edges - 07 Curmudgeon Emerge in Me.mp3", artwork: "artwork/loose around the edges cover.jpg", album: "Loose Around The Edges", year: 2021, albumUrl: "https://nahreally.bandcamp.com/album/loose-around-the-edges", lyrics: "" },
  { track: 8,  title: "Loose Around The Edges", artist: "NAHreally", src: "songs/NAHreally - Loose Around The Edges - 08 Loose Around The Edges.mp3", artwork: "artwork/loose around the edges cover.jpg", album: "Loose Around The Edges", year: 2021, albumUrl: "https://nahreally.bandcamp.com/album/loose-around-the-edges", lyrics: "" },
  { track: 9,  title: "Bowl Cut", artist: "NAHreally", src: "songs/NAHreally - Loose Around The Edges - 09 Bowl Cut.mp3", artwork: "artwork/loose around the edges cover.jpg", album: "Loose Around The Edges", year: 2021, albumUrl: "https://nahreally.bandcamp.com/album/loose-around-the-edges", lyrics: "" },
  { track: 10, title: "Cucumbers", artist: "NAHreally", src: "songs/NAHreally - Loose Around The Edges - 10 Cucumbers.mp3", artwork: "artwork/loose around the edges cover.jpg", album: "Loose Around The Edges", year: 2021, albumUrl: "https://nahreally.bandcamp.com/album/loose-around-the-edges", lyrics: "" },
];

// assign chronological index sorted by year then track
const sorted = [...songs].sort((a, b) => (a.year - b.year) || (a.track - b.track));
sorted.forEach((song, i) => { song.chronoIndex = i + 1; });

// --- player logic ---

const player = document.getElementById("player");
const artwork = document.getElementById("artwork");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const lyricsWrap = document.getElementById("lyrics-wrap");
const lyricsEl = document.getElementById("lyrics");
const songAlbum = document.getElementById("song-album");
const songAlbumLink = document.getElementById("song-album-link");
const songTrackLabel = document.getElementById("song-track-label");
const songYear = document.getElementById("song-year");
const songCounter = document.getElementById("song-counter");
const scrubber = document.getElementById("scrubber");
const timeCurrent = document.getElementById("time-current");
const timeDuration = document.getElementById("time-duration");
const btnPlayPause = document.getElementById("btn-playpause");
const btnPrev = document.getElementById("btn-prev");

let order = [];
let orderIndex = 0;

function updatePrevBtn() {
  btnPrev.disabled = orderIndex === 0;
  btnPrev.style.opacity = orderIndex === 0 ? "0.25" : "";
  btnPrev.style.cursor = orderIndex === 0 ? "default" : "";
}

function shuffle(arr) {
  const a = [...arr.keys()];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function load(index) {
  const song = songs[index];
  player.src = song.src;
  artwork.src = song.artwork;
  const featMatch = song.title.match(/\((ft\.|feat)/i);
  const parenIdx2 = featMatch ? featMatch.index : -1;
  if (parenIdx2 !== -1) {
    songTitle.innerHTML = song.title.slice(0, parenIdx2).trimEnd() +
      "<span style='display:block;font-size:0.85rem;font-weight:400'>" + song.title.slice(parenIdx2) + "</span>";
  } else {
    songTitle.textContent = song.title;
  }
  songArtist.textContent = song.artist;
  if (song.album) {
    songTrackLabel.textContent = song.track ? `Track ${song.track} from ` : "From ";
    songAlbumLink.textContent = song.album;
    songYear.textContent = song.year ? ` (${song.year})` : "";
    songAlbumLink.href = song.albumUrl ?? "#";
    songAlbum.hidden = false;
  } else {
    songAlbum.hidden = true;
  }

  songCounter.textContent = `${String(song.chronoIndex).padStart(2, "0")} / ${String(songs.length).padStart(2, "0")}`;
  updatePrevBtn();
  if (song.lyrics) {
    lyricsEl.textContent = song.lyrics;
    lyricsWrap.hidden = false;
  } else {
    lyricsWrap.hidden = true;
  }
}

function playNext() {
  orderIndex = (orderIndex + 1) % order.length;
  // reshuffle when we've played through everything
  if (orderIndex === 0) order = shuffle(songs);
  load(order[orderIndex]);
  player.play();
}

function playPrev() {
  orderIndex = (orderIndex - 1 + order.length) % order.length;
  load(order[orderIndex]);
  player.play();
}

function init() {
  if (!songs.length) {
    songTitle.textContent = "No songs yet";
    songArtist.textContent = "Add songs to app.js";
    return;
  }
  order = shuffle(songs);
  orderIndex = 0;
  load(order[orderIndex]);
  player.play().catch(() => {
    document.getElementById("tap-overlay").classList.add("visible");
  });
}

document.getElementById("tap-btn").addEventListener("click", () => {
  document.getElementById("tap-overlay").classList.remove("visible");
  player.play();
});

function fmt(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

function updatePlayPause() {
  btnPlayPause.innerHTML = player.paused
    ? "&#9654;"
    : "<span style='display:inline-block;transform:scaleY(1.6)'>&#9646;&#9646;</span>";
}

player.addEventListener("timeupdate", () => {
  if (!player.duration) return;
  scrubber.value = (player.currentTime / player.duration) * 100;
  timeCurrent.textContent = fmt(player.currentTime);
});

player.addEventListener("durationchange", () => {
  timeDuration.textContent = fmt(player.duration);
});

player.addEventListener("play", updatePlayPause);
player.addEventListener("pause", updatePlayPause);

scrubber.addEventListener("input", () => {
  player.currentTime = (scrubber.value / 100) * player.duration;
});

btnPlayPause.addEventListener("click", () => {
  player.paused ? player.play() : player.pause();
});

player.addEventListener("ended", playNext);
document.getElementById("btn-next").addEventListener("click", playNext);
document.getElementById("btn-prev").addEventListener("click", playPrev);

init();
