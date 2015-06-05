//Currencies & Countries of the World...
//List 1 is currencies
//List 2 is countries

//The following functions are based off of countries
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

countries.push(new Country('Afghanistan', "afghani", 63.38, 5));
countries.push(new Country('Algeria', "dinar", 104.88, 29));
countries.push(new Country('Andorra', "euros", 0.95, 3));
countries.push(new Country('Argentina', "pesos", 9.66, 127));
countries.push(new Country('Australia', "dollars", 1.39, 190));
countries.push(new Country('Austria', "euros", 1.03, 62));
countries.push(new Country('The Bahamas', "dollars", 1.07, 2));
countries.push(new Country('Bahrain', "dinar", 0.4, 6));
countries.push(new Country('Barbados', "dollars", 0.94, 2));
countries.push(new Country('Belgium', "euros", 0.95, 74));
countries.push(new Country('Belize', "dollars", 2.14, 9));
countries.push(new Country('Benin', "francs", 1, 11));
countries.push(new Country('Bolivia', "boliviano", 7.39, 13));
countries.push(new Country('Brazil', "real", 3.37, 888));
countries.push(new Country('Brunei', "dollars", 1.44, 1));
countries.push(new Country('Bulgaria', "levs", 1.86, 12));
countries.push(new Country('Cameroon', "francs", 1, 17));
countries.push(new Country('Canada', "dollars", 1.34, 238));
countries.push(new Country('The Cayman Islands', "dollars", 0.88, 6));
countries.push(new Country('The Central African Republic', "CFA francs", 625.37, 86));
countries.push(new Country('Chad', "francs", 1, 13));
countries.push(new Country('Chile', "pesos", 673.48, 65));
countries.push(new Country('China', "yuans", 6.65, 47));
countries.push(new Country('Columbia', "pesos", 2779.36, 69));
countries.push(new Country('Congo', "Congolese francs", 985.84, 5));
countries.push(new Country('Costa Rica', "colon", 573.66, 28));
countries.push(new Country('Cuba', "pesos", 1.07, 32));
countries.push(new Country('Cyprus Greek', "euros", 1.03, 20));
countries.push(new Country('Cyprus Turkish', "liras", 2.86, 20));
countries.push(new Country('Czechoslovakia', "korunas", 26.15, 67));
countries.push(new Country('Denmark', "krones", 7.11, 101));
countries.push(new Country('Djibouti', "Dijboutian francs", 189.54, 1));
countries.push(new Country('The Dominican Republic', "pesos", 16.66, 14));
countries.push(new Country('Ecuador', "dollars", 1.9, 67));
countries.push(new Country('Egypt', "pounds", 8.17, 34));
countries.push(new Country('El Salvador', "colon", 573.66, 18));
countries.push(new Country('Ethiopia', "birrs", 22.07, 13));
countries.push(new Country('Fiji', "dollars", 2.23, 17));
countries.push(new Country('Finland', "euros", 1.03, 186));
countries.push(new Country('France', "euros", 1.03, 336));
countries.push(new Country('Gabon', "francs", 1, 12));
countries.push(new Country('Gambia', "dalasi", 45.99, 15));
countries.push(new Country('Germany', "euros", 1.03, 521));
countries.push(new Country('Ghana', "cedi", 4.47, 21));
countries.push(new Country('Greece', "euros", 1.03, 58));
countries.push(new Country('Guatemala', "quetzals", 8.23, 42));
countries.push(new Country('Guinea', "Guinean francs", 7863.67, 4));
countries.push(new Country('Guyana', "Guyanaese dollars", 221.99, 3));
countries.push(new Country('Haiti', "gourdes", 51.98, 4));
countries.push(new Country('Honduras', "lempiras", 23.46, 40));
countries.push(new Country('Hong Kong', "dollars", 8.3, 15));
countries.push(new Country('Hungary', "forints", 296.76, 81));
countries.push(new Country('Iceland', "kronas", 141.55, 29));
countries.push(new Country('India', "rupees", 68.53, 184));
countries.push(new Country('Indonesia', "rupiahs", 14228.02, 112));
countries.push(new Country('Iraq', "dinar", 1275.49, 46));
countries.push(new Country('Ireland', "euros", 1.03, 79));
countries.push(new Country('Israel', "sheqel", 4.11, 36));
countries.push(new Country('Italy', "euros", 1.03, 282));
countries.push(new Country('The Ivory Coast', "francs", 1, 15));
countries.push(new Country('Jamaica', "dollars", 124.05, 16));
countries.push(new Country('Japan', "yen", 133.25, 169));
countries.push(new Country('Jordan', "dinars", 0.76, 7));
countries.push(new Country('Kenya', "shillings", 103.03, 29));
countries.push(new Country('Kuwait', "dinar", 0.32, 13));
countries.push(new Country('Lebanon', "Lebanese pounds", 1616.39, 23));
countries.push(new Country('Luxembourg', "euros", 1.03, 26));
countries.push(new Country('Malawi', "kwacha", 476.82, 3));
countries.push(new Country('Malaysia', "ringgits", 3.98, 35));
countries.push(new Country('Maldives', "rufiyaas", 16.45, 1));
countries.push(new Country('Malta', "euros", 1.03, 13));
countries.push(new Country('Mauritania', "ouguiya", 332.17, 2));
countries.push(new Country('Mauritius', "rupees", 37.64, 4));
countries.push(new Country('Mexico', "pesos", 16.65, 173));
countries.push(new Country('Mongolia', "tugrik", 2020.67, 1));
countries.push(new Country('Montenegro', "euros", 1.03, 31));
countries.push(new Country('Morocco', "dirhams", 10.37, 67));
countries.push(new Country('Nepal', "rupees", 109.74, 8));
countries.push(new Country('The Netherlands', "euros", 1.03, 75));
countries.push(new Country('New Zealand', "dollars", 1.5, 42));
countries.push(new Country('Nicaragua', "cordobas", 29.09, 19));
countries.push(new Country('Niger', "francs", 1, 20));
countries.push(new Country('Norway', "krones", 8.31, 66));
countries.push(new Country('Oman', "riyal", 0.25, 8));
countries.push(new Country('Pakistan', "rupees", 109.13, 62));
countries.push(new Country('Papua New Guinea', "kinas", 2.92, 4));
countries.push(new Country('Paraguay', "guaranis", 5461.85, 17));
countries.push(new Country('Peru', "intis", 3.37, 56));
countries.push(new Country('The Philippines', "pesos", 48.13, 37));
countries.push(new Country('Poland', "zloty", 3.98, 199));
countries.push(new Country('Portugal', "euros", 1.03, 113));
countries.push(new Country('Qatar', "riyals", 3.9, 25));
countries.push(new Country('Romania', "leus", 4.22, 97));
countries.push(new Country('Saudi Arabia', "riyal", 4.02, 23));
countries.push(new Country('Senegal', "francs", 1, 20));
countries.push(new Country('Serbia', "dinar", 114.79, 40));
countries.push(new Country('Seychelles', "rupees", 14.3, 2));
countries.push(new Country('Sierra Leone', "leones", 4711.28, 4));
countries.push(new Country('Singapore', "dollars", 1.44, 78));
countries.push(new Country('Slovakia', "korunas", 8.87, 37));
countries.push(new Country('Slovenia', "euros", 1.03, 30));
countries.push(new Country('The Solomon Islands', "dollars", 8.39, 1));
countries.push(new Country('Somalia', "shillings", 745.6, 3));
countries.push(new Country('South Africa', "rands", 13.26, 102));
countries.push(new Country('South Korea', "won", 1193, 421));
countries.push(new Country('Spain', "euros", 1.03, 434));
countries.push(new Country('Sri Lanka', "rupees", 143.7, 16));
countries.push(new Country('Sudan', "dinars", 6.4, 12));
countries.push(new Country('Suriname', "dollar", 3.54, 16));
countries.push(new Country('Sweden', "kronas", 8.87, 98));
countries.push(new Country('Switzerland', "Swiss francs", 1, 157));
countries.push(new Country('Syria', "pounds", 202.29, 9));
countries.push(new Country('Taiwan', "dollars", 3.98, 48));
countries.push(new Country('Tanzania', "shillings", 2309.12, 18));
countries.push(new Country('Thailand', "bahts", 36.13, 55));
countries.push(new Country('Togo', "francs", 44.2, 16));
countries.push(new Country('Trinidad and Tobago', "dollars", 6.8, 9));
countries.push(new Country('Tunisia', "dinar", 2.07, 24));
countries.push(new Country('Turkey', "liras", 2.86, 194));
countries.push(new Country('Uganda', "shillings", 3293.72, 4));
countries.push(new Country('The United Arab Emirates', "dirhams", 3.93, 28));
countries.push(new Country('The United Kingdom', "pounds", 0.7, 389));
countries.push(new Country('The United States', "dollars", 1.07, 2491));
countries.push(new Country('Uruguay', "pesos", 28.63, 56));
countries.push(new Country('Venezuela', "bolivars", 6.8, 51));
countries.push(new Country('Vietnam', "dong", 23371.35, 37));
countries.push(new Country('Western Samoa', "talas", 18.3, 2));
countries.push(new Country('Zambia', "kwacha", 5626.16, 28));
countries.push(new Country('Zimbabwe', "dollars", 387.65, 16));


