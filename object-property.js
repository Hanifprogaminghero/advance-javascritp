
const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maanaa'},
    {id: 41, name: 'Moyouri'},
    {id: 71, name: 'DeepJol'},
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
const biggerone = students.find(s => s.id>40);
console.log(biggerone);
