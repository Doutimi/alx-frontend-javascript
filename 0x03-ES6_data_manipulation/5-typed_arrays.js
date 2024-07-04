export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  } else {
    const buffer = new ArrayBuffer(length);
    const int8buffer = new Int8Array(buffer);
    int8buffer[position] = value;
    return new DataView(buffer);
  }
}
