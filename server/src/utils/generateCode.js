require("dotenv").config();

const generateCode = (value) => {
  let output = "";
  value = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("");
  let merge = value + process.env.phongtro;
  let length = merge.length;
  // adc + phongtro = adcphongtro
  for (let i = 0; i < 3; i++) {
    let index =
      i === 2
        ? Math.floor(merge.length / 2 + length / 2)
        : Math.floor(length / 2);
    output += merge.charAt(index);
    length = index;
  }
  return `${value.charAt(2)}${output}`.toUpperCase();
};

export default generateCode;
