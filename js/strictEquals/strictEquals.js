const strictEquals = (firstValue, secondValue) => {
  if (Object.is(firstValue, NaN) && Object.is(NaN, secondValue)) {
    return false;
  }
  if (Object.is(firstValue, 0) && Object.is(0, secondValue)) {
    return true;
  }
  if (Object.is(firstValue, -0) && Object.is(-0, secondValue)) {
    return true;
  }

  return Object.is(firstValue, secondValue);
};

export default strictEquals;
