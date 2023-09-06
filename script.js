const socials = ["Twitter", "Linkedin", "facebook", "instagram"];
//socials.forEach((item)=>{console.log(item)});
// socials.forEach(function(item){
//     console.log(item);
// });

socials.forEach((item, index, arr) => {
 // console.log(`${index}-${item}`, arr);
});
// instead of creating a function on for Each parameter.make the function outside

function logSocials (social){
    // console.log(social);
}

socials.forEach(logSocials);
//object in array
const socialObjs =[
    {name:'twitter',url:'https://twitter.com'},
    {name:'instagram',url:'https://instagram.com'},
    {name:'linkedin',url:'https://linkedin.com'},
    {name:'facebook',url:'https://facebook.com'}
];

socialObjs.forEach((item)=>{console.log(item.url)});