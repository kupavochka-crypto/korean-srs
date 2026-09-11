export interface VoiceCharacter {
  id: string;
  name: string;
  koreanLabel: string;
  rate: number;
  pitch: number;
}

export const VOICE_CHARACTERS: VoiceCharacter[] = [
  { id: 'neutral', name: 'Нейтральный', koreanLabel: '기본', rate: 0.9, pitch: 1 },
  { id: 'mentor', name: 'Спокойный наставник', koreanLabel: '다정', rate: 0.8, pitch: 0.9 },
  { id: 'energetic', name: 'Энергичный', koreanLabel: '활기찬', rate: 1.15, pitch: 1.2 },
  { id: 'soft', name: 'Мягкий', koreanLabel: '부드러운', rate: 0.85, pitch: 1.15 },
  { id: 'deep', name: 'Низкий тон', koreanLabel: '낮은', rate: 0.82, pitch: 0.8 },
];

export function voiceCharacter(id: string | null): VoiceCharacter {
  return VOICE_CHARACTERS.find((v) => v.id === id) ?? VOICE_CHARACTERS[0];
}