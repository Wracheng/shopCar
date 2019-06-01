export const addShoes = (id, size, count, price, name, src) => ({
  type: 'ADD_SHOES',
  id,
  size,
  count,
  price,
  name,
  src
});

export const record = (id, size, count, price, name, src) => ({
  type: 'RECORD',
  id,
  size,
  count,
  price,
  name,
  src
});
