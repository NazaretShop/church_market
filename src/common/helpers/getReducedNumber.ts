const transformNumber = (number: string | number) => {
  const parts = number.toString().split(".");
  if (parts.length > 1) {
    if (parts[1] === "0") {
      return parts[0];
    }
    return `${parts[0]}.${parts[1][0]}`;
  }
  return number;
};

const getReducedNumber = (value?: number | string) => {
  try {
    const number = Number(value);
    switch (true) {
      case number >= 1000000000:
        return `${transformNumber(number / 1000000000)} млр.`;
      case number >= 1000000:
        return `${transformNumber(number / 1000000)} міл.`;
      case number >= 10000:
        return `${transformNumber(number / 1000)} тис.`;
      default:
        return number || 0;
    }
  } catch (e) {}
};

export default getReducedNumber;
