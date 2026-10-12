const STORAGE_KEY = "birthdayWebsiteState_v1";
const DEFAULT_CONFIG = {
  recipientName: "Princess",
  nickname: "Love",
  birthdayDate: "2025-10-12",
  websiteTitle: "Happy Birthday, Princess!",
  mainGreeting: "You're the sunshine in my world",
  musicUrl: "",
  musicTitle: "Birthday Melody",
  birthdayLetter: "My dearest [Name], on your special day, I want you to know how deeply you are loved. Your kindness, laughter, and the way you make every ordinary moment glow with magic are gifts I cherish. May today be filled with joy, warm memories, and endless love. You deserve all the happiness in the world, and more. Happy Birthday, my love.",
  giftMessage: "You are my favorite adventure, my greatest blessing, and the reason life feels so beautiful.",
  finalMessage: "Thank you for being the most beautiful part of my world. Every day with you feels like a celebration. I love you more than words can say.",
  showConfetti: true,
  showHearts: true,
  showSparkles: true,
  colorPrimary: "#ff6fa6",
  colorSecondary: "#d8b4ff",
  colorAccent: "#f7d9a5",
  gallery: [
    { id: crypto.randomUUID ? crypto.randomUUID() : `photo-${Date.now()}-1`, src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80", caption: "Our happy moments" },
    { id: crypto.randomUUID ? crypto.randomUUID() : `photo-${Date.now()}-2`, src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80", caption: "Sweet smiles" },
    { id: crypto.randomUUID ? crypto.randomUUID() : `photo-${Date.now()}-3`, src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80", caption: "Always together" }
  ],
  memories: [
    {
      id: crypto.randomUUID ? crypto.randomUUID() : `mem-${Date.now()}-1`,
      date: "May 2022",
      description: "The day we laughed until our stomachs hurt and realized we had found a beautiful kind of home in each other.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: crypto.randomUUID ? crypto.randomUUID() : `mem-${Date.now()}-2`,
      date: "August 2023",
      description: "A long walk under the sunset, with the softest feelings and endless promises.",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80"
    }
  ],
  reasons: [
    { id: crypto.randomUUID ? crypto.randomUUID() : `reason-${Date.now()}-1`, icon: "💖", title: "You make everything feel lighter", text: "Even the hardest days turn gentle when you are around." },
    { id: crypto.randomUUID ? crypto.randomUUID() : `reason-${Date.now()}-2`, icon: "✨", title: "You bring warmth", text: "Your presence feels like a hug in the middle of the coldest nights." },
    { id: crypto.randomUUID ? crypto.randomUUID() : `reason-${Date.now()}-3`, icon: "🌷", title: "You are kind", text: "Your heart is full of gentleness and grace." },
    { id: crypto.randomUUID ? crypto.randomUUID() : `reason-${Date.now()}-4`, icon: "🌙", title: "You are inspiring", text: "You make people believe in joy, hope, and love again." },
    { id: crypto.randomUUID ? crypto.randomUUID() : `reason-${Date.now()}-5`, icon: "🫶", title: "You are unforgettable", text: "Your energy lights up every room you enter." },
    { id: crypto.randomUUID ? crypto.randomUUID() : `reason-${Date.now()}-6`, icon: "🎀", title: "You are deeply loved", text: "You are treasured more than you know." },
    { id: crypto.randomUUID ? crypto.randomUUID() : `reason-${Date.now()}-7`, icon: "🌞", title: "You make life beautiful", text: "You turn simple moments into unforgettable memories." },
    { id: crypto.randomUUID ? crypto.randomUUID() : `reason-${Date.now()}-8`, icon: "💫", title: "You are rare", text: "Your heart, spirit, and laughter are one of a kind." }
  ],
  wishes: [
    { id: crypto.randomUUID ? crypto.randomUUID() : `wish-${Date.now()}-1`, text: "May your dreams bloom beautifully, just like your smile." },
    { id: crypto.randomUUID ? crypto.randomUUID() : `wish-${Date.now()}-2`, text: "May every wish you make come true, and every candle burn bright with love." },
    { id: crypto.randomUUID ? crypto.randomUUID() : `wish-${Date.now()}-3`, text: "May this year be full of laughter, surprises, and the sweetest memories." }
  ],
  birthdayDateDisplay: "2025-10-12",
  sectionOrder: []
};

let appState = loadState();
let currentTab = "basic";
let isLetterRevealed = false;
let confettiTimeouts = [];
let audioInitialized = false;
let imageDb = null;
let editorDirty = false;

const els = {
  mainTitle: document.getElementById("mainTitle"),
  heroGreeting: document.getElementById("heroGreeting"),
  recipientDisplay: document.getElementById("recipientDisplay"),
  birthdayLetter: document.getElementById("birthdayLetter"),
  startBtn: document.getElementById("startBtn"),
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  birthdayIndicator: document.getElementById("birthdayIndicator"),
  letterContent: document.getElementById("letterContent"),
  revealLetterBtn: document.getElementById("revealLetterBtn"),
  photoGallery: document.getElementById("photoGallery"),
  memoriesTimeline: document.getElementById("memoriesTimeline"),
  reasonsGrid: document.getElementById("reasonsGrid"),
  musicTitle: document.getElementById("musicTitle"),
  audioPlayer: document.getElementById("audioPlayer"),
  playBtn: document.getElementById("playBtn"),
  pauseBtn: document.getElementById("pauseBtn"),
  muteBtn: document.getElementById("muteBtn"),
  progress: document.getElementById("progress"),
  currentTime: document.getElementById("currentTime"),
  duration: document.getElementById("duration"),
  giftBox: document.getElementById("giftBox"),
  giftReveal: document.getElementById("giftReveal"),
  giftMessage: document.getElementById("giftMessage"),
  openGiftBtn: document.getElementById("openGiftBtn"),
  wishesContainer: document.getElementById("wishesContainer"),
  wishInput: document.getElementById("wishInput"),
  addWishBtn: document.getElementById("addWishBtn"),
  finalMessage: document.getElementById("finalMessage"),
  replayBtn: document.getElementById("replayBtn"),
  confettiContainer: document.getElementById("confettiContainer"),
  editBtn: document.getElementById("editBtn"),
  editorModal: document.getElementById("editorModal"),
  closeEditor: document.getElementById("closeEditor"),
  saveBtn: document.getElementById("saveBtn"),
  cancelBtn: document.getElementById("cancelBtn"),
  restoreDefaultsBtn: document.getElementById("restoreDefaultsBtn"),
  exportBtn: document.getElementById("exportBtn"),
  importFile: document.getElementById("importFile"),
  reasonsList: document.getElementById("reasonsList"),
  galleryList: document.getElementById("galleryList"),
  memoriesList: document.getElementById("memoriesList"),
  addReasonBtn: document.getElementById("addReasonBtn"),
  addPhotoBtn: document.getElementById("addPhotoBtn"),
  addMemoryBtn: document.getElementById("addMemoryBtn"),
  blowCandlesBtn: document.getElementById("blowCandlesBtn"),
  candleContainer: document.getElementById("candleContainer"),
  lightbox: document.getElementById("lightbox"),
  lightboxImg: document.getElementById("lightboxImg"),
  lightboxCaption: document.getElementById("lightboxCaption"),
  editRecipientName: document.getElementById("editRecipientName"),
  editNickname: document.getElementById("editNickname"),
  editBirthdayDate: document.getElementById("editBirthdayDate"),
  editWebsiteTitle: document.getElementById("editWebsiteTitle"),
  editMainGreeting: document.getElementById("editMainGreeting"),
  editMusicUrl: document.getElementById("editMusicUrl"),
  editMusicTitle: document.getElementById("editMusicTitle"),
  editBirthdayLetter: document.getElementById("editBirthdayLetter"),
  editGiftMessage: document.getElementById("editGiftMessage"),
  editFinalMessage: document.getElementById("editFinalMessage"),
  editColorPrimary: document.getElementById("editColorPrimary"),
  editColorSecondary: document.getElementById("editColorSecondary"),
  editColorAccent: document.getElementById("editColorAccent"),
  editShowConfetti: document.getElementById("editShowConfetti"),
  editShowHearts: document.getElementById("editShowHearts"),
  editShowSparkles: document.getElementById("editShowSparkles")
};

function UID() {
  return (window.crypto && crypto.randomUUID)
    ? crypto.randomUUID()
    : "id-" + Date.now() + "-" + Math.random().toString(16).slice(2);
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(DEFAULT_CONFIG);
    const parsed = JSON.parse(saved);
    return mergeConfig(DEFAULT_CONFIG, parsed);
  } catch (error) {
    console.warn("Could not load saved state, using defaults.", error);
    return structuredClone(DEFAULT_CONFIG);
  }
}

function mergeConfig(defaults, incoming) {
  const merged = structuredClone(defaults);
  for (const key of Object.keys(incoming)) {
    if (incoming[key] && typeof incoming[key] === "object" && !Array.isArray(incoming[key])) {
      merged[key] = mergeConfig(merged[key] || {}, incoming[key]);
    } else if (Array.isArray(incoming[key])) {
      merged[key] = incoming[key];
    } else {
      merged[key] = incoming[key];
    }
  }
  return merged;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

function setDocumentTitle() {
  document.title = appState.websiteTitle || "Happy Birthday";
}

function applyTheme() {
  document.documentElement.style.setProperty("--primary", appState.colorPrimary || "#ff6fa6");
  document.documentElement.style.setProperty("--secondary", appState.colorSecondary || "#d8b4ff");
  document.documentElement.style.setProperty("--accent", appState.colorAccent || "#f7d9a5");
  setDocumentTitle();

  document.querySelectorAll(".floating-heart").forEach((node, i) => {
    if (!appState.showHearts) node.style.display = "none";
    else node.style.display = "block";
  });

  const starBg = document.querySelector(".stars-bg");
  if (starBg) {
    starBg.style.display = appState.showSparkles ? "block" : "none";
  }
}

function ensureDefaultState() {
  if (!Array.isArray(appState.gallery) || appState.gallery.length === 0) {
    appState.gallery = structuredClone(DEFAULT_CONFIG.gallery);
  }
  if (!Array.isArray(appState.memories) || appState.memories.length === 0) {
    appState.memories = structuredClone(DEFAULT_CONFIG.memories);
  }
  if (!Array.isArray(appState.reasons) || appState.reasons.length === 0) {
    appState.reasons = structuredClone(DEFAULT_CONFIG.reasons);
  }
  if (!Array.isArray(appState.wishes) || appState.wishes.length === 0) {
    appState.wishes = structuredClone(DEFAULT_CONFIG.wishes);
  }
}

function renderHero() {
  const name = appState.recipientName || "My Love";
  const nickname = appState.nickname ? ` ${appState.nickname}` : "";
  els.mainTitle.textContent = appState.websiteTitle || "Happy Birthday!";
  els.heroGreeting.textContent = appState.mainGreeting || "A special celebration for someone special";
  els.recipientDisplay.textContent = `${name}${nickname}`;
  els.birthdayLetter.textContent = appState.birthdayLetter || DEFAULT_CONFIG.birthdayLetter;
  els.giftMessage.textContent = appState.giftMessage || DEFAULT_CONFIG.giftMessage;
  els.finalMessage.textContent = appState.finalMessage || DEFAULT_CONFIG.finalMessage;
  els.musicTitle.textContent = appState.musicTitle || "Birthday Melody";
}

function renderGallery() {
  if (!appState.gallery || !appState.gallery.length) {
    els.photoGallery.innerHTML = "";
    return;
  }

  els.photoGallery.innerHTML = appState.gallery.map((item, index) => `
    <figure class="gallery-item" data-index="${index}">
      <img src="${validateImage(item.src) || fallbackImage()}" alt="${escapeHtml(item.caption || "Birthday memory")}" loading="lazy">
      <figcaption class="gallery-caption">${escapeHtml(item.caption || "Moments together")}</figcaption>
    </figure>
  `).join("");

  els.photoGallery.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => openLightbox(item.dataset.index));
  });
}

