<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PamsaTube</title>
  <style>
    body { font-family: sans-serif; background: #121212; color: white; margin: 0; padding: 20px; text-align: center; }
    button { background: #ff0000; color: white; border: none; padding: 12px 24px; border-radius: 25px; font-size: 16px; font-weight: bold; cursor: pointer; margin: 10px 0; }
    .box { background: #1e1e1e; padding: 20px; border-radius: 10px; max-width: 400px; margin: 20px auto; }
    input { width: 90%; padding: 10px; margin: 8px 0; border-radius: 5px; border: 1px solid #444; background: #222; color: white; }
    video { width: 100%; border-radius: 8px; margin-top: 10px; }
  </style>

  <!-- Firebase Scripts (v9 Compat) -->
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>
</head>
<body>

  <h1>🔥 PamsaTube</h1>
  
  <div id="userStatus">जाँच हो रही है...</div>
  
  <button id="loginBtn" onclick="handleLogin()">Google Sign In</button>
  <button id="logoutBtn" onclick="handleLogout()" style="display:none; background:#555;">Logout</button>

  <div class="box" id="uploadBox" style="display:none;">
    <h3>वीडियो अपलोड करें</h3>
    <input type="text" id="vTitle" placeholder="वीडियो का नाम...">
    <input type="file" id="vFile" accept="video/*">
    <br>
    <button id="upBtn" onclick="handleUpload()">अपलोड शुरू करें</button>
    <p id="upStatus"></p>
  </div>

  <div style="max-width: 400px; margin: auto;">
    <h3>ताज़ा वीडियो</h3>
    <div id="videoList">लोड हो रहा है...</div>
  </div>

  <script>
    // 1. अपनी सही Config भरें
    const firebaseConfig = {
      apiKey: "PASTE_YOUR_API_KEY",
      authDomain: "pamsatube-f5de5.firebaseapp.com",
      projectId: "pamsatube-f5de5",
      storageBucket: "pamsatube-f5de5.appspot.com",
      messagingSenderId: "809041054420",
      appId: "PASTE_YOUR_APP_ID"
    };

    try {
      firebase.initializeApp(firebaseConfig);
    } catch(e) {
      alert("Firebase Init Error: " + e.message);
    }

    const auth = firebase.auth();
    const db = firebase.firestore();
    const storage = firebase.storage();

    auth.onAuthStateChanged(user => {
      if (user) {
        document.getElementById("userStatus").innerText = "लॉगिन है: " + user.displayName;
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "inline-block";
        document.getElementById("uploadBox").style.display = "block";
      } else {
        document.getElementById("userStatus").innerText = "कृपया लॉगिन करें";
        document.getElementById("loginBtn").style.display = "inline-block";
        document.getElementById("logoutBtn").style.display = "none";
        document.getElementById("uploadBox").style.display = "none";
      }
    });

    function handleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
        .then(() => alert("लॉगिन सफल!"))
        .catch(err => alert("Login Error: " + err.code + " - " + err.message));
    }

    function handleLogout() {
      auth.signOut();
    }

    async function handleUpload() {
      const file = document.getElementById("vFile").files[0];
      const title = document.getElementById("vTitle").value;
      if (!file) return alert("फ़ाइल चुनें");
      if (!title) return alert("टाइटल लिखें");

      const status = document.getElementById("upStatus");
      const btn = document.getElementById("upBtn");
      btn.disabled = true;
      status.innerText = "अपलोडिंग...";

      try {
        const ref = storage.ref("videos/" + Date.now() + "_" + file.name);
        await ref.put(file);
        const url = await ref.getDownloadURL();

        await db.collection("videos").add({
          title: title,
          url: url,
          user: auth.currentUser.displayName,
          time: new Date()
        });

        alert("अपलोड पूरा हुआ!");
        status.innerText = "";
        btn.disabled = false;
      } catch (err) {
        alert("Upload Error: " + err.message);
        btn.disabled = false;
      }
    }

    db.collection("videos").orderBy("time", "desc").onSnapshot(snap => {
      const list = document.getElementById("videoList");
      list.innerHTML = "";
      snap.forEach(doc => {
        const data = doc.data();
        list.innerHTML += `
          <div style="background:#222; padding:10px; margin:10px 0; border-radius:8px;">
            <video controls src="${data.url}"></video>
            <h4>${data.title}</h4>
            <small>By: ${data.user}</small>
          </div>
        `;
      });
      if(snap.empty) list.innerHTML = "कोई वीडियो नहीं है";
    });
  </script>
</body>
</html>
