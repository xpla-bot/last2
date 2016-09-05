var curTable;

$.get('https://openexchangerates.org/api/latest.json', {app_id: 'b54fc8736f7142118122fddb2c9dc837'}, function(data){
  curTable = JSON.stringify(data);
});



$(".currencyIn").keyup(function(){
  amount = ($(this).val());
});
$(".currency").keyup(function(){
  currency = ($(this).val());
  console.log(amount + currency);
});
$(".currencyIn3").keyup(function(){
  fcurrency = ($(this).val());
});

$(".currencyOut").click(function(){
  $(".currencyOutP").text((JSON.parse(curTable).rates[currency]*amount/(JSON.parse(curTable).rates[fcurrency])*amount).toFixed(2));
})
