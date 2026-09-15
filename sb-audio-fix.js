// =====================================================
// SPRACHBLITZ AUDIO FIX v1.0
// Handles audio playback with fallback to browser voice
// =====================================================

class SprachblitzAudio {
  constructor() {
    this.cache = new Map();
    this.useBrowserVoice = false;
    this.audioContext = null;
    this.initialized = false;
  }

  async init() {
    // Check if Web Audio API is available
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioContext();
      this.initialized = true;
      console.log('✅ Audio initialized: Web Audio API ready');
    } catch (e) {
      console.warn('⚠️ Web Audio API not available, using browser voice');
      this.useBrowserVoice = true;
      this.initialized = true;
    }
  }

  async playAudio(germanPhrase, audioUrl) {
    if (!this.initialized) await this.init();

    try {
      // Try to play audio file first
      if (audioUrl && !this.useBrowserVoice) {
        return await this.playAudioFile(audioUrl);
      } else {
        // Fallback to browser voice
        return this.playBrowserVoice(germanPhrase);
      }
    } catch (error) {
      console.warn('Audio failed, using browser voice:', error);
      // Silently fallback to browser voice
      return this.playBrowserVoice(germanPhrase);
    }
  }

  async playAudioFile(audioUrl) {
    return new Promise((resolve, reject) => {
      try {
        // Check cache first
        if (this.cache.has(audioUrl)) {
          const cachedAudio = this.cache.get(audioUrl);
          cachedAudio.currentTime = 0;
          cachedAudio.play().catch(reject);
          return;
        }

        // Create new audio element
        const audio = new Audio();
        audio.crossOrigin = 'anonymous';
        audio.src = audioUrl;

        audio.oncanplay = () => {
          audio.play().catch(reject);
        };

        audio.onended = () => {
          resolve();
        };

        audio.onerror = () => {
          console.warn('Audio file failed to load, falling back to voice');
          this.playBrowserVoice(germanPhrase).then(resolve).catch(reject);
        };

        audio.ontimeupdate = () => {
          if (audio.ended) {
            resolve();
          }
        };

        // Cache the audio element
        this.cache.set(audioUrl, audio);

        // Timeout after 10 seconds
        setTimeout(() => {
          if (!audio.ended) {
            resolve();
          }
        }, 10000);

      } catch (error) {
        reject(error);
      }
    });
  }

  playBrowserVoice(germanPhrase) {
    return new Promise((resolve) => {
      try {
        const utterance = new SpeechSynthesisUtterance(germanPhrase);
        utterance.lang = 'de-DE';
        utterance.rate = 0.9;
        utterance.pitch = 1;

        utterance.onend = () => {
          resolve();
        };

        utterance.onerror = () => {
          // Silent fail - just resolve
          resolve();
        };

        window.speechSynthesis.cancel(); // Clear any previous speech
        window.speechSynthesis.speak(utterance);

      } catch (error) {
        console.warn('Browser voice failed:', error);
        resolve(); // Silent fail
      }
    });
  }

  stop() {
    try {
      window.speechSynthesis.cancel();
      // Stop all cached audio
      this.cache.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    } catch (error) {
      console.warn('Error stopping audio:', error);
    }
  }
}

// Initialize globally
const sbAudio = new SprachblitzAudio();
sbAudio.init();

// Export for use in exercises
window.playPhraseAudio = async function(germanPhrase, audioUrl) {
  await sbAudio.playAudio(germanPhrase, audioUrl);
};

window.stopAudio = function() {
  sbAudio.stop();
};

console.log('✅ Sprachblitz Audio Fix loaded');
