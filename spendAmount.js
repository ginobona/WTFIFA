//bribeTotal is a randomly generated number between 80,000,000 - 100,000,000

var bribeTotal = function getRandomArbitrary(80000000, 100000000) {
    return Math.random() * (100000000 - 80000000) + 80000000;
}


//Year and inflation rates converted to variables

var 2022 = bribeTotal * .12 + bribeTotal;
var 2026 = bribeTotal * .24 + bribeTotal;
var 2030 = bribeTotal * .36 + bribeTotal;
var 2034 = bribeTotal * .48 + bribeTotal;
var 2038 = bribeTotal * .60 + bribeTotal;
var 2042 = bribeTotal * .72 + bribeTotal;
var 2046 = bribeTotal * .84 + bribeTotal;
var 2050 = bribeTotal * .96 + bribeTotal;
var 2054 = bribeTotal * 1.08 + bribeTotal;
var 2058 = bribeTotal * 1.20 + bribeTotal;
var 2062 = bribeTotal * 1.32 + bribeTotal;
var 2066 = bribeTotal * 1.44 + bribeTotal;
var 2070 = bribeTotal * 1.56 + bribeTotal;
var 2074 = bribeTotal * 1.68 + bribeTotal;
var 2078 = bribeTotal * 1.80 + bribeTotal;
var 2082 = bribeTotal * 1.92 + bribeTotal;
var 2086 = bribeTotal * 2.04 + bribeTotal;
var 2090 = bribeTotal * 2.16 + bribeTotal;
var 2094 = bribeTotal * 2.28 + bribeTotal;
var 2098 = bribeTotal * 2.40 + bribeTotal;
var 2102 = bribeTotal * 2.52 + bribeTotal;

//Conversion rates applied to show bribeTotal in Swiss Francs

var ultiBribeTotal = this.Country.exchange * bribeTotal;
console.log(ultiBribeTotal);

//numStadiums compared to Global Stadiums needed

var globalStadiums = 12 {
  if (this.Country.numStadiums < globalStadiums) {
    return "Your country needs to build " +
            globalStadiums.length - this.Country.numStadiums.length +
            " in order to host a World Cup.";
  } else {
    return null;
  }
}

//Calculates the total needed to build x amount of stadiums to meet
//the global stadiums needed

var buildCost = (globalStadiums.length - numStadiums.length) * 1200000000;
var displayEndCost = buildCost * this.Country.exchange;
