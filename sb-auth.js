// ===== FIREBASE SETUP =====
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth, signInAnonymously, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// ===== FIREBASE CONFIG =====
const firebaseConfig = {
  apiKey: "AIzaSyBkPYfPGWXkbu-x2opF3TVrt3ADXZYimak",
  authDomain: "sprachblitz.firebaseapp.com",
  projectId: "sprachblitz",
  storageBucket: "sprachblitz.firebasestorage.app",
  messagingSenderId: "1088979468853",
  appId: "1:1088979468853:web:ead7d1a35062caf074277c",
  measurementId: "G-HKD2Y8X0P2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ===== AUDIO INITIALIZATION =====
function initializeAudio() {
    console.log('🔊 Initializing audio...');
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        
        if (ctx.state === 'suspended') {
            ctx.resume().then(() => {
                console.log('✅ Audio context resumed');
            });
        }
        
        const unlock = () => {
            const buf = ctx.createBuffer(1, 1, 22050);
            const src = ctx.createBufferSource();
            src.buffer = buf;
            src.connect(ctx.destination);
            try { src.start(0); } catch (e) {}
            console.log('✅ Audio unlocked');
        };
        
        document.addEventListener('click', unlock, { once: true });
        document.addEventListener('touchstart', unlock, { once: true });
        
    } catch (e) {
        console.log('Audio init error:', e);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAudio);
} else {
    initializeAudio();
}

// ===== AUTH STATE HANDLER =====
let authInitialized = false;

onAuthStateChanged(auth, (user) => {
    authInitialized = true;
    console.log('[Firebase] Auth ready. User:', user ? user.email : 'Anonymous');
    // SET GLOBAL CURRENT USER - THIS IS CRITICAL!
    window.currentUser = user;
    console.log('✅ window.currentUser set to:', user ? user.email : 'null');
    if (user) {
        console.log('✅ USER LOGGED IN:', user.email);
        updateLoginDisplay(user);
        
        const trialBanner = document.getElementById('trial-banner');
        if (trialBanner) {
            trialBanner.style.display = 'none';
        }
        
        if (window.trialInterval) {
            clearInterval(window.trialInterval);
        }
    }
});

function updateLoginDisplay(user) {
    console.log('🔄 Updating login display for:', user.email);
    
    // Find KONTO section
    let kontoElement = document.querySelector('[style*="background:#1e293b"]')
      || document.querySelector('[data-konto]')
      || Array.from(document.querySelectorAll('div')).find(el => 
          (el.textContent.includes('Melde dich') || el.textContent.includes('KONTO')) && 
          el.querySelector('button')
        );
    
    if (kontoElement) {
        console.log('✅ Found KONTO element, updating...');
        
        // Mark as logged in
        kontoElement.setAttribute('data-logged-in', 'true');
        
        kontoElement.innerHTML = `
            <div class="rounded-2xl p-4 space-y-2" style="background:#1e293b">
              <p class="text-[10px] font-black uppercase tracking-wider od-muted">✅ KONTO</p>
              <p class="text-[11px] font-bold od-dim leading-relaxed">
                📧 <strong>${user.email}</strong>
              </p>
              <p class="text-[10px] text-green-400 font-bold">✅ Logged in Successfully</p>
              <button onclick="sbLogout()" class="btn3d w-full py-3 rounded-xl text-xs font-black bg-red-600 hover:bg-red-700 text-white">
                Logout
              </button>
            </div>
          `;
        
        console.log('✅ KONTO display updated permanently');
    } else {
        console.warn('⚠️ KONTO element not found');
    }
}

// ===== EXPORTS =====
export { 
  auth, 
  db,
  signInAnonymously, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs
};

export function sbAuthReady() {
    return authInitialized;
}

// ===== LOGOUT FUNCTION =====
export async function sbLogout() {
    try {
        console.log('🚪 Logging out...');
        await signOut(auth);
        console.log('✅ Logged out successfully');
        window.location.href = './index.html';
    } catch (error) {
        console.error('❌ Logout error:', error);
        alert('Logout error: ' + error.message);
    }
}
