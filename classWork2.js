// QUESTION #1

console.log("#1 we know it works, now student try");

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


// QUESTION #2

console.log("#2");

var totallyRandomString = "Totally Random String";

var countOfChars = {};

function countEm(anArgument) {
  var getReady = anArgument.toLowerCase();
  for (var i = 0; i < getReady.length; i++) {
    if (!countOfChars[getReady[i]]) {
      countOfChars[getReady[i]] = 0;
    }
    countOfChars[getReady[i]]++
  }
  console.log(countOfChars)
}

countEm(totallyRandomString);



// QUESTION #3

console.log("#3");

raceResults = [
  { country: "USA", time: 222 },
  { country: "USA", time: 199 },
  { country: "USA", time: 001 },
  { country: "Russia", time: 998 },
  { country: "Kenya", time: 202 },
  { country: "Brazil", time: 555 }
];

function bestTimeForCountry(times) {
  var bestTimes = {};

  for (var i = 0; i < times.length; i++) {
    var currentTime = times[i];
    var currentCountrysBestTime = bestTimes[currentTime.country];
    var currentCountryTime = currentTime.time;

    if (!bestTimes[currentTime.country]) {
      bestTimes[currentTime.country] = currentTime[time];
    } else if (currentCountryTime < bestTimes[currentTime.country]) {
      bestTimes[currentTime.country] = currentTime.time;
    }
  }

  console.log(bestTimes);
}

bestTimeForCountry(raceResults);



// QUESTION #4:  answer return count of + - num

console.log("#4")

listOfNum = [-1, 5, -25, -3, 99, 20,];

function countOddEven(mixOfNums) {
  var even = 0;
  var odd = 0;
  for (var i = 0; i < mixOfNums.length; i++) {
    if (mixOfNums[i] < 0) {
      odd++;
    } else if (mixOfNums[i] > 0) {
      even++;
    }
  }
  console.log("Even count is " + even);
  console.log("Odd count is " + odd);
}

countOddEven(listOfNum);