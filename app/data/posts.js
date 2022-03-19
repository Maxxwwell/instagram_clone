/* eslint-disable prettier/prettier */
import { USERS } from './users';

export const POSTS = [
    {
        imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F10%2F06%2FCiri_1.jpg',
        user: USERS[0].user,
        likes: 7870,
        profile_picture: USERS[0].image,
        comments: [
            {
                user: USERS[4].user,
                comment: 'Keeping it witcher',
            },
            {
                user: 'Butch',
                comment: 'Clutch!',
            },
        ],
        caption: 'Cirri of Rivia 🤗😝🤗😱',
    },

    {
        imageUrl: 'https://media.glamour.com/photos/5f2c59283cbc80e04c1bb016/4:3/w_2879,h_2159,c_limit/Euphoria%20season%202.jpg',
        user: USERS[3].user,
        likes: 1200,
        caption: 'I see you, Jules!',
        profile_picture: USERS[3].image,
        comments: [
            {
                user: USERS[4].user,
                comment: 'Rue 😎😍😍 ',
            },
            {
                user: 'Butch',
                comment: '😍😍😍😂😂😍😍💯💯💯💯💯😋',
            },
        ],

    },
];