function renderMemories() {
  if (!appState.memories || !appState.memories.length) {
    els.memoriesTimeline.innerHTML = "";
    return;
  }

  els.memoriesTimeline.innerHTML = appState.memories.map((memory) => `
    <article class="memory-card">
      <div class="memory-date">${escapeHtml(memory.date || "A special day")}</div>
      <div class="memory-content">
        <img src="${validateImage(memory.image) || fallbackImage()}" alt="${escapeHtml(memory.description || "Memory")}" loading="lazy">
        <p>${escapeHtml(memory.description || "A beautiful memory")}</p>
      </div>
    </article>
  `).join("");
}

function renderReasons() {
  if (!appState.reasons || !appState.reasons.length) {
    els.reasonsGrid.innerHTML = "";
    return;
  }

  els.reasonsGrid.innerHTML = appState.reasons.map((reason) => `
    <article class="reason-card">
      <div class="reason-icon">${reason.icon || "💖"}</div>
      <h3>${escapeHtml(reason.title || "You are wonderful")}</h3>
      <p>${escapeHtml(reason.text || "A wonderful fact about you.")}</p>
    </article>
  `).join("");
}

function renderWishes() {
  if (!appState.wishes || !appState.wishes.length) {
    els.wishesContainer.innerHTML = "";
    return;
  }

  els.wishesContainer.innerHTML = appState.wishes.map((wish) => `
    <div class="wish-card">
      <p>${escapeHtml(wish.text || "Wishing you endless joy and love.")}</p>
    </div>
  `).join("");
}

