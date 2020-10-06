import { decHex, decHexVal } from "./8bit";

export const C_NAME_INVALID = "C_NAME_INVALID";
export const C_DATA_EMPTY = "C_DATA_EMPTY";
export const C_DATA_INVALID = "C_DATA_INVALID";

const validCIdentifier = /[a-zA-Z_][a-zA-Z0-9]*/;

export const cIntArrayExternDeclaration = name => {
  if (!name || !name.match(validCIdentifier)) {
    throw C_NAME_INVALID;
  }
  return `extern const unsigned char ${name}[];`;
};

export const cIntArray = (name, data) => {
  if (!Array.isArray(data)) {
    throw C_DATA_INVALID;
  }
  if (data.length === 0) {
    throw C_DATA_EMPTY;
  }
  if (!name || !name.match(validCIdentifier)) {
    throw C_NAME_INVALID;
  }
  return `const unsigned char ${name}[] = {\n${data.map(decHex).join(",")}\n};`;
};

export const objectIntArray = (data) => {
  if (!Array.isArray(data)) {
    throw C_DATA_INVALID;
  }
  if (data.length === 0) {
    throw C_DATA_EMPTY;
  }
  let output = "T 00 00 00\nR 00 00 06 00\n";
  for(let i=0; i<data.length; i+=13) {
    output += "T " + decHexVal(i) + " " + decHexVal(i >> 8) + " 00";
    for(let j=0; j<13; j++) {
      if(data[i + j] !== undefined) {
        output += " " + decHexVal(data[i + j]);
      }
    }
    output += "\nR 00 00 06 00\n";
  }
  return output;
};
