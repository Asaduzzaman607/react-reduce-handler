const friends=[
    {name: 'sajeeb', salary: 5000},
    {name: 'asad', salary: 5000},
    {name: 'sajeeb', salary: 5000},
    {name: 'asad', salary: 5000},
    {name: 'sajeeb', salary: 5000}
];

const total = friends.reduce((sum,friend)=> sum+ friend.salary,0);
console.log(total)