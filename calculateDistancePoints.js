const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (hillSize === 'normal') {
  	return (60 + (distance - kPoint)*2);
  }
  if (hillSize === 'large') {
  	return (60 + (distance - kPoint)*1.8);
  }
  if (hillSize === 'mammoth') {
  	return (120 + (distance - kPoint)*1.2);
  }
};

module.exports = calculateDistancePoints;
