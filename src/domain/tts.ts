import type { VoiceCharacter } from './voice-chars';

let cachedKoreanVoice: SpeechSynthesisVoice | null | undefined;

function koreanVoice(): SpeechSynthesisVoice | null {
  if (cachedKoreanVoice) return cachedKoreanVoice;
  const synth = window.speechSynthesis;
  if (!synth) return null;
  const voices = synth.getVoices();
  const match =
    voices.find((v) => v.lang === 'ko-KR') ??
    voices.find((v) => v.lang.toLowerCase().startsWith('ko')) ??
    null;
  cachedKoreanVoice = match;
  return match;
}

export function loadVoices(callback?: () => void) {
  const synth = window.speechSynthesis;
  if (!synth) return;
  if (synth.getVoices().length > 0) {
    cachedKoreanVoice = undefined;
    callback?.();
    return;
  }
  synth.addEventListener('voiceschanged', () => {
    cachedKoreanVoice = undefined;
    callback?.();
  }, { once: true });
}

function voiceForLang(lang: string): SpeechSynthesisVoice | null {
  const synth = window.speechSynthesis;
  if (!synth) return null;
  const voices = synth.getVoices();
  return (
    voices.find((v) => v.lang === lang) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(lang.split('-')[0])) ??
    null
  );
}

export function speak(text: string, character?: VoiceCharacter | null, lang = 'ko-KR') {
  const synth = window.speechSynthesis;
  if (!synth) return;
  const trimmed = text.trim();
  if (!trimmed) return;

  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(trimmed);
  const voice = lang === 'ko-KR' ? koreanVoice() : voiceForLang(lang);
  if (voice) utterance.voice = voice;
  utterance.lang = lang;
  utterance.rate = character?.rate ?? 0.9;
  utterance.pitch = character?.pitch ?? 1;
  synth.speak(utterance);
}