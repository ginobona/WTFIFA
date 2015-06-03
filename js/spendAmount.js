//Currencies & Countries of the World...
//List 1 is currencies
//List 2 is countries

//The following functions are based off of countries, built with prototype.constructor
//Each country takes three arguments
//The first argument is the currency type
//The second argument is the exchange rate to the Swiss Franc
//The final argument is the number of stadiums within the country

var countries = [];
function Country(name, currency, exchange, numStadiums) {
  this.name = name;
  this.currency = currency;
  this.exchange = exchange;
  this.numStadiums = numStadiums;
}

countries.push(new Country('afghanistan', "afghani", 0.02, 5));
countries.push(new Country('algeria', "dinar", 0.0095, 29));
countries.push(new Country('andorra', "euro", 1.03, 3));
countries.push(new Country('argentina', "peso", 0.061, 127));
countries.push(new Country('australia', "dollar", 0.94, 190));
countries.push(new Country('austria', "euro", 1.03, 62));
countries.push(new Country('bahamas', "dollar", 0.94, 2));
countries.push(new Country('bahrain', "dinar", 0.0095, 6));
countries.push(new Country('barbados', "dollar", 0.94, 2));
countries.push(new Country('belgium', "euro", 1.03, 74));
countries.push(new Country('belize', "dollar", 0.94, 9));
countries.push(new Country('benin', "franc", 1, 11));
countries.push(new Country('bolivia', "boliviano", 0.14, 13));
countries.push(new Country('brazil', "real", 0.30, 888));
countries.push(new Country('brunei', "dollar", 0.94, 1));
countries.push(new Country('bulgaria', "lev", 0.53, 12));
countries.push(new Country('cameroon', "franc", 1, 17));
countries.push(new Country('canada', "dollar", 0.94, 238));
countries.push(new Country('cayman_islands', "dollar", 0.94, 6));
countries.push(new Country('central_african_republic', "franc", 1, 86));
countries.push(new Country('chad', "franc", 1, 13));
countries.push(new Country('chile', "peso", 0.061, 65));
countries.push(new Country('china', "yuan", 0.15, 47));
countries.push(new Country('columbia', "peso", 0.061, 69));
countries.push(new Country('congo', "franc", 1, 5));
countries.push(new Country('costa_rica', "colon", 0.0018, 28));
countries.push(new Country('cuba', "peso", 0.061, 32));
countries.push(new Country('cyprus_greek', "euro", 1.03, 20));
countries.push(new Country('cyprus_turkish', "lira", 0.35, 20));
countries.push(new Country('czechoslovakia', "koruna", 0.038, 67));
countries.push(new Country('denmark', "krone", 0.14, 101));
countries.push(new Country('djibouti', "franc", 1, 1));
countries.push(new Country('dominican_republic', "peso", 0.061, 14));
countries.push(new Country('ecuador', "dollar", 0.94, 67));
countries.push(new Country('egypt', "pound", 1.44, 34));
countries.push(new Country('el_salvador', "colon", 0.0018, 18));
countries.push(new Country('ethiopia', "birr", 0.046, 13));
countries.push(new Country('fiji', "dollar", 0.94, 17));
countries.push(new Country('finland', "euro", 1.03, 186));
countries.push(new Country('france', "euro", 1.03, 336));
countries.push(new Country('gabon', "franc", 1, 12));
countries.push(new Country('gambia', "dalasi", 0.022, 15));
countries.push(new Country('germany', "euro", 1.03, 521));
countries.push(new Country('ghana', "cedi", 0.23, 21));
countries.push(new Country('greece', "euro", 1.03, 58));
countries.push(new Country('guatemala', "quetzal", 0.12, 42));
countries.push(new Country('guinea', "franc", 1, 4));
countries.push(new Country('guyana', "dollar", 0.94, 3));
countries.push(new Country('haiti', "gourde", 0.020, 4));
countries.push(new Country('honduras', "lempira", 0.043, 40));
countries.push(new Country('hong_kong', "dollar", 0.94, 15));
countries.push(new Country('hungary', "forint", 0.0033, 81));
countries.push(new Country('iceland', "krona", 0.11, 29));
countries.push(new Country('india', "rupee", 0.015, 184));
countries.push(new Country('indonesia', "rupiah", 0.000071, 112));
countries.push(new Country('iraq', "dinar", 0.0095, 46));
countries.push(new Country('ireland', "euro", 1.03, 79));
countries.push(new Country('israel', "shekel", 0.24, 36));
countries.push(new Country('italy', "euro", 1.03, 282));
countries.push(new Country('ivory_coast', "franc", 1, 15));
countries.push(new Country('jamaica', "dollar", 0.94, 16));
countries.push(new Country('japan', "yen", 0.0076, 169));
countries.push(new Country('jordan', "dinar", 0.0095, 7));
countries.push(new Country('kenya', "shilling", 0.0096, 29));
countries.push(new Country('kuwait', "dinar", 0.0095, 13));
countries.push(new Country('lebanon', "pound", 1.44, 23));
countries.push(new Country('luxembourg', "euro", 1.03, 26));
countries.push(new Country('malawi', "kwacha", 0.00018, 3));
countries.push(new Country('malaysia', "ringgit", 0.26, 35));
countries.push(new Country('maldives', "rufiyaa", 0.061, 1));
countries.push(new Country('malta', "euro", 1.03, 13));
countries.push(new Country('mauritania', "ouguiya", 0.0030, 2));
countries.push(new Country('mauritius', "rupee", 0.015, 4));
countries.push(new Country('mexico', "peso", 0.061, 173));
countries.push(new Country('mongolia', "tugrik", 0.00049, 1));
countries.push(new Country('montenegro', "euro", 1.03, 31));
countries.push(new Country('morocco', "dirham", 0.26, 67));
countries.push(new Country('nepal', "rupee", 0.015, 8));
countries.push(new Country('netherlands', "euro", 1.03, 75));
countries.push(new Country('new_zealand', "dollar", 0.94, 42));
countries.push(new Country('nicaragua', "cordoba", 0.035, 19));
countries.push(new Country('niger', "franc", 1, 20));
countries.push(new Country('norway', "krone", 0.14, 66));
countries.push(new Country('oman', "riyal-omani", 0.25, 8));
countries.push(new Country('pakistan', "rupee", 0.015, 62));
countries.push(new Country('papua_new_guinea', "kina", 0.35, 4));
countries.push(new Country('paraguay', "guarani", 0.00018, 17));
countries.push(new Country('peru', "inti", 0.30, 56));
countries.push(new Country('philippines', "peso", 0.061, 37));
countries.push(new Country('poland', "zloty", 0.25, 199));
countries.push(new Country('portugal', "euro", 1.03, 113));
countries.push(new Country('qatar', "riyal", 0.25, 25));
countries.push(new Country('romania', "leu", 0.23, 97));
countries.push(new Country('saudi_arabia', "riyal", 0.25, 23));
countries.push(new Country('senegal', "franc", 1, 20));
countries.push(new Country('serbia', "dinar", 0.0095, 40));
countries.push(new Country('seychelles', "rupee", 0.015, 2));
countries.push(new Country('sierra_leone', "leone", 0.00022, 4));
countries.push(new Country('singapore', "dollar", 0.94, 78));
countries.push(new Country('slovakia', "koruna", 0.038, 37));
countries.push(new Country('slovenia', "euro", 1.03, 30));
countries.push(new Country('solomon_islands', "dollar", 0.94, 1));
countries.push(new Country('somalia', "shilling", 0.0096, 3));
countries.push(new Country('south_africa', "rand", 0.077, 102));
countries.push(new Country('south_korea', "won", 0.00084, 421));
countries.push(new Country('spain', "euro", 1.03, 434));
countries.push(new Country('sri_lanka', "rupee", 0.015, 16));
countries.push(new Country('sudan', "dinar", 0.0095, 12));
countries.push(new Country('suriname', "guilder", 0.53, 16));
countries.push(new Country('sweden', "krona", 0.11, 98));
countries.push(new Country('switzerland', "franc", 1, 157));
countries.push(new Country('syria', "pound", 1.44, 9));
countries.push(new Country('taiwan', "dollar", 0.94, 48));
countries.push(new Country('tanzania', "shilling", 0.0096, 18));
countries.push(new Country('thailand', "baht", 0.028, 55));
countries.push(new Country('togo', "franc", 1, 16));
countries.push(new Country('trinidad_and_tobago', "dollar", 0.94, 9));
countries.push(new Country('tunisia', "dinar", 0.00081, 24));
countries.push(new Country('turkey', "lira", .35, 194));
countries.push(new Country('uganda', "shilling", 0.0096, 4));
countries.push(new Country('united_arab_emirates', "dirham", 0.26, 28));
countries.push(new Country('united_kingdom', "pound", 1.44, 389));
countries.push(new Country('united_states', "dollar", 0.94, 2491));
countries.push(new Country('uruguay', "peso", 0.061, 56));
countries.push(new Country('venezuela', "bolivar", 0.15, 51));
countries.push(new Country('vietnam', "dong", 0.000043, 37));
countries.push(new Country('western_samoa', "tala", 0.38, 2));
countries.push(new Country('zambia', "kwacha", 0.00018, 28));
countries.push(new Country('zimbabwe', "dollar", 0.94, 16));


