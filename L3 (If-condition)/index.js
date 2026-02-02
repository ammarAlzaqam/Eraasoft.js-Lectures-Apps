//TODO>> 1-Percentage app.
{
  //? Make system Fatora Price => price after discount and vat
  // //! input (price, discount)
  // let originalPrice = prompt("Enter your price...");
  // let discount = prompt("Enter your discount %: ");
  // //! process
  // let discountAmount = (discount / 100) * originalPrice;
  // let priceAfterDis = originalPrice - discountAmount;
  // let vat = (14 / 100) * priceAfterDis;
  // let finalPrice = priceAfterDis + vat;
  // //! output
  // console.log("Original Price is: " + originalPrice);
  // console.log("Price after discount is: " + priceAfterDis);
  // console.log("Final Price After 14 % is: " + finalPrice);
}

//* ---------------------------------------------------------------------------
//TODO>> 2-Age based System.
{
  //? System accept person has age >= 13 if age < 13 "not accept"
  // //! input (birthYear)
  // let birthYear = prompt("Enter your birthYear...");
  // //! process
  // let age = 2026 - birthYear;
  // //! output
  // if (age >= 13) {
  //   console.log("Welcome to you");
  // } else {
  //   console.log("Go to your home 7abebe");
  // }
}

//TODO>> 3-System to apply in egypt army
{
  //? person is Egyptian and has age +18
  // //! input (is egyptian)
  // let isEgyptian = confirm("Are you egyptian?");
  // if (isEgyptian) {
  //   //! input (birthYear)
  //   let birthYear = prompt("Enter your birthYear...");
  //   //! process
  //   let age = 2026 - birthYear;
  //   if (age >= 18) {
  //     //! output
  //     console.log("Welcome to you in egypt army");
  //   } else {
  //     //! output
  //     console.log("Go to your home ya habibe");
  //   }
  // } else {
  //   //! output
  //   console.log("You are lucky 😊");
  // }
}

//TODO>> 4-Calculate alzkah value
{
  //   //? money > 85g gold && A year has passed, alzkah = 2.5 % from money
  //   //! inputs
  //   let priceForGramGold = 6500;
  //   let costOf85GramGold = 85 * priceForGramGold;
  //   let saving = +prompt("Enter your saving money...");
  //   //! process
  //   // Check if money > 85g gold=85*4000EGP.
  //   if (saving >= costOf85GramGold) {
  //     // Check if a year has passed.
  //     const hasYearPassed = confirm("Has a year passed?");
  //     if (hasYearPassed) {
  //       // Calculate alzkah
  //       let alzkahValue = (2.5 / 100) * saving;
  //       //* output => alzkah value
  //       document.writeln("قيمة الذكاة هي جنية:", alzkahValue);
  //     } else {
  //       //* output => hasn't year passed
  //       document.writeln("ليس عليك ذكاة .. لانه لم يمر عام علي الادخار");
  //     }
  //   } else {
  //     //* output => Saving money < 85g gold
  //     document.writeln("ليس عليك ذكاة .. ياحبيبي انت اللي محتاج ربنا يقويك");
  //   }
}

//TODO>> 5-Confirm Programs
//? 1
//* هل الأمر امرك ؟ - روح لماما يا حبيبي
//* هل في شيء في يدك ؟ - انت كحيان يا محمد
{
  //   let hasOrder = confirm("هل الأمر امرك");
  //   if (hasOrder) {
  //     let inHand = confirm("هل في شيء في يدك");
  //     if (inHand) {
  //       document.writeln("اشتري جزيرة ويخت فضي");
  //     } else {
  //       document.writeln("انت كحيان يا محمد");
  //     }
  //   } else {
  //     document.writeln("روح لماما يا حبيبي");
  //   }
}

//? 2
//* هل انت بتهتم - مخاصم
//* هل انت عندك دم - مخاصم
//* هل انت عندك دم - مخاصم
//* هل انت بتحس يا عم - مخاصم
{
  let doCare = confirm("هل انت بتهتم؟");
  if (doCare) {
    let hasBlood = confirm("هل انت عندك دم؟");
    if (hasBlood) {
      let hasSense = confirm("هل انت بتحس يا عم");
      if (hasSense) {
        document.writeln("مصالح");
      } else {
        document.writeln("مخاصم");
      }
    } else {
      document.writeln("مخاصم");
    }
  } else {
    document.writeln("مخاصم");
  }
}