function updateCountdown() {
  const birthdayDate = new Date(appState.birthdayDate || "2025-12-31");
  const now = new Date();
  const target = new Date(birthdayDate.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate(), 0, 0, 0, 0);

  let diff = target.getTime() - now.getTime();
  if (diff < 0) {
    diff = 0;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  els.days.textContent = days;
  els.hours.textContent = hours;
  els.minutes.textContent = minutes;
  els.seconds.textContent = seconds;

  const hasBirthdayToday = now.getMonth() === birthdayDate.getMonth() && now.getDate() === birthdayDate.getDate();
  els.birthdayIndicator.textContent = hasBirthdayToday ? "Today is the day — celebrate!" : "Your birthday is approaching...";
}

function renderEditorFields() {
  els.editRecipientName.value = appState.recipientName || "";
  els.editNickname.value = appState.nickname || "";
  els.editBirthdayDate.value = appState.birthdayDate || "";
  els.editWebsiteTitle.value = appState.websiteTitle || "";
  els.editMainGreeting.value = appState.mainGreeting || "";
  els.editMusicUrl.value = appState.musicUrl || "";
  els.editMusicTitle.value = appState.musicTitle || "";
  els.editBirthdayLetter.value = appState.birthdayLetter || "";
  els.editGiftMessage.value = appState.giftMessage || "";
  els.editFinalMessage.value = appState.finalMessage || "";
  els.editColorPrimary.value = appState.colorPrimary || "#ff6fa6";
  els.editColorSecondary.value = appState.colorSecondary || "#d8b4ff";
  els.editColorAccent.value = appState.colorAccent || "#f7d9a5";
  els.editShowConfetti.checked = Boolean(appState.showConfetti);
  els.editShowHearts.checked = Boolean(appState.showHearts);
  els.editShowSparkles.checked = Boolean(appState.showSparkles);

  renderReasonEditor();
  renderGalleryEditor();
  renderMemoryEditor();
}

function renderReasonEditor() {
  if (!appState.reasons || !appState.reasons.length) {
    els.reasonsList.innerHTML = "";
    return;
  }
  els.reasonsList.innerHTML = appState.reasons.map((reason, index) => `
    <div class="item-card">
      <div class="inline-fields">
        <input data-index="${index}" data-field="icon" value="${escapeAttribute(reason.icon || "💖")}" placeholder="Icon">
        <input data-index="${index}" data-field="title" value="${escapeAttribute(reason.title || "")}" placeholder="Title">
        <textarea data-index="${index}" data-field="text" placeholder="Description">${escapeHtml(reason.text || "")}</textarea>
      </div>
      <button class="remove-btn" data-remove-reason="${index}">Remove</button>
    </div>
  `).join("");

  els.reasonsList.querySelectorAll("[data-remove-reason]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.removeReason);
      appState.reasons.splice(index, 1);
      renderReasonEditor();
      editorDirty = true;
    });
  });

  els.reasonsList.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.index);
      const field = event.target.dataset.field;
      appState.reasons[index][field] = event.target.value;
      editorDirty = true;
      renderReasons();
    });
  });
}

