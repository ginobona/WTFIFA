//Currencies & Countries of the World...
//List 1 is currencies
//List 2 is countries

//The following functions are based off of countries, built with prototype.constructor
//Each country takes three arguments
//The first argument is the country name
//The second argument is the currency type
//The third argument is the exchange rate to the Swiss Franc
//The final argument is the number of stadiums within the country

var countries = [];
function Country(name, currency, exchange, numStadiums) {
  this.name = name;
  this.currency = currency;
  this.exchange = exchange;
  this.numStadiums = numStadiums;
}

countries.push(new Country('Afghanistan', "afghanis", 0.02, 5));
countries.push(new Country('Algeria', "dinars", 0.0095, 29));
countries.push(new Country('Andorra', "euros", 1.03, 3));
countries.push(new Country('Argentina', "pesos", 0.061, 127));
countries.push(new Country('Australia', "dollars", 0.94, 190));
countries.push(new Country('Austria', "euros", 1.03, 62));
countries.push(new Country('Bahamas', "dollars", 0.94, 2));
countries.push(new Country('Bahrain', "dinars", 0.0095, 6));
countries.push(new Country('Barbados', "dollars", 0.94, 2));
countries.push(new Country('Belgium', "euros", 1.03, 74));
countries.push(new Country('Belize', "dollars", 0.94, 9));
countries.push(new Country('Benin', "francs", 1, 11));
countries.push(new Country('Bolivia', "bolivianos", 0.14, 13));
countries.push(new Country('Brazil', "reals", 0.30, 888));
countries.push(new Country('Brunei', "dollars", 0.94, 1));
countries.push(new Country('Bulgaria', "levs", 0.53, 12));
countries.push(new Country('Cameroon', "francs", 1, 17));
countries.push(new Country('Canada', "dollars", 0.94, 238));
countries.push(new Country('Cayman_Islands', "dollars", 0.94, 6));
countries.push(new Country('Central_African_Republic', "francs", 1, 86));
countries.push(new Country('Chad', "francs", 1, 13));
countries.push(new Country('Chile', "pesos", 0.061, 65));
countries.push(new Country('China', "yuans", 0.15, 47));
countries.push(new Country('Columbia', "pesos", 0.061, 69));
countries.push(new Country('Congo', "francs", 1, 5));
countries.push(new Country('Costa_Rica', "colons", 0.0018, 28));
countries.push(new Country('Cuba', "pesos", 0.061, 32));
countries.push(new Country('Cyprus_Greek', "euros", 1.03, 20));
countries.push(new Country('Cyprus_Turkish', "liras", 0.35, 20));
countries.push(new Country('Czechoslovakia', "korunas", 0.038, 67));
countries.push(new Country('Denmark', "krones", 0.14, 101));
countries.push(new Country('Djibouti', "francs", 1, 1));
countries.push(new Country('Dominican_Republic', "pesos", 0.061, 14));
countries.push(new Country('Ecuador', "dollars", 0.94, 67));
countries.push(new Country('Egypt', "pounds", 1.44, 34));
countries.push(new Country('El_Salvador', "colons", 0.0018, 18));
countries.push(new Country('Ethiopia', "birrs", 0.046, 13));
countries.push(new Country('Fiji', "dollars", 0.94, 17));
countries.push(new Country('Finland', "euros", 1.03, 186));
countries.push(new Country('France', "euros", 1.03, 336));
countries.push(new Country('Gabon', "francs", 1, 12));
countries.push(new Country('Gambia', "dalasis", 0.022, 15));
countries.push(new Country('Germany', "euros", 1.03, 521));
countries.push(new Country('Ghana', "cedis", 0.23, 21));
countries.push(new Country('Greece', "euros", 1.03, 58));
countries.push(new Country('Guatemala', "quetzals", 0.12, 42));
countries.push(new Country('Guinea', "francs", 1, 4));
countries.push(new Country('Guyana', "dollars", 0.94, 3));
countries.push(new Country('Haiti', "gourdes", 0.020, 4));
countries.push(new Country('Honduras', "lempiras", 0.043, 40));
countries.push(new Country('Hong_Kong', "dollars", 0.94, 15));
countries.push(new Country('Hungary', "forints", 0.0033, 81));
countries.push(new Country('Iceland', "kronas", 0.11, 29));
countries.push(new Country('India', "rupees", 0.015, 184));
countries.push(new Country('Indonesia', "rupiahs", 0.000071, 112));
countries.push(new Country('Iraq', "dinars", 0.0095, 46));
countries.push(new Country('Ireland', "euros", 1.03, 79));
countries.push(new Country('Israel', "shekels", 0.24, 36));
countries.push(new Country('Italy', "euros", 1.03, 282));
countries.push(new Country('Ivory_Coast', "francs", 1, 15));
countries.push(new Country('Jamaica', "dollars", 0.94, 16));
countries.push(new Country('Japan', "yens", 0.0076, 169));
countries.push(new Country('Jordan', "dinars", 0.0095, 7));
countries.push(new Country('Kenya', "shillings", 0.0096, 29));
countries.push(new Country('Kuwait', "dinars", 0.0095, 13));
countries.push(new Country('Lebanon', "pounds", 1.44, 23));
countries.push(new Country('Luxembourg', "euros", 1.03, 26));
countries.push(new Country('Malawi', "kwachas", 0.00018, 3));
countries.push(new Country('Malaysia', "ringgits", 0.26, 35));
countries.push(new Country('Maldives', "rufiyaas", 0.061, 1));
countries.push(new Country('Malta', "euros", 1.03, 13));
countries.push(new Country('Mauritania', "ouguiyas", 0.0030, 2));
countries.push(new Country('Mauritius', "rupees", 0.015, 4));
countries.push(new Country('Mexico', "pesos", 0.061, 173));
countries.push(new Country('Mongolia', "tugriks", 0.00049, 1));
countries.push(new Country('Montenegro', "euros", 1.03, 31));
countries.push(new Country('Morocco', "dirhams", 0.26, 67));
countries.push(new Country('Nepal', "rupees", 0.015, 8));
countries.push(new Country('Netherlands', "euros", 1.03, 75));
countries.push(new Country('New_Zealand', "dollars", 0.94, 42));
countries.push(new Country('Nicaragua', "cordobas", 0.035, 19));
countries.push(new Country('Niger', "francs", 1, 20));
countries.push(new Country('Norway', "krones", 0.14, 66));
countries.push(new Country('Oman', "riyal-omanis", 0.25, 8));
countries.push(new Country('Pakistan', "rupees", 0.015, 62));
countries.push(new Country('Papua_New_Guinea', "kinas", 0.35, 4));
countries.push(new Country('Paraguay', "guaranis", 0.00018, 17));
countries.push(new Country('Peru', "intis", 0.30, 56));
countries.push(new Country('Philippines', "pesos", 0.061, 37));
countries.push(new Country('Poland', "zlotys", 0.25, 199));
countries.push(new Country('Portugal', "euros", 1.03, 113));
countries.push(new Country('Qatar', "riyals", 0.25, 25));
countries.push(new Country('Romania', "leus", 0.23, 97));
countries.push(new Country('Saudi_Arabia', "riyals", 0.25, 23));
countries.push(new Country('Senegal', "francs", 1, 20));
countries.push(new Country('Serbia', "dinars", 0.0095, 40));
countries.push(new Country('Seychelles', "rupees", 0.015, 2));
countries.push(new Country('Sierra_Leone', "leones", 0.00022, 4));
countries.push(new Country('Singapore', "dollars", 0.94, 78));
countries.push(new Country('Slovakia', "korunas", 0.038, 37));
countries.push(new Country('Slovenia', "euros", 1.03, 30));
countries.push(new Country('Solomon_Islands', "dollars", 0.94, 1));
countries.push(new Country('Somalia', "shillings", 0.0096, 3));
countries.push(new Country('South_Africa', "rands", 0.077, 102));
countries.push(new Country('South_Korea', "wons", 0.00084, 421));
countries.push(new Country('Spain', "euros", 1.03, 434));
countries.push(new Country('Sri_Lanka', "rupees", 0.015, 16));
countries.push(new Country('Sudan', "dinars", 0.0095, 12));
countries.push(new Country('Suriname', "guilders", 0.53, 16));
countries.push(new Country('Sweden', "kronas", 0.11, 98));
countries.push(new Country('Switzerland', "francs", 1, 157));
countries.push(new Country('Syria', "pounds", 1.44, 9));
countries.push(new Country('Taiwan', "dollars", 0.94, 48));
countries.push(new Country('Tanzania', "shillings", 0.0096, 18));
countries.push(new Country('Thailand', "bahts", 0.028, 55));
countries.push(new Country('Togo', "francs", 1, 16));
countries.push(new Country('Trinidad_and_Tobago', "dollars", 0.94, 9));
countries.push(new Country('Tunisia', "dinars", 0.00081, 24));
countries.push(new Country('Turkey', "liras", .35, 194));
countries.push(new Country('Uganda', "shillings", 0.0096, 4));
countries.push(new Country('United_Arab_Emirates', "dirhams", 0.26, 28));
countries.push(new Country('United_Kingdom', "pounds", 1.44, 389));
countries.push(new Country('United_States', "dollars", 0.94, 2491));
countries.push(new Country('Uruguay', "pesos", 0.061, 56));
countries.push(new Country('Venezuela', "bolivars", 0.15, 51));
countries.push(new Country('Vietnam', "dongs", 0.000043, 37));
countries.push(new Country('Western_Samoa', "talas", 0.38, 2));
countries.push(new Country('Zambia', "kwachas", 0.00018, 28));
countries.push(new Country('Zimbabwe', "dollars", 0.94, 16));


