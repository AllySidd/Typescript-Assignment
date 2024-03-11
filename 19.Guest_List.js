"use strict";
let Guest_List = ['Asif ali zardari', 'nawaz sharif', 'Imran Khan'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.'+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
let absent_Guest = 'maryam nawaz';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// }
// console.log('Mr. ${absent_Guest} is not coming to the party.');
// console.log('Good New1 we find Big Table So are initing 3 more guests.')
// array me 3 guest add kiya hain.
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'maryam nawaz');
Guest_List.push('Asif Ali Zardari');
// Yahan per men 6 guest ke array ko print kraya he.
// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')
// } 
// Sorry Message to guest for not inviting.
//console.log('\nSorry we can not arrrange big table, only Two people will be inited.');
// Yahan per mene Guest remove kiya hain.
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    // console.log('Sorry Mr. ${remove_Guest}, You are not inited for Dinner.');
}
// Hamare bache howe 2 Invited Guest.
// for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You\n\n!')
// }
// Mene sare guest array se remove kar diye.
Guest_List.splice(0, 2);
console.log(Guest_List);
// Exercise 19
// Print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest Are: ${Guest_List.length}`);
