//TODO>> discount depend on your city
{
  //   //? cairo => 5% discount, alex => 10%, aswan => 30%, else => 40%
  //   //! inputs
  //   // Enter your city
  //   let city = prompt("Enter your city");
  //   //! process
  //   // Calculate discount
  //   if (city === "cairo") {
  //     console.log("Will take discount 5%");
  //   } else if (city === "alex") {
  //     console.log("Will take discount 10%");
  //   } else if (city === "aswan") {
  //     console.log("Will take discount 30%");
  //   } else {
  //     console.log("Will take discount 40%");
  //   }
}

//TODO>> email password validation
{
  //   let emailDB = "ammar@ammaralzaqam.com";
  //   let passwordDB = "123456";
  //   let email = prompt("Enter your email");
  //   let password = prompt("Enter your password");
  //   if (email === emailDB && password === passwordDB) {
  //     alert("Login successfully ✅");
  //   } else {
  //     alert("Wrong: Incorrect email or password ❌");
  //   }
}

//TODO>> stu level system
{
  //   //? (7 - 12) ابتدائي ,
  //   //? (12 - 15) اعدادي
  //   //? (15 - 18) ثانوي
  //   //! input
  //   let stuAge = +prompt("Enter your age");
  //   //! process
  //   if (age >= 7 && age < 12) {
  //     console.log("مرحبا بك ايها الطفل انت في ابتادائي لسه");
  //   } else if (age >= 12 && age < 15) {
  //     console.log("مرحبا بك ايها الصبي انت في اعدادي لو مكنتش صقت قبل كده");
  //   } else if (age >= 15 && age < 18) {
  //     console.log("مرحبا بك ايها الولد انت في ثانوي متفتكرش نفسك كبرت يا حبيبي");
  //   } else {
  //     console.log("مرحبا بك انا مش عارف انت فين");
  //   }
}

//TODO>> stu Grade
{
  //   //? < 50 fail, (50-65) accepted, (65-75) good, (75-85) very good
  //   //? (85-100) excellent, (< 0 or > 100) error
  //   //! input
  //   let stuDegree = +prompt("Enter your degree");
  //   //! process
  //   if (stuDegree >= 0 && stuDegree < 50) {
  //     console.log("You are fail 👎");
  //   } else if (stuDegree >= 50 && stuDegree < 65) {
  //     console.log("You are accepted 👍");
  //   } else if (stuDegree >= 65 && stuDegree < 75) {
  //     console.log("You are good 🎯");
  //   } else if (stuDegree >= 75 && stuDegree < 85) {
  //     console.log("You are very good 👋");
  //   } else if (stuDegree >= 85 && stuDegree <= 100) {
  //     console.log("You are excellent ✨");
  //   } else {
  //     console.log("Error: Enter a valid degree (0 => 100)");
  //   }
}

//TODO>> Coffee Shop Bill
{
  //   //? cup size (small=45, medium=55, large=65)
  //   //? extras (milk+5, syrup+7, shot+10)
  //   //! input
  //   // cup size (small, medium, large)
  //   let cupSize = prompt("Enter your cup size (small, medium, large)");
  //   // add extras by confirm (milk, syrup, shot)
  //   let extraMilk = confirm("Are you want extra milk");
  //   let extraSyrup = confirm("Are you want extra syrup");
  //   let extraShot = confirm("Are you want extra shot");
  //   // are you stu
  //   let isStu = confirm("Are you student");
  //   //! process
  //   let cupPrice = 0;
  //   // calculate size price (small=45, medium=55, large=65)
  //   if (cupSize === "small") {
  //     cupPrice = 45;
  //     console.log("Small cup price is: 45 EGP.");
  //   } else if (cupSize === "medium") {
  //     cupPrice = 55;
  //     console.log("Medium cup price is: 55 EGP.");
  //   } else if (cupSize === "large") {
  //     cupPrice = 65;
  //     console.log("Large cup price is: 65 EGP.");
  //   }
  //   // calculate extras (milk+5, syrup+7, shot+10)
  //   if (extraMilk) {
  //     cupPrice += 5;
  //     console.log("Extra milk price is: 5 EGP");
  //   }
  //   if (extraSyrup) {
  //     cupPrice += 7;
  //     console.log("Extra syrup price is: 7 EGP");
  //   }
  //   if (extraShot) {
  //     cupPrice += 10;
  //     console.log("Extra shot price is: 10 EGP");
  //   }
  //   // apply stu discount 20%
  //   if (isStu) {
  //     let stuDiscount = (20 / 100) * cupPrice;
  //     cupPrice -= stuDiscount;
  //     console.log("You got 20% discount: -", stuDiscount, "EGP");
  //   }
  //   // add vat 14%
  //   let vatValue = (14 / 100) * cupPrice;
  //   cupPrice += vatValue;
  //   console.log("Vat 14 %:", vatValue);
  //   console.log("Cup price is:", cupPrice);
}

//TODO>> Taxi fare estimator
{
  //   //? Base 20 EGP, per km = 6.5 EGP
  //   //! input
  //   let finalPrice = 20;
  //   console.log("Base price:", finalPrice, "EGP.");
  //   let perKm = 6.5;
  //   let kilometers = +prompt("Enter kilometers amount...");
  //   //! process
  //   // calculate kilometers price
  //   let kilometersPrice = kilometers * perKm;
  //   console.log("kilometer price:", kilometersPrice, "EGP.");
  //   finalPrice += kilometersPrice;
  //   // add night surcharge (10%) confirm
  //   let inNight = confirm("In night");
  //   if (inNight) {
  //     let nightSurcharge = (10 / 100) * finalPrice;
  //     console.log("Night surcharge:", nightSurcharge, "EGP.");
  //     finalPrice += nightSurcharge;
  //   }
  //   // apply promo code SAVE10 for 10% discount
  //   let promoCode = prompt('Enter "SAVE10" to get 10% discount...');
  //   if (promoCode === "SAVE10") {
  //     let promoCodeDiscount = (10 / 100) * finalPrice;
  //     console.log("You got 10% discount: -", promoCodeDiscount, "EGP.");
  //     finalPrice -= promoCodeDiscount;
  //   } else {
  //     console.log("Wrong promo code!");
  //   }
  //   // add 14% VAT
  //   let vat = (14 / 100) * finalPrice;
  //   console.log("Vat 14 % :", vat, "EGP.");
  //   finalPrice += vat;
  //   console.log("Final price:", finalPrice);
}