function renderGalleryEditor() {
  if (!appState.gallery || !appState.gallery.length) {
    els.galleryList.innerHTML = "";
    return;
  }

  els.galleryList.innerHTML = appState.gallery.map((item, index) => `
    <div class="item-card">
      <div class="inline-fields">
        <input data-index="${index}" data-field="src" value="${escapeAttribute(item.src || "")}" placeholder="Image URL">
        <input data-index="${index}" data-field="caption" value="${escapeAttribute(item.caption || "")}" placeholder="Caption">
      </div>
      <button class="remove-btn" data-remove-photo="${index}">Remove</button>
    </div>
  `).join("");

  els.galleryList.querySelectorAll("[data-remove-photo]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.removePhoto);
      appState.gallery.splice(index, 1);
      renderGalleryEditor();
      renderGallery();
      editorDirty = true;
    });
  });

  els.galleryList.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.index);
      const field = event.target.dataset.field;
      appState.gallery[index][field] = event.target.value;
      editorDirty = true;
      renderGallery();
    });
  });
}

function renderMemoryEditor() {
  if (!appState.memories || !appState.memories.length) {
    els.memoriesList.innerHTML = "";
    return;
  }

  els.memoriesList.innerHTML = appState.memories.map((memory, index) => `
    <div class="item-card">
      <div class="inline-fields">
        <input data-index="${index}" data-field="date" value="${escapeAttribute(memory.date || "")}" placeholder="Date">
        <input data-index="${index}" data-field="image" value="${escapeAttribute(memory.image || "")}" placeholder="Image URL">
        <textarea data-index="${index}" data-field="description" placeholder="Description">${escapeHtml(memory.description || "")}</textarea>
      </div>
      <button class="remove-btn" data-remove-memory="${index}">Remove</button>
    </div>
  `).join("");

  els.memoriesList.querySelectorAll("[data-remove-memory]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.removeMemory);
      appState.memories.splice(index, 1);
      renderMemoryEditor();
      renderMemories();
      editorDirty = true;
    });
  });

  els.memoriesList.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", (event) => {
      const index = Number(event.target.dataset.index);
      const field = event.target.dataset.field;
      appState.memories[index][field] = event.target.value;
      editorDirty = true;
      renderMemories();
    });
  });
}

functi
