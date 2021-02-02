//object destructuring
const person = { name: 'Fahim', phone: '01715901532', address: 'Noakhali', country: 'Bangladesh', profession: 'student' };
const { phone, profession } = person;
console.log(profession, phone);


// complex object destructuring
const complexObject = {
    name: "person's name",
    info: {
        address: 'abc',
        leader: 'person\'s leader'
    }
}
const { leader } = complexObject.info;
console.log(leader);

//array destructuring
const friendsName = ['Khan', 'Zahaid', 'Abdullah', 'Ayon', 'Saiful'];
const [first, second, ...rest] = friendsName;
console.log(first, second);
console.log(rest);