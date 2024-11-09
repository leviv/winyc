// Conver a string to be suitable for id/class names
export const getSlugForName = (name: String) => {
  return name.replace(/[ .,(){}\[\]]/g, "-");
};

export const genRGBA = (alpha: number) => {
  return `
  rgba(
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)}, ${alpha}
  )
`;
};

export const setBackgroundColor = () => {
  // 0.2 opacity for pastel colors
  document.body.style.backgroundColor = genRGBA(0.2);
};