//This is the bribeResult function that fires when
//Submit button is clicked.

var $countrySelect;
var bribeResult = document.getElementById("getResult");
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
  var minStadium = 12;
  var $front = $('.front');
  var rand = Math.floor(Math.random() * (100000000 - 80000000) + 80000000);
  console.log(rand);

  var needsMore = '<div class="front"><p>' + $countrySelect.name + ' will need to pay a bribe to FIFA in the amount of ' + Math.floor(rand * $countrySelect.exchange * inflation()).toLocaleString() + ' ' + $countrySelect.currency + '. Remember, FIFA is based in Switzerland and they prefer to receive bribes in Swiss francs. So you\'ll need to give FIFA ' + Math.floor(rand * inflation()).toLocaleString() + ' Swiss francs.</p><p>' + $countrySelect.name + ' only has ' + $countrySelect.numStadiums + ' stadiums with a capacity of 60,000+ people. ' + $countrySelect.name + ' will need to build ' + stadiumCount() + ' new stadiums in order to host the ' + $yearSelect + ' World Cup. The cost to build ' + stadiumCount() + ' stadiums is only ' + (stadiumCount() * 1200000000).toLocaleString() + ' Swiss francs.</p><p><strong>Bribe Amount + Stadium Cost = ' + Math.floor(rand * inflation() + (stadiumCount() * 1200000000)).toLocaleString() + ' Swiss francs</strong></p><button class="tada">Want to pick a different country?</button></div>';
  var hasEnough = '<div class="front"><p>' + $countrySelect.name + ' will need to pay a bribe to FIFA in the amount of ' + Math.floor(rand * $countrySelect.exchange * inflation()).toLocaleString() + ' ' + $countrySelect.currency + '. Remember, FIFA is based in Switzerland and they prefer to receive bribes in Swiss francs. So you\'ll need to give FIFA ' + Math.floor(rand * inflation()).toLocaleString() + ' Swiss francs.</p><p>' + $countrySelect.name + ' has ' + $countrySelect.numStadiums + ' stadiums with a capacity of 60,000+ people. That\'s good news because you need at least 12 stadiums to host the ' + $yearSelect + ' World Cup. ' + $countrySelect.name + ' won\'t need to build new stadiums. So there\'s that.</p><p><strong>Total Bribe Amount = ' + Math.floor(rand * inflation()).toLocaleString() + ' Swiss francs</strong></p><button class="tada">Want to pick a different country?</button></div>';

  if ($countrySelect.numStadiums < minStadium) {
    $front.html(needsMore);
  } else {
    $front.html(hasEnough);
  }
})

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
