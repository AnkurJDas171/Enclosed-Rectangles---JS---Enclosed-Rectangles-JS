//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px'
//}

const insertingSmallRectInsideBigRect = (values, bigRect, smallRect) => {
  for (let i = 0; i < values.length; i++) {
    smallRect[values[i][0]] = Math.abs(values[i][0]).toString() + "px";
  }

  bigRect.children = [smallRect];

  return bigRect;
};

function updateStructure(rec1, rec2) {
  //write your code
  let rectObjA = rec1;
  let rectObjB = rec2;

  let rectObjAKeys = Object.keys(rectObjA);

  let values = [];

  for (let i = 0; i < 4; i++) {
    if (
      rectObjAKeys[i] === "left" ||
      rectObjAKeys[i] === "right" ||
      rectObjAKeys[i] === "top" ||
      rectObjAKeys[i] === "bottom"
    ) {
      let valueOfA = rectObjA[`${rectObjAKeys[i]}`];
      valueOfA = valueOfA.split("").reverse().join("");
      valueOfA = valueOfA.slice(2, valueOfA.length + 1);
      valueOfA = valueOfA.split("").reverse().join("");

      let valueOfB = rectObjB[`${rectObjAKeys[i]}`];
      valueOfB = valueOfB.split("").reverse().join("");
      valueOfB = valueOfB.slice(2, valueOfB.length + 1);
      valueOfB = valueOfB.split("").reverse().join("");

      let value = parseInt(valueOfA) - parseInt(valueOfB);
      // (rectObjA[`${rectObjA[0]}`] > rectObjA[`${rectObjA[0]}`]
      values.push([rectObjAKeys[i], value]);
    }
  }

  for (let i = 0; i < 4; i++) {
    if (values[i][1] < 0) {
      return insertingSmallRectInsideBigRect(values, rectObjA, rectObjB);
    } else if (values[i][1] > 0) {
      return insertingSmallRectInsideBigRect(values, rectObjB, rectObjA);
    }
  }

  return insertingSmallRectInsideBigRect(values, rectObjA, rectObjB);
}

module.exports = updateStructure;
