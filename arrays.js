//Task_1

// let arrayNum = [1, 2, 3, 4, 5];
// console.log(arreaNum);
//
// let arrayWord = ['Vasya', 'Petya', 'Olya', 'Kolya', 'Ira'];
// console.log(arrayWord);
//
// let arreyMix = [145, 'Petya', true, 'Kolya', false];
// console.log(arrayMix);


//Task_2

// let arrayEmpty = [];
//
// arrayEmpty [0] = 'Vasya';
// arrayEmpty [1] = true;
// arrayEmpty [2] = {name: 'Petya', age: 25, work: true};
// arrayEmpty [3] = 458;
// arrayEmpty [4] = false;
// arrayEmpty [5] = 337;
//
// console.log(arrayEmpty);


//Task_3

// for (let i = 0; i < 10; i++) {
//     document.write('<div>Hello World</div>');
//
// }

//Task_4

// for (let i = 0; i < 10; i++) {
//     document.write('<div>Hello World: '+i+' </div>');
// }

//Task_5

// let i = 0;
// while (i < 20) {
//     document.write('<h1>Hello World</h1>');
//     i++;
// }


//Task_6

// let i = 0;
// while (i < 20) {
//     document.write('<h1>Hello World : '+i+'</h1>');
//     i++;
// }

//Task_7

// let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let number of arrayNum) {
//     console.log(number);
// }

//Task_8

// let arrayWord = ['Vasya', 'Petya', 'Olya', 'Kolya', 'Ira', 'Vika', 'Anya', 'Viktor', 'Jenya','Katya'];
//
// for (let word of arrayWord) {
//     console.log(word);
// }


// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrayMix= ['Vasya', true, 'Olya', 128, 'Ira', false, 'Anya', NaN, 'Jenya',undefined];
//
// for (let Mix of arrayMix) {
//     console.log(Mix);
// }

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrayMix= ['Vasya', true, 'Olya', 128, 'Ira', false, 'Anya', NaN, 'Jenya',undefined];
//
// for (let arrayMix1 of arrayMix) {
//     if (typeof arrayMix1 === "boolean") {
//         console.log(arrayMix1);
//     }
// }

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let arrayMix= ['Vasya', true, 'Olya', 128, 'Ira', false, 'Anya', NaN, 'Jenya',undefined];
// //
//  for (let arrayMix1 of arrayMix) {
//      if (typeof arrayMix1 === "number") {
//         console.log(arrayMix1);
//      }
// }


//Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arrayMix= ['Vasya', true, 'Olya', 128, 'Ira', false, 'Anya', NaN, 'Jenya',undefined];
// //
// for (let arrayMix1 of arrayMix) {
//     if (typeof arrayMix1 === "string") {
//         console.log(arrayMix1);
//     }
// }


//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arrayEmpty = [];
//
// arrayEmpty [0] = 'Vasya';
// arrayEmpty [1] = true;
// arrayEmpty [2] = {name: 'Petya', age: 25, work: true};
// arrayEmpty [3] = 458;
// arrayEmpty [4] = false;
// arrayEmpty [5] = 337;
// arrayEmpty [6] = NaN;
// arrayEmpty [7] = undefined;
// arrayEmpty [8] = 'Katya';
// arrayEmpty [9] = 128;
// for (let arrayEmptyElement of arrayEmpty) {
//     console.log(arrayEmptyElement);
//
// }

//Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//   console.log('step :', i);
//      document.write( `step : ${i} </br>`);

// }

//Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// for (let i = 0; i < 100; i++) {
//     console.log('step :', i);
//     document.write( 'step : '+i+' </br>');
//
// }


//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2 ) {
//    console.log('step :', i);
//    document.write( 'step : '+i+' </br>');
// }

//Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i+=2 ) {
//     console.log('step :', i);
//     document.write( 'step : '+i+' </br>');
// }

//Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i < 100; i+=2 ) {
//     console.log('step :', i);
//     document.write( 'step : '+i+' </br>');
// }


// РОБОТА В АУДИТОРІЇ

//Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array = ['a', 'b', 'c'];
// array.push(1, 2, 2);
//  console.log(array);

//Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1]

// let arr = [1, 2, 3];
// for (let i = arr.length - 1; i >= 0; i--) {
//      console.log(arr [i] );
//
// }
//
// let arrRev = arr.reverse();
// console.log(arrRev);

//Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6

// let array = [1, 2, 3];
// array.push(4, 5 ,6);
// console.log(array);


//Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6

//
// let array = [1, 2, 3];
// array.unshift(4, 5 ,6);
// console.log(array);

//Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let str = ['js', 'css', 'jq'];
// let strShf= str.shift();
// console.log(strShf);


//Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let str = ['js', 'css', 'jq'];
// let strShf= str.pop();
// console.log(strShf);

//Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5]

// let arr = [1, 2, 3, 4, 5];
//
//  arr.splice(0, 3);
// console.log(arr);

//Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2]

// let arr = [1, 2, 3, 4, 5];
//
// let arrSl = arr.splice(0, 2);
// console.log(arrSl);

//Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let array = [1, 2, 3, 4, 5];
// array.splice('3' , 0, 'a', 'b','c');
// console.log(array);


//ан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

// let array = [1, 2, 3, 4, 5];
//  array.splice('1' , 0, 'a', 'b');
//  array.splice('6' , 0 , 'c');
//  array.push('e')
//
//  console.log(array);

//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//
// }

//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrEmpty =[];
//
// for (let arrEmptyElement of array) {
//     arrEmpty.push(arrEmptyElement);
//
// }
// console.log(arrEmpty);