//This is the bribeResult function that fires when
//Submit button is clicked.

var $countrySelect;
var bribeResult = document.getElementById("tada");
var $selector = $('.country');
$selector.on('change', function() {
  $countrySelect = $('.country option:selected').text();
  $countrySelect = $countrySelect.toLowerCase();
  for (var i = 0; i < countries.length; i++) {
    if ($countrySelect == countries[i].name) {
      $countrySelect = countries[i];
    }
  }
});

var $yearSelect;
var $selectory = $('.year');
$selectory.on('change', function() {
  $yearSelect = $('.year option:selected').text();
});

bribeResult.addEventListener("click", function(e){
  e.preventDefault();
  var $front = $('.front');
  var rand = Math.floor(Math.random() * (100000000 - 80000000) + 80000000);


  $front.html('<div class="front"><p>Based on our propietary algorithm, ' + $countrySelect.name + ' will need to pay a bribe to FIFA in the amount of ' + Math.floor(rand * $countrySelect.exchange) + ' ' + $countrySelect.currency + '. Remember, FIFA only accepts bribes paid in the Swiss franc. So you\'ll need to give FIFA ' + rand + ' francs.</p><p>Oh, and since ' + $countrySelect.name + ' only has ' + $countrySelect.numStadiums + ' stadiums with a capacity of 60,000+ people, the good people of ' + $countrySelect.name + ' will need to build ' + stadiumCount() + ' new stadiums. The cost to build ' + stadiumCount() + ' is only ' + stadiumCount() * 1200000000 + ' francs.</p></div>');
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
