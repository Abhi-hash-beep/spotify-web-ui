document.addEventListener('DOMContentLoaded', () => {
    const musicData = {
        "Lofi Beats": {
            description: "Chill beats, lofi vibes, all you need to relax and study.",
            songs: [
                { title: "Morning Dew", artist: "Chillhop Music", duration: "3:12" },
                { title: "Sunset Vibes", artist: "Lofi Girl", duration: "2:45" },
                { title: "Misty Mountains", artist: "Cozy Corner", duration: "4:01" },
                { title: "Urban Dreams", artist: "Beat Provider", duration: "2:55" },
            ]
        },
        "Bollywood Tadka": {
            description: "The hottest tracks from Bollywood.",
            songs: [
                { title: "Ghungroo", artist: "Arijit Singh", duration: "5:02" },
                { title: "Jai Jai Shivshankar", artist: "Vishal Dadlani", duration: "3:50" },
                { title: "Malhari", artist: "Vishal Dadlani", duration: "4:05" },
            ]
        },
        "Top Hits - Bengaluru": {
            description: "The pulse of Bengaluru's music scene.",
            songs: [
                { title: "Belageddu", artist: "Vijay Prakash", duration: "3:30" },
                { title: "Ra Ra Rakkamma", artist: "Nakash Aziz", duration: "3:40" },
                { title: "Tagaru Banthu Tagaru", artist: "Anthony Daasan", duration: "4:10" },
            ]
        }
    };

    if (window.location.pathname.endsWith("playlist.html")) {
        const params = new URLSearchParams(window.location.search);
        const playlistName = params.get('name');

        if (playlistName && musicData[playlistName]) {
            const playlist = musicData[playlistName];
            
            document.querySelector('.playlist-title').textContent = playlistName;
            document.querySelector('.playlist-description').textContent = playlist.description;

            const songListEl = document.querySelector('.song-list');
            songListEl.innerHTML = '';
            
            playlist.songs.forEach((song, index) => {
                const songEl = document.createElement('div');
                songEl.classList.add('song-item');
                songEl.innerHTML = `
                    <span>${index + 1}</span>
                    <span class="song-title">${song.title}</span>
                    <span class="song-artist">${song.artist}</span>
                    <span class="song-duration">${song.duration}</span>
                `;
                songListEl.appendChild(songEl);
            });
        }
    }
});