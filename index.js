class User {
    constructor(favoriteMovie) {
        this.favoriteMovie = favoriteMovie;
        this.friends = [];
    };

    addFriend(friend) {
        this.friends.push(friend);
    }
}



const Karl = new User('Django Unchained');
const Rob = new User('Interstellar');
const Dante = new User('Malignant');
const Allie = new User('Malignant');
const Mike = new User('Django Unchained');
const Shannon = new User('Interstellar',);
const Nick = new User('Django Unchained');

Karl.addFriend(Rob);
Karl.addFriend(Mike);
Karl.addFriend(Allie);

Rob.addFriend(Shannon);
Rob.addFriend(Karl);
Rob.addFriend(Allie);

Dante.addFriend(Mike);
Dante.addFriend(Nick);
Dante.addFriend(Shannon);

Allie.addFriend(Karl);
Allie.addFriend(Rob);
Allie.addFriend(Mike);

Mike.addFriend(Allie);
Mike.addFriend(Karl);
Mike.addFriend(Dante);

Shannon.addFriend(Rob);
Shannon.addFriend(Dante);
Shannon.addFriend(Nick);

Nick.addFriend(Shannon);
Nick.addFriend(Dante);



console.log(Karl)

// const users = {
//     Karl: {
//         'favoriteMovie': 'Django Unchained',
//         'friends': [Rob, Mike, Allie]
//     },
//     Rob: {
//         'favoriteMovie': 'Interstellar',
//         'friends': [Shannon, Dante, Allie]
//     },
//     Dante: {
//         'favoriteMovie': 'Malignant',
//         'friends': [Mike, Nick, Shannon]
//      },
//     Allie: {
//         'favoriteMovie': 'Malignant',
//         'friends': [Karl, Rob, Mike]
//     },
//     Mike: {
//         'favoriteMovie': 'Django Unchained',
//         'friends': [Allie, Karl, Dante]
//     },
//     Shannon: {
//         'favoriteMovie': 'Interstellar',
//         'friends': [Rob, Dante, Nick]
//     },
//     Nick: {
//         'favoriteMovie': 'Django Unchained',
//         'friends': [Shannon, Dante]
//     }
// }

// goes to their friends and checks each of their favorite movies
// then goes to each of their friends too (while loop?)

// create a dictionary with the movies as keys and the number of occurences as the value
// return the movie with most occurences
