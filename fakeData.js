const ARTICLES_TITLE = "<h1>The 5 best puzzle games</h1>";
const FAKE_ARTICLES_DATA = [
  {
    ranking: 1,
    title: "Baba Is You",
    images: [
      {
        imgSrc: "./img/BabaIsYouCover.jpg",
        imgAlt: "Baba is you videogame cover",
      },
      {
        imgSrc: "./img/BabaIsYouGame.jpg",
        imgAlt: "Baba is you videogame gameplay",
      },
    ],
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aspernatur dolorem dolorum tempora quaeratquae excepturi, nemo animi eum beatae unde recusandae ducimus voluptatibus, consequuntur error corrupti cumque commodi cum esse doloribus autem architecto laudantium porro! Quo doloribus reiciendis dolores inventore! Tempora aspernatur inventore ab veritatis mollitia delectus deserunt et!<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, harum reprehenderit. Adipisci a, illum, ea error vitae ducimus suscipit voluptates vel laudantium nobis consectetur, quas iste expedita pariatur? Esse totam blanditiis doloremque, eius ducimus aliquid harum. Voluptate quis repudiandae autem velit corrupti, quas vitae tempora, quibusdam, omnis non sapiente neque obcaecati dolore laborum officia illum laboriosam similique. Doloribus deserunt ex nesciunt odio hic optio cumque animi suscipit similique velit nihil nostrum magnam odit voluptas voluptate cupiditate reiciendis, nulla amet facere molestias magni, ipsam ipsum temporibus dolorem. Modi sunt ut ex placeat doloremque repudiandae impedit facilis voluptate deleniti, sit alias recusandae!",
    reviewsLinks: [
      {
        website: "Rock Paper Shotgun",
        URL: "https://www.rockpapershotgun.com/baba-is-you-review",
      },
      {
        website: "Gamekult",
        URL: "https://www.gamekult.com/jeux/baba-is-you-3050877493/test.html",
      },
    ],
  },
  {
    ranking: 2,
    title: "Opus Magnum",
    images: [
      {
        imgSrc: "./img/OpusMagnum.jpg",
        imgAlt: "Opus Magnum videogame cover",
      },
    ],
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aspernatur dolorem dolorum tempora quaeratquae excepturi, nemo animi eum beatae unde recusandae ducimus voluptatibus, consequuntur error corrupti cumque commodi cum esse doloribus autem architecto laudantium porro! Quo doloribus reiciendis dolores inventore! Tempora aspernatur inventore ab veritatis mollitia delectus deserunt et!<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, harum reprehenderit. Adipisci a, illum, ea error vitae ducimus suscipit voluptates vel laudantium nobis consectetur, quas iste expedita pariatur? Esse totam blanditiis doloremque, eius ducimus aliquid harum. Voluptate quis repudiandae autem velit corrupti, quas vitae tempora, quibusdam, omnis non sapiente neque obcaecati dolore laborum officia illum laboriosam similique. Doloribus deserunt ex nesciunt odio hic optio cumque animi suscipit similique velit nihil nostrum magnam odit voluptas voluptate cupiditate reiciendis, nulla amet facere molestias magni, ipsam ipsum temporibus dolorem. Modi sunt ut ex placeat doloremque repudiandae impedit facilis voluptate deleniti, sit alias recusandae!",
    reviewsLinks: [
      {
        website: "Rock Paper Shotgun",
        URL: "https://www.rockpapershotgun.com/what-works-and-why-opus-magnum",
      },
      {
        website: "Gamekult",
        URL: "https://www.gamekult.com/jeux/opus-magnum-3050876957/test.html",
      },
    ],
  },
  {
    ranking: 3,
    title: "Oxygen Not Included",
    images: [
      {
        imgSrc: "./img/OxygenNotIncludedA.jpg",
        imgAlt: "Oxygen not included videogame",
      },
      {
        imgSrc: "./img/OxygenNotIncludedB.jpg",
        imgAlt: "Oxygen not included videogame",
      },
      {
        imgSrc: "./img/OxygenNotIncludedC.jpg",
        imgAlt: "Oxygen not included videogame",
      },
    ],
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aspernatur dolorem dolorum tempora quaeratquae excepturi, nemo animi eum beatae unde recusandae ducimus voluptatibus, consequuntur error corrupti cumque commodi cum esse doloribus autem architecto laudantium porro! Quo doloribus reiciendis dolores inventore! Tempora aspernatur inventore ab veritatis mollitia delectus deserunt et!<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, harum reprehenderit. Adipisci a, illum, ea error vitae ducimus suscipit voluptates vel laudantium nobis consectetur, quas iste expedita pariatur? Esse totam blanditiis doloremque, eius ducimus aliquid harum. Voluptate quis repudiandae autem velit corrupti, quas vitae tempora, quibusdam, omnis non sapiente neque obcaecati dolore laborum officia illum laboriosam similique. Doloribus deserunt ex nesciunt odio hic optio cumque animi suscipit similique velit nihil nostrum magnam odit voluptas voluptate cupiditate reiciendis, nulla amet facere molestias magni, ipsam ipsum temporibus dolorem. Modi sunt ut ex placeat doloremque repudiandae impedit facilis voluptate deleniti, sit alias recusandae!",
    reviewsLinks: [
      {
        website: "Rock Paper Shotgun",
        URL: "https://www.rockpapershotgun.com/have-you-played-oxygen-not-included",
      },
      {
        website: "Gamekult",
        URL: "https://www.gamekult.com/jeux/oxygen-not-included-3050714249/test.html",
      },
    ],
  },
  {
    ranking: 4,
    title: "While True: Learn()",
    images: [
      {
        imgSrc: "./img/WhileTrueLearn.jpg",
        imgAlt: "While True: Learn videogame",
      },
    ],
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aspernatur dolorem dolorum tempora quaeratquae excepturi, nemo animi eum beatae unde recusandae ducimus voluptatibus, consequuntur error corrupti cumque commodi cum esse doloribus autem architecto laudantium porro! Quo doloribus reiciendis dolores inventore! Tempora aspernatur inventore ab veritatis mollitia delectus deserunt et!<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, harum reprehenderit. Adipisci a, illum, ea error vitae ducimus suscipit voluptates vel laudantium nobis consectetur, quas iste expedita pariatur? Esse totam blanditiis doloremque, eius ducimus aliquid harum. Voluptate quis repudiandae autem velit corrupti, quas vitae tempora, quibusdam, omnis non sapiente neque obcaecati dolore laborum officia illum laboriosam similique. Doloribus deserunt ex nesciunt odio hic optio cumque animi suscipit similique velit nihil nostrum magnam odit voluptas voluptate cupiditate reiciendis, nulla amet facere molestias magni, ipsam ipsum temporibus dolorem. Modi sunt ut ex placeat doloremque repudiandae impedit facilis voluptate deleniti, sit alias recusandae!",
    reviewsLinks: [
      {
        website: "Metacritic",
        URL: "https://www.metacritic.com/game/pc/while-true-learn",
      },
    ],
  },
  {
    ranking: 5,
    title: "Braid",
    images: [
      {
        imgSrc: "./img/Braid.jpg",
        imgAlt: "Braid videogame",
      },
    ],
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aspernatur dolorem dolorum tempora quaeratquae excepturi, nemo animi eum beatae unde recusandae ducimus voluptatibus, consequuntur error corrupti cumque commodi cum esse doloribus autem architecto laudantium porro! Quo doloribus reiciendis dolores inventore! Tempora aspernatur inventore ab veritatis mollitia delectus deserunt et!<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, harum reprehenderit. Adipisci a, illum, ea error vitae ducimus suscipit voluptates vel laudantium nobis consectetur, quas iste expedita pariatur? Esse totam blanditiis doloremque, eius ducimus aliquid harum. Voluptate quis repudiandae autem velit corrupti, quas vitae tempora, quibusdam, omnis non sapiente neque obcaecati dolore laborum officia illum laboriosam similique. Doloribus deserunt ex nesciunt odio hic optio cumque animi suscipit similique velit nihil nostrum magnam odit voluptas voluptate cupiditate reiciendis, nulla amet facere molestias magni, ipsam ipsum temporibus dolorem. Modi sunt ut ex placeat doloremque repudiandae impedit facilis voluptate deleniti, sit alias recusandae!",
    reviewsLinks: [
      {
        website: "Rock Paper Shotgun",
        URL: "https://www.rockpapershotgun.com/braid-anniversary-edition-repaints-the-classic-indie-platformer",
      },
      {
        website: "Gamekult",
        URL: "https://www.gamekult.com/jeux/braid-3010005770/test.html",
      },
    ],
  },
];

const COLOR_MODES = [
  {
    variableName: "--text-color",
    lightColor: "black",
    darkColor: "white",
  },
  {
    variableName: "--main-background-color",
    lightColor: "white",
    darkColor: "black",
  },
  {
    variableName: "--article-background-color",
    lightColor: "#BAD4DE",
    darkColor: "#000E13",
  },
  {
    variableName: "--navbar-hover-color",
    lightColor: "#BAD4DE",
    darkColor: "#082E3F",
  },
  {
    variableName: "--background-image",
    lightColor: "url(./icons/maze-black.svg)",
    darkColor: "url(./icons/maze-white.svg)",
  },
  {
    variableName: "--hr-color",
    lightColor: "black",
    darkColor: "white",
  },
];
