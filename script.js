const Apple = 15.678;
const Banana = 123.965;
const Strawberries = 90.2345;
let a = Apple;
let b = Banana;
let x = Strawberries;




const maxPrice = Math.max(Apple, Banana, Strawberries);
console.log(maxPrice);
const minPrice = Math.min(a, b, x);
console.log(minPrice);
const sumPrices = a + b + x;
console.log(sumPrices);
const mathFloorPrices = Math.floor(a) + Math.floor(b) + Math.floor(x);
console.log(mathFloorPrices);
const priceToHundred = Math.round(sumPrices/100) * 100;
console.log(priceToHundred);
const idkPrice = mathFloorPrices % 2;
console.log(!idkPrice);
const rest = 500 - sumPrices;
console.log(rest);
const average = (sumPrices / 3).toFixed(2);
console.log(average);
const discount = Math.round(Math.random() * (90 - 1) + 1);
console.log(discount);
const randomDiscount = sumPrices / 100 * (100 - discount);
console.log(randomDiscount.toFixed(2));
const profit = sumPrices / 2 - (sumPrices * (discount / 100));
console.log(profit.toFixed(3));

   document.writeln(
   ` <b>Максимальна ціна:</b> ${maxPrice} </br>
      <b>Мінімальна ціна:</b> ${minPrice} </br>
      <b>Загальна сума:</b> ${sumPrices} </br>
      <b>Ціна без копійок:</b> ${mathFloorPrices} </br>
      <b>Сума товарів округлена до сотень:</b> ${priceToHundred}</br>
      <b>Парність числа:</b> ${!idkPrice}</br>
      <b>Решта з 500 грн:</b> ${rest}</br>
      <b>Середня ціна:</b> ${average}</br>
      <b>Знижка:</b> ${discount}% </br>
      <b>Ціна зі знижкою:</b> ${randomDiscount.toFixed(2)}</br>
      <b>Чистий прибуток:</b> ${profit.toFixed()}</br>
      ` 
      
   );

      