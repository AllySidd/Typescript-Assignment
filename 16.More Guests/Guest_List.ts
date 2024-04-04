

let Guest_List :string[] = ['Asif ali zardari', 'nawaz sharif', 'Imran Khan'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr.'+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

let absent_Guest :string = 'maryam nawaz' ;

let new_Guest :string = 'Kamran Tessori' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')

}

console.log('Mr. ${absent_Guest} is not coming to the party.');

console.log('Good New1 we find Big Table So are initing 3 more guests.')

Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2, 0 , 'maryam nawaz');
Guest_List.push('Asif Ali Zardari');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party. \n\nThank You!\n\n')

}