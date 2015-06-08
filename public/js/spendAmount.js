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

countries.push(new Country('Afghanistan', "afghani", 63.38, 0));
countries.push(new Country('Algeria', "dinar", 104.88, 1));
countries.push(new Country('Andorra', "euros", 0.95, 0));
countries.push(new Country('Argentina', "pesos", 9.66, 1));
countries.push(new Country('Australia', "dollars", 1.39, 2));
countries.push(new Country('Austria', "euros", 1.03, 0));
countries.push(new Country('The Bahamas', "dollars", 1.07, 0));
countries.push(new Country('Bahrain', "dinar", 0.4, 0));
countries.push(new Country('Barbados', "dollars", 0.94, 0));
countries.push(new Country('Belgium', "euros", 0.95, 1));
countries.push(new Country('Belize', "dollars", 2.14, 0));
countries.push(new Country('Benin', "francs", 1, 0));
countries.push(new Country('Bolivia', "boliviano", 7.39, 0));
countries.push(new Country('Brazil', "real", 3.37, 4));
countries.push(new Country('Brunei', "dollars", 1.44, 0));
countries.push(new Country('Bulgaria', "levs", 1.86, 0));
countries.push(new Country('Cameroon', "francs", 1, 0));
countries.push(new Country('Canada', "dollars", 1.34, 0));
countries.push(new Country('The Cayman Islands', "dollars", 0.88, 0));
countries.push(new Country('The Central African Republic', "CFA francs", 625.37, 0));
countries.push(new Country('Chad', "francs", 1, 0));
countries.push(new Country('Chile', "pesos", 673.48, 0));
countries.push(new Country('China', "yuans", 6.65, 12));
countries.push(new Country('Columbia', "pesos", 2779.36, 0));
countries.push(new Country('Congo', "Congolese francs", 985.84, 0));
countries.push(new Country('Costa Rica', "colon", 573.66, 0));
countries.push(new Country('Cuba', "pesos", 1.07, 1));
countries.push(new Country('Cyprus Greek', "euros", 1.03, 1));
countries.push(new Country('Cyprus Turkish', "liras", 2.86, 1));
countries.push(new Country('Czechoslovakia', "korunas", 26.15, 0));
countries.push(new Country('Denmark', "krones", 7.11, 0));
countries.push(new Country('Djibouti', "Dijboutian francs", 189.54, 0));
countries.push(new Country('The Dominican Republic', "pesos", 16.66, 0));
countries.push(new Country('Ecuador', "dollars", 1.9, 1));
countries.push(new Country('Egypt', "pounds", 8.17, 3));
countries.push(new Country('El Salvador', "colon", 573.66, 0));
countries.push(new Country('England', "pounds", 0.7, 5));
countries.push(new Country('Ethiopia', "birrs", 22.07, 0));
countries.push(new Country('Fiji', "dollars", 2.23, 0));
countries.push(new Country('Finland', "euros", 1.03, 1));
countries.push(new Country('France', "euros", 1.03, 2));
countries.push(new Country('Gabon', "francs", 1, 0));
countries.push(new Country('Gambia', "dalasi", 45.99, 0));
countries.push(new Country('Germany', "euros", 1.03, 6));
countries.push(new Country('Ghana', "cedi", 4.47, 0));
countries.push(new Country('Greece', "euros", 1.03, 1));
countries.push(new Country('Guatemala', "quetzals", 8.23, 0));
countries.push(new Country('Guinea', "Guinean francs", 7863.67, 0));
countries.push(new Country('Guyana', "Guyanaese dollars", 221.99, 0));
countries.push(new Country('Haiti', "gourdes", 51.98, 0));
countries.push(new Country('Honduras', "lempiras", 23.46, 0));
countries.push(new Country('Hong Kong', "dollars", 8.3, 1));
countries.push(new Country('Hungary', "forints", 296.76, 1));
countries.push(new Country('Iceland', "kronas", 141.55, 0));
countries.push(new Country('India', "rupees", 68.53, 10));
countries.push(new Country('Indonesia', "rupiahs", 14228.02, 2));
countries.push(new Country('Iraq', "dinar", 1275.49, 1));
countries.push(new Country('Ireland', "euros", 1.03, 1));
countries.push(new Country('Israel', "sheqel", 4.11, 0));
countries.push(new Country('Italy', "euros", 1.03, 4));
countries.push(new Country('The Ivory Coast', "francs", 1, 0));
countries.push(new Country('Jamaica', "dollars", 124.05, 0));
countries.push(new Country('Japan', "yen", 133.25, 2));
countries.push(new Country('Jordan', "dinars", 0.76, 0));
countries.push(new Country('Kenya', "shillings", 103.03, 3));
countries.push(new Country('Kuwait', "dinar", 0.32, 1));
countries.push(new Country('Lebanon', "Lebanese pounds", 1616.39, 1));
countries.push(new Country('Luxembourg', "euros", 1.03, 0));
countries.push(new Country('Malawi', "kwacha", 476.82, 0));
countries.push(new Country('Malaysia', "ringgits", 3.98, 2));
countries.push(new Country('Maldives', "rufiyaas", 16.45, 0));
countries.push(new Country('Malta', "euros", 1.03, 0));
countries.push(new Country('Mauritania', "ouguiya", 332.17, 0));
countries.push(new Country('Mauritius', "rupees", 37.64, 0));
countries.push(new Country('Mexico', "pesos", 16.65, 3));
countries.push(new Country('Mongolia', "tugrik", 2020.67, 0));
countries.push(new Country('Montenegro', "euros", 1.03, 0));
countries.push(new Country('Morocco', "dirhams", 10.37, 2));
countries.push(new Country('Nepal', "rupees", 109.74, 0));
countries.push(new Country('The Netherlands', "euros", 1.03, 2));
countries.push(new Country('New Zealand', "dollars", 1.5, 0));
countries.push(new Country('Nicaragua', "cordobas", 29.09, 0));
countries.push(new Country('Niger', "francs", 1, 0));
countries.push(new Country('Northern Ireland', "pound sterling", 0.63, 0));
countries.push(new Country('Norway', "krones", 8.31, 1));
countries.push(new Country('Oman', "riyal", 0.25, 0));
countries.push(new Country('Pakistan', "rupees", 109.13, 1));
countries.push(new Country('Papua New Guinea', "kinas", 2.92, 1));
countries.push(new Country('Paraguay', "guaranis", 5461.85, 0));
countries.push(new Country('Peru', "intis", 3.37, 1));
countries.push(new Country('The Philippines', "pesos", 48.13, 0));
countries.push(new Country('Poland', "zloty", 3.98, 2));
countries.push(new Country('Portugal', "euros", 1.03, 1));
countries.push(new Country('Qatar', "riyals", 3.9, 2));
countries.push(new Country('Romania', "leus", 4.22, 1));
countries.push(new Country('Russia', "ruble", 60.46, 2));
countries.push(new Country('Saudi Arabia', "riyal", 4.02, 2));
countries.push(new Country('Scotland', "pound sterling", 0.63, 1));
countries.push(new Country('Senegal', "francs", 1, 1));
countries.push(new Country('Serbia', "dinar", 114.79, 1));
countries.push(new Country('Seychelles', "rupees", 14.3, 0));
countries.push(new Country('Sierra Leone', "leones", 4711.28, 0));
countries.push(new Country('Singapore', "dollars", 1.44, 1));
countries.push(new Country('Slovakia', "korunas", 8.87, 0));
countries.push(new Country('Slovenia', "euros", 1.03, 0));
countries.push(new Country('The Solomon Islands', "dollars", 8.39, 0));
countries.push(new Country('Somalia', "shillings", 745.6, 0));
countries.push(new Country('South Africa', "rands", 13.26, 2));
countries.push(new Country('South Korea', "won", 1193, 421));
countries.push(new Country('Spain', "euros", 1.03, 6));
countries.push(new Country('Sri Lanka', "rupees", 143.7, 0));
countries.push(new Country('Sudan', "dinars", 6.4, 0));
countries.push(new Country('Suriname', "dollar", 3.54, 0));
countries.push(new Country('Sweden', "kronas", 8.87, 1));
countries.push(new Country('Switzerland', "Swiss francs", 1, 0));
countries.push(new Country('Syria', "pounds", 202.29, 1));
countries.push(new Country('Taiwan', "dollars", 3.98, 1));
countries.push(new Country('Tanzania', "shillings", 2309.12, 1));
countries.push(new Country('Thailand', "bahts", 36.13, 1));
countries.push(new Country('Togo', "francs", 44.2, 0));
countries.push(new Country('Trinidad and Tobago', "dollars", 6.8, 0));
countries.push(new Country('Tunisia', "dinar", 2.07, 1));
countries.push(new Country('Turkey', "liras", 2.86, 3));
countries.push(new Country('Uganda', "shillings", 3293.72, 0));
countries.push(new Country('The United Arab Emirates', "dirhams", 3.93, 1));
countries.push(new Country('The United States', "dollars", 1.07, 78));
countries.push(new Country('Uruguay', "pesos", 28.63, 1));
countries.push(new Country('Venezuela', "bolivars", 6.8, 1));
countries.push(new Country('Vietnam', "dong", 23371.35, 0));
countries.push(new Country('Wales', "pound sterling", 0.63, 1));
countries.push(new Country('Western Samoa', "talas", 18.3, 0));
countries.push(new Country('Zambia', "kwacha", 5626.16, 0));
countries.push(new Country('Zimbabwe', "dollars", 387.65, 1));


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
