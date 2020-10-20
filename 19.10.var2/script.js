for (i = 0; i < 101; i++) {
var count1 = i === 0;
    count2 = i % 5 === 0 && i % 3 === 0;
    count3 = i % 3 === 0;
    count4 = i % 5 === 0;

    output = count1 ? "0" : count2 ? "кратно 3 и 5" : count3 ? "кратно 3" : count4 ? "кратно 5" : i;

    console.log(output);
}