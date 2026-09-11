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

export function speak(text: string) {
  const synth = window.speechSynthesis;
  if (!synth) return;
  const trimmed = text.trim();
  if (!trimmed) return;

  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(trimmed);
  const voice = koreanVoice();
  if (voice) {
    utterance.voice = voice;
  }
  utterance.lang = 'ko-KR';
  utterance.rate = 0.9;
  synth.speak(utterance);
}