//This is the bribeResult function that fires when
//Submit button is clicked.

var $countrySelect;
var bribeResult = document.getElementById("tada");
var $selector = $('.country');
$selector.on('change', function() {
  $countrySelect = $('.country option:selected').text();
  for (var i = 0; i < countries.length; i++) {
    if ($countrySelect == countries[i].name) {
      $countrySelect = countries[i];
    }
  }
});

var $yearSelect;
var $selectory = $('.year');
$selectory.on('change', function() {
  $yearSelect = parseInt($('.year option:selected').text());
});

bribeResult.addEventListener("click", function(e){
  e.preventDefault();
  var $front = $('.front');
  var rand = Math.floor(Math.random() * (100000000 - 80000000) + 80000000);


  $front.html('<div class="front"><p>Based on our propietary algorithm, ' + $countrySelect.name + ' will need to pay a bribe to FIFA in the amount of ' + Math.floor(rand * $countrySelect.exchange * inflation()) + ' ' + $countrySelect.currency + '. Remember, FIFA is based in Switzerland and they prefer to receive bribes in francs. So you\'ll need to give FIFA ' + Math.floor(rand * inflation()) + ' francs.</p><p>Oh, and since ' + $countrySelect.name + ' only has ' + $countrySelect.numStadiums + ' stadiums with a capacity of 60,000+ people, the good people of ' + $countrySelect.name + ' will need to build ' + stadiumCount() + ' new stadiums. The cost to build ' + stadiumCount() + ' stadiums is only ' + stadiumCount() * 1200000000 + ' francs.</p></div>');
});

var stadiumCount = function() {
  var minStadium = 12;
  if ($countrySelect.numStadiums < minStadium) {
    return minStadium - $countrySelect.numStadiums;
  }
  else {
    return 0;
  }
}

var inflation = function() {
  var $year = $('.year option:selected').val();
  return $year;
}


