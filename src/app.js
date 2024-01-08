const music = new Audio('audio/11.mp3');
// music.play();


//Danh sach nhac
const songs = [
    {
        id: "1",
        songName: `Harehare Ya <br>
        <div class="subtitle">Sou</div>`,
        poster: "img/1.jpg",
    },

    {
        id: "2",
        songName: `Kawaikute Gomen <br>
        <div class="subtitle">HoneyWorks</div>`,
        poster: "img/2.jpg",
    },

    {
        id: "3",
        songName: `Lemon <br>
        <div class="subtitle">Kenshi Yonezu</div>`,
        poster: "img/3.jpg",
    },

    {
        id: "4",
        songName: `Renai Circulation <br>
        <div class="subtitle">Kana Hanazawa</div>`,
        poster: "img/4.jpg",
    },

    {
        id: "5",
        songName: `Uchiage Hanabi <br>
        <div class="subtitle">DAOKO x Kenshi Yonezu</div>`,
        poster: "img/5.jpg",
    },

    {
        id: "6",
        songName: `Best Friend <br>
        <div class="subtitle">Nishino Kana</div>`,
        poster: "img/6.jpg",
    },

    {
        id: "7",
        songName: `SHUKUSEI!! Loli Kami Requiem <br>
        <div class="subtitle">Shigure Ui</div>`,
        poster: "img/7.jpg",
    },

    {
        id: "8",
        songName: `Yume To Hazakura <br>
        <div class="subtitle">Kurenai</div>`,
        poster: "img/8.jpg",
    },

    {
        id: "9",
        songName: `Hotaru <br>
        <div class="subtitle">Fujita Maiko</div>`,
        poster: "img/9.jpg",
    },

    {
        id: "10",
        songName: `My Truth <br>
        <div class="subtitle">Rondo Capriccioso</div>`,
        poster: "img/10.jpg",
    },

    {
        id: "11",
        songName: `Diễn Viên Lofi Ver <br>
        <div class="subtitle">Ngô Anh Đạt x Freak D</div>`,
        poster: "img/11.jpg",
    },

    {
        id: "12",
        songName: `31072 Lofi Ver<br>
        <div class="subtitle">DuongG x Nâu x Wn x Freak D</div>`,
        poster: "img/12.jpg",
    },

    {
        id: "13",
        songName: `Anh Mệt Rồi Lofi Ver<br>
        <div class="subtitle">Anh Quân Idol x Freak D</div>`,
        poster: "img/13.jpg",
    },

    {
        id: "14",
        songName: `Đánh Mất Em Lofi Ver<br>
        <div class="subtitle">Quang Đăng Trần x Freak D</div>`,
        poster: "img/14.jpg",
    },

    {
        id: "15",
        songName: `Đường Tôi Chở Em Về Lofi Ver<br>
        <div class="subtitle">buitruonglinh x Freak D</div>`,
        poster: "img/15.jpg",
    },

    {
        id: "16",
        songName: `Em Có Nghe Lofi Ver<br>
        <div class="subtitle">Kha x Freak D</div>`,
        poster: "img/16.jpg",
    },

    {
        id: "17",
        songName: `Như Anh Đã Thấy Em Lofi Ver<br>
        <div class="subtitle">PhucXp ft Freak D</div>`,
        poster: "img/17.jpg",
    },

    {
        id: "18",
        songName: `Nợ Ai Đó Lời Xin Lỗi Lofi ver<br>
        <div class="subtitle">Bozitt x Freak D</div>`,
        poster: "img/18.jpg",
    },

    {
        id: "19",
        songName: `Thì Thôi Lofi Ver<br>
        <div class="subtitle">Reddy x Freak D</div>`,
        poster: "img/19.jpg",
    },

    {
        id: "20",
        songName: `Tình Yêu Màu Hồng Lofi Ver<br>
        <div class="subtitle">Hồ Văn Quý x Xám x Freak D</div>`,
        poster: "img/20.jpg",
    },

    {
        id: "21",
        songName: `Có Thể Hay Không<br>
        <div class="subtitle">Trương Tử Hào</div>`,
        poster: "img/21.jpg",
    },

    {
        id: "22",
        songName: `Giày Cao Gót Màu Đỏ<br>
        <div class="subtitle">Luân Tang</div>`,
        poster: "img/22.jpg",
    },

    {
        id: "23",
        songName: `Ngôi sao sáng nhất trong bầu trời đêm<br>
        <div class="subtitle">Từ Vi</div>`,
        poster: "img/23.jpg",
    },

    {
        id: "24",
        songName: `Một Đường Nở Hoa<br>
        <div class="subtitle">Ôn Dịch Tâm</div>`,
        poster: "img/24.jpg",
    },

    {
        id: "25",
        songName: `Nổi Gió Rồi<br>
        <div class="subtitle">Châu Thâm</div>`,
        poster: "img/25.jpg",
    },

    {
        id: "26",
        songName: `Sao Trời Biển Rộng<br>
        <div class="subtitle">Hoàng Tiêu Vân</div>`,
        poster: "img/26.jpg",
    },

    {
        id: "27",
        songName: `Thiếu Niên<br>
        <div class="subtitle">Mộng Nhiên</div>`,
        poster: "img/27.jpg",
    },

    {
        id: "28",
        songName: `Áng Văn<br>
        <div class="subtitle">Trương Thiều Hàm, Vương Hách Dã</div>`,
        poster: "img/28.jpg",
    },

    {
        id: "29",
        songName: `Bạch Nguyệt Quang Và Nốt Chu Sa<br>
        <div class="subtitle">Đại Tử</div>`,
        poster: "img/29.jpg",
    },

    {
        id: "30",
        songName: `Phi Điểu Và Ve Sầu<br>
        <div class="subtitle">Nhậm Nhiên</div>`,
        poster: "img/30.jpg",
    },

    {
        id: "31",
        songName: `Nơi Này Có Anh<br>
        <div class="subtitle">Sơn Tùng MTP</div>`,
        poster: "img/31.jpg",
    },

    {
        id: "32",
        songName: `Suýt Nữa Thì<br>
        <div class="subtitle">Andiez</div>`,
        poster: "img/32.jpg",
    },

    {
        id: "33",
        songName: `Id 072019 3107 ft 267<br>
        <div class="subtitle">Wn</div>`,
        poster: "img/33.jpg",
    },

    {
        id: "34",
        songName: `Nấu Ăn Cho Em<br>
        <div class="subtitle">Đen ft PiaLinh</div>`,
        poster: "img/34.jpg",
    },

    {
        id: "35",
        songName: `Bông Hoa Đẹp Nhất<br>
        <div class="subtitle">Quân AP</div>`,
        poster: "img/35.jpg",
    },

    {
        id: "36",
        songName: `Hoa Nở Không Màu<br>
        <div class="subtitle">Hoài Lâm</div>`,
        poster: "img/36.jpg",
    },

    {
        id: "37",
        songName: `Một Bước Yêu Vạn Dặm Đau<br>
        <div class="subtitle">Mr Siro</div>`,
        poster: "img/37.jpg",
    },

    {
        id: "38",
        songName: `Lạ Lùng<br>
        <div class="subtitle">Vũ</div>`,
        poster: "img/38.jpg",
    },

    {
        id: "39",
        songName: `Ánh Sao Và Bầu Trời<br>
        <div class="subtitle">TRI x Cá</div>`,
        poster: "img/39.jpg",
    },

    {
        id: "40",
        songName: `Hẹn Em Ở Lần Yêu Thứ 2<br>
        <div class="subtitle">Nguyenn x Dangtuanvu</div>`,
        poster: "img/40.jpg",
    },
]


//Lay ten bai hat va poster
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    const imgElement = e.getElementsByTagName('img')[0];
    const h5Element = e.getElementsByTagName('h5')[0];

    if (imgElement && h5Element && songs[i] && songs[i].poster) {
        imgElement.src = songs[i].poster;
        h5Element.innerHTML = songs[i].songName;
    }

});

//Play va Pause
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, 0.0)';
    })
}

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}


//Dong bo ten bai hat va poster
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0.1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


//Thanh hien thi thoi gian va tua nhanh
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});




//Thanh hien thi am luong va tang giam am luong
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0 && vol.value <= 30) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 30 && vol.value <= 70) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 70) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});


//Quay lai bai hat truoc do va tien toi bai hat sau do
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = songs.length;
        // index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

})

next.addEventListener('click', () => {
    index++;
    // if (index > Array.from(document.getElementsByClassName('songItem')).length) {
    if (index > songs.length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0.1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})


// Tu dong chuyen bai khi het
music.addEventListener('ended', () => {
    index++;
    if (index > songs.length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0.1)";

    makeAllplays();
    document.getElementById(index).classList.remove('bi-play-circle-fill');
    document.getElementById(index).classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});


//Nut di chuyen thanh scrollball
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