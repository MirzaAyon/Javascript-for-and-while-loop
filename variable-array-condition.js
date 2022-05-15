//variable
var bottleColor = "yellow";
//select kore shift+"" dilei "" chole ashbe
var waterQuantity = 1;
var isFull = false;

//array
var item = ['bottle', 'Mug', 'Pen'];
paperIndex = item.indexOf('paper');
console.log(paperIndex);
penIndex = item.indexOf('Pen');
console.log(penIndex);
item.push('kham');
console.log(item);
item.push('watch');
console.log(item);
//push
item.pop();
console.log(item);

//conditionals

// if (item.length >= 4) {
//     console.log('you have too many stuff');
// } else {
//     console.log('Wow you have no desk');
// }


if (item.length >= 4) {
    console.log('you have too many stuff');
}
else if (item.length == 4) {
    console.log('you have 4 staff stuff');
}
else {
    console.log('Wow you have no desk');
}
//chaile ekta condition er vitore arekta condition likha jae