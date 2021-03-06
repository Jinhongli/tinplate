const getType = obj =>
  Object.prototype.toString
    .call(obj)
    .slice(8, -1)
    .toLowerCase();

const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
};

export const escapeHTML = str =>
  getType(str) === 'string'
    ? str.replace(/[&<>'"]/g, tag => escapeMap[tag])
    : str;

export const forEach = (obj, iterator) => {
  if (getType(obj) === 'array') {
    obj.forEach(iterator);
  } else if (getType(obj) === 'object') {
    Object.keys(obj).forEach(k => {
      iterator.call(null, obj[k], k);
    });
  } else {
    throw new Error(`${obj} is not a iterable object`);
  }
};

export const slice = (s, n) => s.slice(n).trim();

export const startOf = (s, k) => s.indexOf(k) === 0;
