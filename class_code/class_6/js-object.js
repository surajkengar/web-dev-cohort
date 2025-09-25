const person = {
    X : 10,
    name : 'suraj kengar',
    collage : 'nbn',
    city : 'pune',

    getfullname: function() {
        return 'suraj kengar'
    },

    address : {
        name : 'suraj',
        city : 'pune' ,
        state : 'maharastra',
        country : 'india'
    }

}

console.log(person.getfullname());