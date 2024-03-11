export const applyPhoneMask = (code: string, value: string, mask: string) => {
  let codeLength = code.length;
  const cleanValue = value.replace(/[^\d]/g, "");

  let numberAfterCode = "";
  numberAfterCode = cleanValue.slice(codeLength);

  let phoneNumber = "";
  let maskIndex = 0;
  for (let i = 0; i < mask.length; i++) {
    if (maskIndex < numberAfterCode.length) {
      if (mask[i] === "#") {
        phoneNumber += numberAfterCode[maskIndex];
        maskIndex++;
      } else {
        phoneNumber += mask[i];
      }
    }
  }

  return `+${code}${phoneNumber}`;
};
