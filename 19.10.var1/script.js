
for (var i = 0; i <= 100;  i++)  {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("кратно 3 и кратно 5");
    }  else {
        if (i % 3 === 0) {
            console.log("кратно 3");
         }  else {
                if (i % 5 === 0) {
                console.log("кратно 5");
                } else {
                    console.log(i);
                    }  
            }
        }
    }


