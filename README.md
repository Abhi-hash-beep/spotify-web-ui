![Languages](https://img.shields.io/github/languages/count/your-username/spotify-clone)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

### ## Challenges & Key Learnings
One of the main challenges was figuring out how to display the correct songs on the `playlist.html` page.
I learned how to use **URL Search Parameters** (`URLSearchParams` in JavaScript) to pass data between pages. 
This allowed me to create a link like `playlist.html?name=Lofi+Beats` and then use JavaScript to read the playlist name from the URL, find the matching data, and dynamically build the song list.
Of course.

### ## File Structure
spotify-clone/
├── 📄 index.html
├── 📄 search.html
├── 📄 playlist.html
├── 🎨 style.css
└── 📜 script.js

### ## Future Improvements
- [ ] **Functional Player:** Make the play, pause, and progress bar controls functional.
- [ ] **API Integration:** Replace the dummy data with real data by connecting to the official Spotify API.
- [ ] **Advanced Animations:** Add page transitions and scroll animations using a library like GSAP.
- [ ] **Volume Control:** Implement a working volume slider.
