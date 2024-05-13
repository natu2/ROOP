//DEFINITELY NEED TO CITE: https://javascript.plainenglish.io/how-to-build-a-photo-share-app-with-react-native-instagram-clone-8cc81c5612af
import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://www.pexels.com/photo/woman-blowing-a-bubble-gum-12584691/",
    user: USERS[0].user,
    caption: "Feeling bold with this colorful mix! 🌈 #colorful #boldfashion",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "thezaman",
        comment: "You always have the best outfits!",
      },
      {
        user: "codedbalam",
        comment: "Wow, those colors are popping!",
      },
    ],
  },
  {
    imageUrl:
      "https://www.pexels.com/photo/photo-of-woman-wearing-sports-attire-3007759/",
    user: USERS[1].user,
    caption: "Loving this summer vibe! 🌞 #summerstyle #fashion",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "prayingmedic",
        comment: "That outfit is so cute! Where did you get it?",
      },
    ],
  },
  {
    imageUrl:
      "https://www.pexels.com/photo/photo-of-woman-wearing-turquoise-dress-3369722/",
    user: USERS[2].user,
    caption: "Work hard, play hard.",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "blessed",
        comment: "Simple and elegant. Perfect combo!",
      },
    ],
  },
];
