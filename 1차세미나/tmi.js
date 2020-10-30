const members = [
    {
        name : "유희수",
        age : 24,
        mbti : "enfj",
        instaId : "u_h22s00",
        favMovie : "titanic",
    },
    {
        name : "장세영",
        age : 23,
        mbti : "enfj",
        instaId : "say.0.99",
        favMovie : "플립",
    },
    {
        name : "김은수",
        age : 24,
        mbti : "infj",
        instaId : "eunsu_wag",
        favMovie : "이터널선샤인",
    },
    {
        name : "안채린",
        age : 21,
        mbti : "enfp",
        instaId : "cha._.rin",
        favMovie : "어바웃타임",
    }
];

//for
for (let i = 0; i<members.length; i++){
    const member = members[i];
    console.log(`
        이름 : ${member.name};
        나이 : ${member.age};
        mbti : ${member.mbti};
        인스타아이디 : ${member.instaId};
        인생영화 : ${member.favMovie};
    `)
}

//for of
for (let member of members ){
    console.log(`
        이름 : ${member.name};
        나이 : ${member.age};
        mbti : ${member.mbti};
        인스타아이디 : ${member.instaId};
        인생영화 : ${member.favMovie};
    `)
}

//for in
for (let member in members ){
    console.log(`
        이름 : ${members[member].name};
        나이 : ${members[member].age};
        mbti : ${members[member].mbti};
        인스타아이디 : ${members[member].instaId};
        인생영화 : ${members[member].favMovie};
    `)
}



//for each
members.forEach((member) => {
    console.log(`
        이름 : ${member.name};
        나이 : ${member.age};
        mbti : ${member.mbti};
        인스타아이디 : ${member.instaId};
        인생영화 : ${member.favMovie};
    `)
});