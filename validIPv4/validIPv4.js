// the format should be in 4 parts only like 1.2.3.4 if 1.2.3 = false , if 1.2.3.4.5 = false only , 1.2.3.4 = true
// the range of each should be between 0 and 225
// none of the octent can start with 0

function validIPv4(ipv4) {
  const parts = ipv4.split(".");
  if (parts.length !== 4) return false;
  const result = parts.every((part) => {
    if (part[0] == 0 || part > 225 || part < 0) {
      return false;
    } else {
      return true;
    }
  });

  return result;
}

let ipv4 = "123.125.10.60";
console.log(validIPv4(ipv4));
