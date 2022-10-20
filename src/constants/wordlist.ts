// Sometimes we remove words, but it doesn't
// feel right to modify old history. So this
// list includes words I removed after they
// were already used.
export const EXCLUDE_FROM_RANDOM = ['ਲਗਦਾ', 'ਲਗਭਗ', 'ਦਸਖਤ', 'ਗਰਦਨ', 'ਸ਼ਾਨਦਾਰ']

export const WORDS = [
  'ਗਰਮ',
  'ਰਚਨਾ',
  'ਚਮਕ',
  'ਅਸਲ',
  'ਜਨਮ',
  'ਅਰਥ',
  'ਸਮਝ',
  'ਲਗਦਾ',
  'ਦਰਦ',
  'ਸਫਰ',
  'ਰਬਾਬ',
  'ਸਬਕ',
  'ਗੁਬਾਰਾ',
  'ਜਬਾਨੀ',
  'ਕਾਬਲ',
  'ਖਿੜਕੀ',
  'ਗਲੀਚਾ',
  'ਕੁਰਸੀ',
  'ਫਰਸ਼',
  'ਸਰਦੀ',
  'ਬਸੰਤ',
  'ਟੋਕਰੀ',
  'ਗੁਲਾਬੀ',
  'ਸੰਤਰਾ',
  'ਕਰਮ',
  //'ਬਰਫ',
  'ਚਮਚਾ',
  'ਪਹਾੜ',
  'ਜਹਾਜ',
  'ਅਰਾਮ',
  'ਨਹਿਰ',
  'ਗਰੀਬ',
  'ਹਮਲਾ',
  'ਸਿਪਾਹੀ',
  'ਕਿਸਾਨ',
  'ਅੰਦਰ',
  'ਕੇਵਲ',
  'ਸਮਾਜ',
  'ਵਿਆਹ',
  'ਅਮੀਰ',
  'ਸਬਰ',
  'ਬਾਹਰ',
  //'ਮਹੀਨੇ',
  'ਹਾਲਤ',
  'ਪਿਆਰ',
  //'ਗਿਆਨ',
  //'ਲਿਖਿਆ',
  // 'ਸ਼ਾਮਿਲ',
  //'ਅਜਿਹਾ', in dictionary but hard
  // 'ਆਵਾਜ਼',
  // 'ਸ਼ਾਇਦ',
  // 'ਕਹਿੰਦੇ',
  //'ਪਹਿਲੇ',
  //'ਜਿਹੜੇ',
  //'ਜ਼ਰੂਰ',
  //'ਪਿਛਲੇ',
  //'ਦੁਨੀਆਂ',
  'ਸਰੀਰ',
  'ਵਿਚਾਰ',
  'ਗਿਣਤੀ',
  'ਨਜ਼ਰ',
  //'ਸਿੱਖਿਆ',
  //'ਇਲਾਵਾ',
  'ਸ਼ਹਿਰ',
  'ਕਹਾਣੀ',
  'ਸ਼ਕਤੀ',
  //'ਸੰਸਾਰ',
  'ਧਿਆਨ',
  //'ਕੋਸ਼ਿਸ਼',
  //'ਵਿਸ਼ੇਸ਼',
  //'ਦੌਰਾਨ',
  'ਉਮਰ',
  'ਤਿਆਰ',
  'ਜੀਵਨ',
  'ਧਰਮ',
  'ਬਿਮਾਰ',
  'ਅੱਖਰ',
  'ਕਮਰ',
  'ਪਾਲਕ',
  'ਅਨਾਰ',
  'ਸਵਾਲ',
  'ਕਲਮ',
  'ਕਣਕ',
  'ਟੱਕਰ',
  'ਮਟਰ',
  'ਕਿਤਾਬ',
  'ਢੱਕਣ',
  'ਸਾਬਣ',
  'ਗਾਜਰ',
  'ਸੜਕ',
  'ਸਿਤਾਰ',
  'ਮਕਾਨ',
  'ਸਸਤਾ',
  'ਹਲਕਾ',
  'ਰੁਮਾਲ',
  'ਕਮਰਾ',
  'ਤਬਲਾ',
  'ਪਰਦਾ',
  'ਗਰਦਨ',
  'ਦਸਖਤ',
  'ਮਤਲਬ',
  'ਨਾਸ਼ਤਾ',
  'ਬਰਤਨ',
  'ਰਸਤਾ',
  'ਅਦਰਕ',
  'ਅਰਦਾਸ',
  'ਖੁਰਾਕ',
  'ਟਮਾਟਰ',
  'ਥਕਾਵਟ',
  'ਦਸਤਾਰ',
  'ਹਾਦਸਾ',
  'ਦਰਬਾਰ',
  'ਕਵਿਤਾ',
  'ਡਰਪੋਕ',
  'ਨਿਮਰਤਾ',
  'ਬਿਜਲੀ',
  'ਅਸਮਾਨ',
  'ਕੀਮਤ',
  'ਅਲਮਾਰੀ',
  'ਹੌਸਲਾ',
  'ਸੋਮਵਾਰ',
  'ਬਿਮਾਰੀ',
  'ਸਰਕਾਰ',
  'ਲਗਭਗ',
  'ਵਕੀਲ',
  'ਤਲਵਾਰ',
  'ਫਰਕ',
  'ਅਨੁਸਾਰ',
  'ਖਿਆਲ',
  'ਹੜਤਾਲ',
  'ਜਾਣਕਾਰੀ',
  'ਤਸਵੀਰ',
  'ਪਰਿਵਾਰ',
  'ਕਿਰਪਾ',
  'ਵੀਰਵਾਰ',
  'ਤਲਾਕ',
  'ਇਤਿਹਾਸ',
  'ਬਿਲਕੁਲ',
  'ਬੇਚੈਨ',
  'ਨਫਰਤ',
  'ਅਸਥਾਨ',
  'ਸਾਵਧਾਨ',
  'ਅਸੰਭਵ',
  'ਵਧੀਆ',
  'ਸਲਵਾਰ',
  'ਪਸੰਦ',
  'ਸਧਾਰਨ',
  'ਸਾਹਮਣੇ',
  'ਤਨਖਾਹ',
  'ਸ਼ਨੀਵਾਰ',
  'ਸਮੁੰਦਰ',
  'ਸੂਰਜ',
  //'ਉਪਰ',
  'ਮਨੁੱਖ',
  'ਹਮਦਰਦੀ',
  'ਦਿਮਾਗ',
  'ਅੰਦੋਲਨ',
  'ਮਦਦ',
  'ਦਿਖਾਵਾ',
  'ਕਿਸਮ',
  'ਪਸੀਨਾ',
  'ਦੁਬਿਧਾ',
  'ਹੈਰਾਨੀ',
  'ਮਾਲਕ',
  'ਪਰਕਾਰ',
  'ਬਜਰੀ',
  'ਸਵੇਰ',
  'ਪਨੀਰ',
  'ਅੰਗੂਰ',
  'ਸਬੂਤ',
  'ਸਹਾਰਾ',
  'ਅਮਰੂਦ',
  'ਲਾਲਚ',
  'ਰਾਜਨੀਤੀ',
  'ਆਲਸੀ',
  'ਨੁਕਸਾਨ',
  'ਅਦਾਲਤ',
  'ਅਚਾਨਕ',
  'ਬਹਾਦਰ',
  'ਢਲਾਣ', // was a typo originally, ਨ
  'ਬਕਵਾਸ',
  'ਸ਼ਾਨਦਾਰ',
  'ਮਸਾਲਾ',
  'ਤੰਦਰੁਸਤ',
  'ਜਾਦੂਗਰ',
  'ਜਵਾਨ',
  'ਕਾਬਲੀਅਤ',
  'ਦੁਬਾਰਾ',
  'ਕਲਾਕਾਰ',
  'ਲਸਣ',
  'ਮਨੋਹਰ',
  'ਨਸੀਬ',
  'ਨਾਰੀਅਲ',
  'ਮੁਕਾਬਲਾ',
  'ਕੋਮਲ',
  'ਕਾਰੀਗਰੀ',
  'ਦਰਵਾਜਾ',
  'ਅਜਗਰ',
  'ਚਿਹਰਾ',
  'ਤਕਦੀਰ',
  'ਅਣੋਖਾ',
  'ਖੜਾਕ',
  'ਅਪਰਾਧੀ',
  'ਸੋਹਣਾ',
  'ਮੁਲਾਕਾਤ',
  'ਯਾਤਰਾ',
  'ਬਗੀਚਾ',
  'ਗੁਲਦਸਤਾ',
  'ਖਿਲਾਰਾ',
  'ਸਰੋਵਰ',
  'ਲਾਜਵਾਬ',
  'ਜਲੇਬੀ',
  'ਜੁਰਾਬ',
  'ਖੁਸ਼ਹਾਲ',
  'ਲੱਕੜ',
  'ਬੁਝਾਰਤ',
  'ਸੰਗਤ',
  'ਪਰਦੇਸੀ',
  'ਦੋਸਤ',
  'ਦਸਤਾਨਾ',
  'ਤੁਰੰਤ',
  'ਕਸਰਤ',
  'ਹਿਸਾਬ',
  'ਮਿਲਾਵਟ',
  'ਵਾਤਾਵਰਨ',
  'ਅਧਿਕਾਰੀ',
  'ਜਥੇਬੰਦੀ',
  'ਪੱਤਰਕਾਰੀ',
  'ਗਣਰਾਜ',
  'ਕਿਰਪਾਨ',
  'ਵਸਨੀਕ',
  'ਨਤੀਜਾ',
  'ਤਬਾਹੀ',
  'ਪੱਥਰ',
  'ਸਫਲ',
  'ਛਤਰੀ',
  'ਕੀਮਤੀ',
  'ਜਾਗਣਾ',
  'ਫਿਕਰ',
  'ਦਰਜਨ',
  'ਕੇਸਰੀ',
  'ਗਰਜ',
  'ਨੌਜਵਾਨ',
  'ਪੁਰਾਣਾ',
  'ਕੁਦਰਤ',
  'ਸਹਿਮਤ',
  'ਦੁਪਹਿਰ',
  'ਅਗਲਾ',
  'ਭਰੋਸਾ',
  'ਪਟਕਾ',
  'ਅਖਾੜਾ',
  'ਨਿਤਨੇਮ',
  'ਜਵਾਹਰ',
  'ਗੁਰਬਾਣੀ',
  'ਝਗੜਾ',
  'ਦਿਲਾਸਾ',
  'ਹਰਕਤ',
  'ਪਦਾਰਥ',
  'ਨਿਰਮਲ',
  'ਚੌਕੀਦਾਰ',
  'ਜਾਨਵਰ',
  'ਅਧੂਰਾ',
  'ਗਰਮ',
  'ਲਲਕਾਰ',
  'ਚਾਦਰ',
  'ਸਤਕਾਰ',
  'ਚਾਵਲ',
  'ਮੁਸੀਬਤ',
  'ਬੈਠਕ',
  'ਕਿਰਲੀ',
  'ਕਿਸਮਤ',
  'ਦੌਰਾਨ',
  'ਚਮਤਕਾਰ',
  'ਤਰੀਕਾ',
  'ਨਰਮ',
  'ਸੰਗੀਤ',
  'ਕੀਰਤਨ',
  'ਪਰਮਾਤਮਾ',
  'ਮੁਹਾਵਰਾ',
  'ਕਾਰੋਬਾਰ',
  'ਅਕਾਲ',
  'ਨੌਜਵਾਨ',
  'ਬਰਾਬਰ',
  'ਵਸੀਅਤ',
  'ਅਜਨਬੀ',
  'ਗੁਲਾਮ',
  'ਟੁਕੜਾ',
  //'ਤੁਹਾਨੂੰ',
  //'ਕਿਉਂਕਿ',
  //'ਦੱਸਿਆ',
  // 'ਆਪਣਾ',
]
