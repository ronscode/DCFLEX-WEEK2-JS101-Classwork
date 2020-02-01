// QUESTION #1

console.log("#1 ");

// 1. Most common birth year

var birthYears = [1991, 1984, 1984, 1989];

function mostCommon(years) {
  yearsObject = {};
  var mostCommonBirthYear;
  for (var i = 0; i < years.length; i++) {
    var currentItem = years[i];
    var mostCommonYear = 0;
    if (!yearsObject[currentItem]) {
      yearsObject[currentItem] = 0;
    }
    yearsObject[currentItem]++;
  }
  console.log(yearsObject);
}

mostCommon(birthYears);