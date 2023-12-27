const music = new Audio('audio/1 - HareHareYa  - 感情を込めてハレハレヤ 歌ってみた verSou.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Harehare Ya <br>
        <div class="subtitle">Sou</div>`,
        poster: "img/1.jpg"
    },

    {
        id: 2,
        songName: `Kawaikute Gomen <br>
        <div class="subtitle">HoneyWorks</div>`,
        poster: "img/2.jpg"
    },

    {
        id: 3,
        songName: `Lemon <br>
        <div class="subtitle">Kenshi Yonezu</div>`,
        poster: "img/3.jpg"
    },

    {
        id: 4,
        songName: `Renai Circulation <br>
        <div class="subtitle">Kana Hanazawa</div>`,
        poster: "img/4.jpg"
    },

    {
        id: 5,
        songName: `Uchiage Hanabi <br>
        <div class="subtitle">DAOKO x Kenshi Yonezu</div>`,
        poster: "img/5.jpg"
    },

    {
        id: 6,
        songName: `Best Friend <br>
        <div class="subtitle">Nishino Kana</div>`,
        poster: "img/6.jpg"
    },

    {
        id: 7,
        songName: `SHUKUSEI!! Loli Kami Requiem <br>
        <div class="subtitle">Shigure Ui</div>`,
        poster: "img/7.jpg"
    },

    {
        id: 8,
        songName: `Yume To Hazakura <br>
        <div class="subtitle">Kurenai</div>`,
        poster: "img/8.jpg"
    },

    {
        id: 9,
        songName: `Hotaru <br>
        <div class="subtitle">Fujita Maiko</div>`,
        poster: "img/9.jpg"
    },

    {
        id: 10,
        songName: `My Truth <br>
        <div class="subtitle">Rondo Capriccioso</div>`,
        poster: "img/10.jpg"
    }

]




Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('hs')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
    }
})






let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click', () => {
    Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    Artists_bx.scrollLeft -= 330;
});