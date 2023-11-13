import { describe, expect, test } from 'vitest';
import { useCensorship } from './useCensorship';

describe('dumb censorship', () => {
  const tests = {
    '14': '**',
    'gremlin': 'gre**in',
    'was miku': 'wa* *iku',
    'cute': '**te',
    'cunny': '**nny',
    'need my': 'nee* *y',
    'months because': 'month* *ecause',
    'delayed global version': 'dela*** glob** *ersion',
    "it's blue": "it'* *lue",
    "she's the best ain't she": "she's the **** *in't she",
    'best': 'best',
    'on the edge': 'on t** *dge',
    'Jazzmix': 'J***mix',
    "u've got quite the energy for a slacker": "u've *** quite t** *nergy for a slacker",
    'hermanos': 'herm***s',
    'they could just make a script to detect the whole phrasing': 'they could just make a s****t ** *etect the w**** phrasing',
    // 'got tg fuuka smh ml dm cute ban sekai alv yed sb': '*** ** ****a **h ** ** **te ban sekai *** *** **', // idk why this output is weird
    "And it's the same": "An* **'s the same",
    'censorship discovery': 'censorshi* *iscovery',
    'sapslaj.github.io/blue-archive-chat-simulator': 'sapslaj.github.io*blue-archive-chat-simulator',
    'totally': '***ally',
    'so big she': 'so b** *he',
    'mutsuki keeps': 'mutsu** **eps',
    "said it's barren": "sai* **'* *arren",
    'really, iii?': 'really, ***?',
    'dev lol.': 'de* *ol.',
  };

  for (const [input, output] of Object.entries(tests)) {
    test(`converts "${input}" to "${output}"`, () => {
      expect(useCensorship(input)).toBe(output);
    });
  }
});
