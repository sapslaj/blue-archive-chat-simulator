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
    'got tg fuuka smh ml dm cute ban sekai alv yed sb': '*** ** ****a **h ** ** **te ban sekai *** *** **',
    "And it's the same": "An* **'s the same",
    'censorship discovery': 'censorshi* *iscovery',
    'sapslaj.github.io/blue-archive-chat-simulator': 'sapslaj.github.io*blue-archive-chat-simulator',
    'totally': '***ally',
    'so big she': 'so b** *he',
    'mutsuki keeps': 'mutsu** **eps',
    "said it's barren": "sai* **'* *arren",
    'really, iii?': 'really, ***?',
    'dev lol.': 'de* *ol.',
    'electric but': 'electri* *ut',
    'pickup': '***kup',
    'this is why': 'th** ** why',
    'lvl 69': 'l** 69',
    'an azi Mika': 'a* *** Mika',
    'to pick up': 'to ***k up',
    'advance for': 'advan** *or',
    'ba aba bab baba abab': 'ba aba bab baba abab',
    'about it': 'abou* **',
    'lmao lmfao': 'lmao *****',
    'color swapped': 'color ****ped',
    "fucking f.u.c.k.i.n.g f'u'c'k'i'n'g": "***king *******.i.n.g f'u'c'k'i'n'g",
    'punish the': 'puni** *he',
    'OPPAI IS BIG': '***** I* *IG',
  };

  for (const [input, output] of Object.entries(tests)) {
    test(`converts "${input}" to "${output}"`, () => {
      expect(useCensorship(input)).toBe(output);
    });
  }
});
