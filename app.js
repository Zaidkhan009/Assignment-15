"use strict";
let not_present = 'azeem';
let new_guest = 'Bilal Abbas';
// Guest_list[1] = new_guest;
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + Guest_list[i] + ',\nMe invite you on dinner tomorrow.\nThank You')
// }
Guest_list.unshift('Shairaz', 'Mustafa', 'Aneeq');
//  for(let i=0; i<Guest_list.length; i++){
//      console.log('Respected Sir/Madam' + Guest_list[i] + ',\nMe invite you on dinner tomorrow we found big table so we decide to invite 3 more guest.\nThank You')
//  }
console.log('\nunfortunately we can not arrange big table , only two people allow');
while (Guest_list.length > 2) {
    let remove_guest = Guest_list.pop();
    console.log(`sorry sir/madam. ${remove_guest}. are not invite for dinner.`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Respected Sir/Madam' + Guest_list[i] + ',\nYes you are still invited on tomorrow dinner.\nThank You');
}
Guest_list.splice(0, 2);
console.log(Guest_list);