//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrEmpty = [];
//
//
// for (let i = 0; i < array.length; i++) {
//     arrEmpty [i] = array [i]
//
// }
// console.log(arrEmpty);

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//
//  let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
//перебрати його циклом while
// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i++;
// }


//перебрати його циклом for
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//
// }

// перебрати циклом while та вивести  числа тільки з непарним індексом

// let i = 0;
// while (i < array.length) {
//     if (i % 2 === 1) {
//         console.log(array[i]);
//     }
//     i++;
// }


//перебрати циклом for та вивести  числа тільки з непарним індексом
//  for (let i = 0; i < array.length; i++) {
//      if (i % 2 === 1){
//          console.log(array[i]);
//      }
//
//  }


//перебрати циклом while та вивести  числа тільки парні  значення

// let i = 0;
//  while (i < array.length) {
//      if (array[i] % 2 === 0) {
//          console.log(array[i]);
//      }
//      i++;
//  }


//перебрати циклом for та вивести  числа тільки парні  значення
//   for (let i = 0; i < array.length; i++) {
//       if (array[i] % 2 === 0){
//           console.log(array[i]);
//       }
//
//   }

//замінити кожне число кратне 3 на слово "okten"

// for (let i = 0; i < array.length; i++) {
//      if (array[i] % 3 === 0){
//          array[i] = 'okten'
//      }
//
//  }
// console.log(array);


// вивести масив в зворотньому порядку.
// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
//
// }
//
// всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// let i = array.length - 1;
// while (i => 0) {
//     console.log(array[i]);
//     if (i === 0) {
//         break;
//     }
//
//     i--;
//
// }


// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i]);
//
// }

// for (let i = array.length - 1; i >=0; i--) {
//     if (i % 2 === 1) {
//         console.log(array[i]);
//     }
//
// }

// for (let i = array.length - 1; i >=0; i--) {
//      if (array[i] % 2 === 0) {
//          console.log(array[i]);
//      }
//
//  }
//
// let i = array.length - 1;
//  while (i => 0) {
//      console.log(array[i]);
//      if ( array[i] % 2 === 0) {
//          break;
//      }
//
//      i--;
//
//  }


// for (let i = array.length - 1; i >=0 ; i--) {
//        if (array[i] % 3 === 0){
//            array[i] = 'okten'
//        }
//     console.log(array[i]);
//   }

//створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.


// let arr1 = [];
// let arr2 = [];
//
// for (let i = 0; i <= 50; i++) {
//     i % 2 === 0 ? arr1[i] = i : arr2[i] = i
// }
// console.log(arr1);
// console.log(arr2);


//Заповнити масив 20ма рандомними числами.

// let arr = [];
// for (let i = 0; i < 20; i++) {
//      arr[i] = Math.random();
//
// }
// console.log(arr);

//Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.random() * (732 - 8) + 8;
//
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8) + 8);
//
// }
// console.log(arr);

//Вивести за допомогою console.log кожен третій елемен


// for (let i = 2; i < 20; i+=3) {
//    console.log(arr[i]);
// }

//Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 2; i < 20; i += 3) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
//         }

//Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let arrayNew = [];
// for (let i = 2; i < 20; i += 3) {
//      if (arr[i] % 2 === 0) {
//          arrayNew.push(arr[i]);
//      }
//
//          }
// console.log(arrayNew);


//Вивести кожен елемент масиву, сусід справа якого є парним
// for (let i = 0; i < 20; i ++) {
//     if (arr[i+1] % 2 === 0) {
//         console.log(arr[i]);
//     }
//         }

//Є масив з числами , Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// let arrCheck = [100, 250, 50, 168, 120, 345, 188];
// let arrSum = 0;
//
// for (let i = 0; i < arrCheck.length; i++) {
//     arrSum = arrSum + arrCheck[i]
// }
// console.log(arrSum);
//
// arrSum = arrSum / arrCheck.length;
//
// console.log(arrSum);

//Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array = [55, 20, 45, 3, 7, 99];
// let arrEmpty = [];
//
//
// for (let number of array) {
//     arrEmpty.push(number * 5)
// }
//
// // for (let i = 0; i < array.length; i++) {
// //    arrEmpty.push(array[i] * 5);
// // }
//
// console.log(arrEmpty);

//Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
// let arrayMix= ['Vasya', true, 478, 'Olya', 128, 'Ira', false, 284, 'Anya', NaN, 'Jenya',undefined];
// let empty = [];
//
// for (let i = 0; i < arrayMix.length; i++) {
//   if (typeof arrayMix[i] === "number"){
//       empty.push(arrayMix[i])
// }
// }
// console.log(empty);


//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr = [ 'a', 'b', 'c'];
// let empty = [];
// for (let i = 0; i < arr.length; i++) {
//     empty = empty + arr[i]
//    
// }
// console.log(empty);

// let arr = [ 'a', 'b', 'c'];
// let empty = [];
// for (let string of arr) {
//     empty = empty + string;
// }
// console.log(empty);

// let arr = ['a', 'b', 'c'];
// let empty = [];
//
// let i = 0;
// while (i < arr.length ) {
//     empty = empty + arr[i];
//     i++
// }
// console.log(empty);


// let sec = 0;
// let hvylyna = 0;
// const COUNT = 59;
// for (let u = 0; u <= COUNT; u++){
//     console.log('minuta :', hvylyna++);
//     for (let u = 0; u <= COUNT; u++){
//         console.log('sekunda :', sec++);
//     }
//     sec = 0;
//     if (hvylyna === 2){
//         break
//     }
// }