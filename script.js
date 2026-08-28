/* ==========================================
   PAMSA TUBE
   Main JavaScript
========================================== */


/* =========================
   VIDEO DATA
========================= */

const videos = [

  {
    id: 1,
    title: "Amazing Nature Around The World",
    channel: "Nature World",
    category: "Trending",
    views: "2.4M",
    date: "2 days ago",
    duration: "8:42",
    avatar: "N",
    color: "#16803c",
    thumbnail:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  {
    id: 2,
    title: "Learn JavaScript From Zero",
    channel: "Code Academy",
    category: "Education",
    views: "845K",
    date: "1 week ago",
    duration: "15:24",
    avatar: "C",
    color: "#1565c0",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  {
    id: 3,
    title: "Best Gaming Moments",
    channel: "Pamsa Gaming",
    category: "Gaming",
    views: "1.8M",
    date: "3 days ago",
    duration: "10:18",
    avatar: "P",
    color: "#8e24aa",
    thumbnail:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  {
    id: 4,
    title: "Relaxing Music For Study",
    channel: "Study Beats",
    category: "Music",
    views: "5.1M",
    date: "1 month ago",
    duration: "1:02:34",
    avatar: "S",
    color: "#ef6c00",
    thumbnail:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  {
    id: 5,
    title: "Future Technology You Should Know",
    channel: "Tech Daily",
    category: "Technology",
    views: "923K",
    date: "5 days ago",
    duration: "12:37",
    avatar: "T",
    color: "#00838f",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  {
    id: 6,
    title: "Top Sports Highlights",
    channel: "Sports Central",
    category: "Sports",
    views: "3.2M",
    date: "Yesterday",
    duration: "9:55",
    avatar: "S",
    color: "#2e7d32",
    thumbnail:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  {
    id: 7,
    title: "How The Universe Works",
    channel: "Science Hub",
    category: "Education",
    views: "1.3M",
    date: "2 weeks ago",
    duration: "18:21",
    avatar: "S",
    color: "#283593",
    thumbnail:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  {
    id: 8,
    title: "Beautiful Travel Places",
    channel: "Travel With Me",
    category: "Trending",
    views: "742K",
    date: "4 days ago",
    duration: "11:46",
    avatar: "T",
    color: "#00897b",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  {
    id: 9,
    title: "Latest World News",
    channel: "Pamsa News",
    category: "News",
    views: "632K",
    date: "6 hours ago",
    duration: "7:18",
    avatar: "P",
    color: "#c62828",
    thumbnail:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  {
    id: 10,
    title: "Easy Coding Projects For Beginners",
    channel: "Coding India",
    category: "Technology",
    views: "389K",
    date: "3 weeks ago",
    duration: "14:02",
    avatar: "C",
    color: "#3949ab",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  {
    id: 11,
    title: "Chill Music Mix",
    channel: "Pamsa Music",
    category: "Music",
    views: "2.7M",
    date: "1 month ago",
    duration: "45:30",
    avatar: "P",
    color: "#ad1457",
    thumbnail:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  },

  {
    id: 12,
    title: "Gaming Setup Tour 2026",
    channel: "Gamer Zone",
    category: "Gaming",
    views: "567K",
    date: "6 days ago",
    duration: "13:15",
    avatar: "G",
    color: "#6a1b9a",
    thumbnail:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
  }

];


/* =========================
   VARIABLES
========================= */

let currentVideo = null;
let likedVideos = {};
let currentCategory = "All";


/* =========================
   DOM ELEMENTS
========================= */

const videoGrid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const playerOverlay = document.getElementById("playerOverlay");
const videoPlayer = document.getElementById("videoPlayer");

const playerTitle = document.getElementById("playerTitle");
const playerViews = document.getElementById("playerViews");
const playerDate = document.getElementById("playerDate");

const playerChannel = document.getElementById("playerChannel");
const playerSubscribers = document.getElementById("playerSubscribers");

const channelAvatar = document.getElementById("channelAvatar");

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

const toast = document.getElementById("toast");

const loginOverlay = document.getElementById("loginOverlay");

const pageTitle = document.getElementById("pageTitle");


/* =========================
   DISPLAY VIDEOS
========================= */

function displayVideos(list) {

  videoGrid.innerHTML = "";

  if (list.length === 0) {

    videoGrid.innerHTML = `
      <div style="
        grid-column:1/-1;
        text-align:center;
        padding:70px 20px;
      ">
        <div style="font-size:50px;">🔎</div>
        <h2>No videos found</h2>
        <p style="color:#666;margin-top:8px;">
          Try another search.
        </p>
      </div>
    `;

    return;
  }


  list.forEach(video => {

    const card = document.createElement("article");

    card.className = "video-card";

    card.onclick = () => openVideo(video.id);

    card.innerHTML = `

      <div class="thumbnail">

        <img
          src="${video.thumbnail}"
          alt="${escapeHTML(video.title)}"
          loading="lazy"
        >

        <span class="duration">
          ${video.duration}
        </span>

      </div>

      <div class="video-details">

        <div
          class="creator-avatar"
          style="background:${video.color}"
        >
          ${video.avatar}
        </div>

        <div class="video-info">

          <div class="video-title">
            ${escapeHTML(video.title)}
          </div>

          <div class="channel-name">
            ${escapeHTML(video.channel)}
          </div>

          <div class="video-meta">
            ${video.views} views • ${video.date}
          </div>

        </div>

      </div>
    `;

    videoGrid.appendChild(card);

  });

}


/* =========================
   OPEN VIDEO
========================= */

function openVideo(id) {

  currentVideo = videos.find(video => video.id === id);

  if (!currentVideo) return;


  playerTitle.textContent = currentVideo.title;

  playerViews.textContent =
    currentVideo.views + " views";

  playerDate.textContent =
    currentVideo.date;

  playerChannel.textContent =
    currentVideo.channel;

  playerSubscribers.textContent =
    Math.floor(Math.random() * 90 + 10) + "K subscribers";

  channelAvatar.textContent =
    currentVideo.avatar;

  channelAvatar.style.background =
    currentVideo.color;


  videoPlayer.src = currentVideo.video;

  playerOverlay.classList.add("show");

  document.body.style.overflow = "hidden";


  updateLikeUI();

  loadComments();


  videoPlayer.play().catch(() => {});

}


/* =========================
   CLOSE VIDEO
========================= */

function closePlayer() {

  videoPlayer.pause();

  videoPlayer.src = "";

  playerOverlay.classList.remove("show");

  document.body.style.overflow = "";

}


/* Close when clicking outside */

playerOverlay.addEventListener("click", function(e) {

  if (e.target === playerOverlay) {
    closePlayer();
  }

});


/* =========================
   LIKE VIDEO
========================= */

function likeVideo() {

  if (!currentVideo) return;

  const id = currentVideo.id;

  if (likedVideos[id]) {

    likedVideos[id] = false;

    showToast("Like removed");

  } else {

    likedVideos[id] = true;

    showToast("Video liked 👍");

  }

  updateLikeUI();

}


function updateLikeUI() {

  if (!currentVideo) return;

  const liked = likedVideos[currentVideo.id];

  likeBtn.style.background =
    liked ? "#111" : "#f2f2f2";

  likeBtn.style.color =
    liked ? "white" : "#111";

  likeCount.textContent =
    liked ? "1" : "0";

}


/* =========================
   SEARCH
========================= */

function searchVideos() {

  const query =
    searchInput.value.trim().toLowerCase();


  if (!query) {

    filterCategory(currentCategory);

    return;

  }


  const results = videos.filter(video =>

    video.title.toLowerCase().includes(query) ||

    video.channel.toLowerCase().includes(query) ||

    video.category.toLowerCase().includes(query)

  );


  pageTitle.textContent =
    `Search results for "${searchInput.value}"`;

  displayVideos(results);

}


searchBtn.addEventListener(
  "click",
  searchVideos
);


searchInput.addEventListener(
  "keydown",
  function(e) {

    if (e.key === "Enter") {
      searchVideos();
    }

  }
);


/* =========================
   CATEGORY FILTER
========================= */

function filterCategory(category) {

  currentCategory = category;

  searchInput.value = "";

  document.querySelectorAll(".category")
    .forEach(button => {

      button.classList.remove("active");

      if (
        button.textContent.trim() === category
      ) {
        button.classList.add("active");
      }

    });


  let results;

  if (category === "All") {

    results = videos;

    pageTitle.textContent =
      "Recommended videos";

  }

  else {

    results = videos.filter(
      video => video.category === category
    );

    pageTitle.textContent =
      category + " videos";

  }


  displayVideos(results);

}


/* =========================
   HOME
========================= */

function goHome() {

  currentCategory = "All";

  searchInput.value = "";

  document.querySelectorAll(".category")
    .forEach(button => {

      button.classList.remove("active");

    });

  document.querySelector(".category")
    .classList.add("active");

  pageTitle.textContent =
    "Recommended videos";

  displayVideos(videos);

}


/* =========================
   COMMENTS
========================= */

function getCommentKey() {

  if (!currentVideo) return null;

  return "pamsatube_comments_" +
    currentVideo.id;

}


function loadComments() {

  const list =
    document.getElementById("commentsList");

  list.innerHTML = "";


  const key = getCommentKey();

  const comments =
    JSON.parse(
      localStorage.getItem(key) || "[]"
    );


  if (comments.length === 0) {

    list.innerHTML = `
      <p style="color:#777;font-size:14px;">
        No comments yet. Be the first to comment.
      </p>
    `;

    return;

  }


  comments.reverse().forEach(comment => {

    const item =
      document.createElement("div");

    item.className = "comment";

    item.innerHTML = `

      <div class="comment-avatar">
        ${escapeHTML(comment.name.charAt(0))}
      </div>

      <div>

        <div class="comment-name">
          ${escapeHTML(comment.name)}
        </div>

        <div class="comment-text">
          ${escapeHTML(comment.text)}
        </div>

      </div>
    `;

    list.appendChild(item);

  });

}


function addComment() {

  if (!currentVideo) return;


  const input =
    document.getElementById("commentInput");

  const text =
    input.value.trim();


  if (!text) {

    showToast("Write a comment first");

    return;

  }


  const key = getCommentKey();

  const comments =
    JSON.parse(
      localStorage.getItem(key) || "[]"
    );


  comments.push({

    name: "Pamsa User",

    text: text

  });


  localStorage.setItem(
    key,
    JSON.stringify(comments)
  );


  input.value = "";

  loadComments();

  showToast("Comment added 💬");

}


/* =========================
   SHARE
========================= */

function shareVideo() {

  if (!currentVideo) return;


  const shareData = {

    title: currentVideo.title,

    text:
      "Watch this video on PamsaTube",

    url:
      window.location.href

  };


  if (
    navigator.share
  ) {

    navigator.share(shareData)
      .catch(() => {});

  } else {

    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {

        showToast(
          "Video link copied!"
        );

      });

  }

}


/* =========================
   SAVE
========================= */

function saveVideo() {

  if (!currentVideo) return;

  showToast(
    "Video saved to Watch later 🔖"
  );

}


/* =========================
   SUBSCRIBE
========================= */

function subscribeChannel() {

  showToast(
    "Subscribed 🔔"
  );

}


/* =========================
   SIDEBAR
========================= */

document
  .getElementById("menuBtn")
  .addEventListener(
    "click",
    function() {

      sidebar.classList.toggle("open");

    }
  );


/* =========================
   LOGIN
========================= */

document
  .getElementById("profileBtn")
  .addEventListener(
    "click",
    function() {

      loginOverlay.classList.add("show");

    }
  );


function closeLogin() {

  loginOverlay.classList.remove("show");

}


function fakeLogin() {

  closeLogin();

  showToast(
    "Demo login successful 👤"
  );

}


loginOverlay.addEventListener(
  "click",
  function(e) {

    if (e.target === loginOverlay) {
      closeLogin();
    }

  }
);


/* =========================
   SIDEBAR MESSAGE
========================= */

function showMessage(text) {

  showToast(
    text + " section will be added soon."
  );

}


/* =========================
   TOAST
========================= */

let toastTimer;

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(
    () => {

      toast.classList.remove("show");

    },
    2500
  );

}


/* =========================
   SECURITY HELPER
========================= */

function escapeHTML(text) {

  const div =
    document.createElement("div");

  div.textContent = text;

  return div.innerHTML;

}


/* =========================
   INITIAL LOAD
========================= */

displayVideos(videos);


/* =========================
   KEYBOARD SHORTCUT
========================= */

document.addEventListener(
  "keydown",
  function(e) {

    if (e.key === "Escape") {

      closePlayer();

      closeLogin();

    }

  }
);
