// Pillars

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// Answer

function pillars(numPill, dist, width) {
  const distanceBetweenPillars = (numPill - 1) * (dist * 100);
  const pillarWidth = (numPill - 2) * width;
  const total = distanceBetweenPillars + pillarWidth;
  if (numPill > 1 && dist >= 10 && dist <= 30 && width >= 10 && width <= 50) {
    return total;
  } else if (numPill === 1) {
    return 0;
  }
}

pillars(4, 10, 10);
pillars(1, 10, 10); //0
pillars(2, 20, 25); //2000
pillars(11, 15, 30); //15270
