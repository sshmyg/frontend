const req = require.context('./messages', true, /^\.\/\w{2}\.json$/);

type Acc = Record<string, Record<string, string>>;

export default req.keys().reduce((acc: Acc, key) => {
  const res = req(key);
  const lang = key.replace('./', '').replace('.json', '');

  acc[lang] = res;

  return acc;
}, {});
