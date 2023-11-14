// Before :sort-ing this know that ordering matters.
const bad = [
  '14',
  'alv',
  'ano',
  'ass',
  'azz',
  'sb',
  'ba',
  'besta',
  'bt',
  'cu',
  'damn',
  'dm',
  'fuck',
  'got',
  'hee',
  'ml',
  'shit',
  'sm',
  'yed',
  'crip',
  'tod',
  'hole',
  'tg',
  'fuuk',
  'dit',
  'pd',
  '/',
  'tot',
  'igs',
  'kike',
  'iii',
  'vl',
  'cb',
  'pic',
  'isis',
];

export function useCensorship(original: string): string {
  let message = original;
  bad.forEach(term => {
    const termRegex = new RegExp(term.split('').join('\\s*'), 'gi');
    message = message.replace(termRegex, match => {
      return match.split('').map(char => char === ' ' ? ' ' : '*').join('');
    })
  });
  return message;
}
