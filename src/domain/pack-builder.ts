import type { Difficulty, LearningLanguage, Pack } from '../types';

type WordTriple = readonly [text: string, translation: string, pinyin?: string];

export function buildMissionPack(opts: {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  colorHex: string;
  createdAt: number;
  words: readonly WordTriple[];
  staged?: boolean;
  language?: LearningLanguage;
  difficulty?: Difficulty;
}): Pack {
  const language = opts.language ?? 'ko';
  return {
    id: opts.id,
    title: opts.title,
    subtitle: opts.subtitle,
    emoji: opts.emoji,
    colorHex: opts.colorHex,
    difficulty: opts.difficulty ?? ('Начальный' as Difficulty),
    sourceId: null,
    staged: opts.staged ?? true,
    language,
    createdAt: opts.createdAt,
    wordDefs: opts.words.map(([korean, translation, pinyin]) => ({
      korean,
      translation,
      ...(language === 'zh' && pinyin ? { pinyin } : {}),
    })),
  };
}

export function mergeWords(
  base: readonly WordTriple[],
  theme: readonly WordTriple[]
): WordTriple[] {
  const seen = new Set<string>();
  const out: WordTriple[] = [];
  for (const word of [...base, ...theme]) {
    if (seen.has(word[0])) continue;
    seen.add(word[0]);
    out.push(word);
  }
  return out;
}
