// console.log();
// alert('Hi'); // бир гана кнопка, ок деген
// confirm('ты тут?');  //ок и отмена бар
// prompt('18 барма?','мында жаз'); // ок и отмена бар + поле для ввода
// document.write('мында жазганын body ишине кетеди');//body ишине жазу

//СОБЕСЕДОВАНИЕДЕ СҰРАҚ 
//null - кайндай тип
// console.log(typeof null); //консольга обьект деп шыгады, бул официально признанная ошибка
//разница префиксный и поствикс
// let incr = 10;
// let decr = 10;
// console.log(++incr,--decr);//11,9 сразу озгереди 
// console.log(incr++,decr--);//11,9 мына строкадан кеин барып озгереди 




// по git-у 
// 1-состояние : фаил просто лежит в проекте,и ничего с ним не происходит
// 2-состояние : следит за файлами (попадает в так называемый index)
// 3-состояние : контрольная точка(коммит)
// git status - все что на первом состояний(на крассном), а все что на втором состояний зеленый,но если ты заоммитил все-то будешь видеть только все что на первом состояний
// git add script.j - добавил файл во второе состояние
// git add -A   - добавил все во второе состояние
// git reset - отменил у всех второе состояние
// git commit -a -m"самое начало создания" - сохранил все файлы где были второе состояние, или перевел со второго на третее состояние
// git log -список какие коммиты были и их даты и авторы
// git push - озгеристи github тагы репозиториге косу
// git push -u origin master  - жалпы жумыс басында проектты githubпен байланыстыру
// git branch - githubта кандай ветка бар екенин кору
// git pull - репозиторидагы озгеристи компка жуктеу

// дома поработал : git push -u origin master  - жалпы жумыс басында проектты githubпен байланыстырдын
// жумыска келдин : git clone (ссылка https на репозитори) сол заттар салынатын папака аты   - 1день скачал проект с репозиторий когда у тебя ничего нет
//поработал на работе ... (git pull-потомучто сен жумыс истеп жатканда баскаларда истеген соны скачаешь) git add -A  и git commit -a -m"ыавв"-сохроняем и отправляем в репозиторий git push
// обратно пришел домой ... (у тебя в начале папка связался с репозиторием)git pull- сен уйге жеткенше баскалар озгерис енгизу мумкин заодно жумыста жасаган озгеристерди компка енгизу git pull
// если git pull жазбай компта жумыс жасап git push жазсан конфлик(сенде репозиторийдагы озгерис жок,репозидорийда сендеги озгерис жок) потом акыры git pull жазсан слияние болады(murge)сенин компында а не в репозиторий
// murge-сообщениесин жазып ctrl+c 2рет :wq!-закончил слияние
// артынан сенин компындагы слияние болган документты надо запушить git push





// 1 КОНСОЛЬНОЕ ПРИЛОЖЕНИЕ
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */



// console.log( NaN || 2 || undefined );//2


// console.log( NaN && 2 && undefined ); //NaN


// console.log( 1 && 2 && 3 ); //3


// console.log( !1 && 2 || !3 ); //false


// console.log( 25 || null && !3 ); //25


// console.log( NaN || null || !3 || undefined || 5);//5


// console.log( NaN || null && !3 && undefined || 5);  //5


// console.log( 5 === 5 &&  5 > 1 || 5); //true



// let result='';
// for(let i=1;i<7;i++){
//     for(let j =0;j<i;j++){
//         result=result +'*';
//     }
//     result=result +'\n';
// }
// console.log(result);


// for (let i = 5; i<=10;i++){
//     console.log(i);
// }


// for(let i = 20;i > 10; i--){
//     console.log(i)
//     if(i===13){
//         break;
//     }
// }


// for(let i = 2;i < 10;i+=2){     //(i++) = (i=i+1), (i=i+2) = (i+=2)
//      console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i =2;
// while(i < 16){
//     if(i % 2 === 0){
//         continue;
//          i++;    //мынаны жазбасан четныйлар пропускается но мына блок токтамайды потомучто і сол күйі қалады
//     }
//     console.log(i);
//     i++;
// }



// function fifthTask() {
//     const arrayOfNumbers = [];
//     for(let i=5;i<=10;i++){
//         arrayOfNumbers.push(i);
//     }         
//     return arrayOfNumbers;


//     // Пишем решение вот тут
    
    
//     // Не трогаем
// }
// console.log(fifthTask());



// function thirdTask() {
//     // Пишем решение вот тут
//     for(let i = 2;i < 10;i+=2)
//     console.log(i);
// }
// thirdTask();



// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for(let i=0;i<arr.length;i++){
//         result[i]=arr[i];
//     }
//     // Пишем решение вот тут
    
    
//     // Не трогаем
//     return result;
// }
// console.log(firstTask());


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for(let i=0;i<data.length;i++){
//     if(typeof data[i] ==='number'){
//         data[i]=data[i]*2;
//     }
//     else if(typeof data[i] ==='string'){
//         data[i]=data[i]+ ' done';
//     }
// }
// console.log(data);


// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     for(let i=1;i<data.length;i++){
//         result[i-1]=data[data.length-i];
//     }
//     // Пишем решение вот тут
    
    
//     // Не трогаем
//     return result;
// }
// console.log(thirdTask());


// const lines = 5;
// let result = '';
// for(let i=0;i<=lines;i++){
//     for(let j=0;j<lines-i;j++){
//         result=result +' ';
//     }
//     for(let j=0;j<2*i+1;j++){
//         result=result +'*';
//     }
//     result+='\n';
// }
// console.log(result);


// let result='';
// for(let i=1;i<7;i++){
//     for(let j =0;j<i;j++){
//         result=result +'*';
//     }
//     result=result +'\n';
// }
// console.log(result);

'use strict';
const numberOfFilms = prompt('Қанша кино көрдіңіз');
const lastFilm = prompt('Соңғы көрген кинолардын бірі');
const reiting = prompt('Баға бериниз', 'Мында жаз');
const lastFilm2 = prompt('Соңғы көрген кинолардын бірі');
const reiting2 = prompt('Баға бериниз', 'Мында жаз');
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
personalMovieDB.movies[lastFilm] = reiting;  //точка аркылы жазсан жауап жазган кезде пробелмен берсен жазганын окылмайды, орнына сол переменный ози турады
personalMovieDB.movies[lastFilm2] = reiting2;
console.log(personalMovieDB);






