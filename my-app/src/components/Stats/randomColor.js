function randomColor() {
  const allowed = 'ABCDEF0123456789';
  let S = '#';

  while (S.length < 7) {
    S += allowed.charAt(Math.floor(Math.random() * 16 + 1));
  }
  return S;
}

export default randomColor;
