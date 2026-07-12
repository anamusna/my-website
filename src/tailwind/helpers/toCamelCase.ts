const toCamelCase = (string: string) => {
  return string[0].toUpperCase()
    + string.slice(1).replace(
      /(-.)/g,
      (x) => {
        return x[1].toUpperCase();
      },
    );
};

export default toCamelCase;
