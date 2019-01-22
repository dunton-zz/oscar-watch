const data = [
  {
    category: "Best Picture",
    nominees: [
      { nominee: "Black Panther", movie: "Black Panther" },
      { nominee: "BlacKkKlansman", movie: "BlacKkKlansman" },
      { nominee: "Bohemian Rhapsody", movie: "Bohemian Rhapsody" },
      { nominee: "The Favourite", movie: "The Favourite" },
      { nominee: "Green Book", movie: "Green Book" },
      { nominee: "Roma", movie: "Roma" },
      { nominee: "A Star Is Born", movie: "A Star Is Born" },
      { nominee: "Vice", movie: "Vice" }
    ]
  },
  {
    category: "Best Director",
    nominees: [
      { nominee: "Spike Lee", movie: "BlacKkKlansman" },
      { nominee: "Pawel Pawlikowski", movie: "Cold War" },
      { nominee: "Yorgos Lanthimos", movie: "The Favourite" },
      { nominee: "Alfonso Cuarón", movie: "Roma" },
      { nominee: "Adam McKay", movie: "Vice" }
    ]
  },
  {
    category: "Actor In a Leading Role",
    nominees: [
      { nominee: "Christian Bale", movie: "Vice" },
      { nominee: "Bradley Cooper", movie: "A Star is Born" },
      { nominee: "Willem Dafoe", movie: "At Eternity's Gate" },
      { nominee: "Rami Malek", movie: "Bohemian Rhapsody" },
      { nominee: "Viggo Mortensen", movie: "Green Book" }
    ]
  },
  {
    category: "Actress In a Leading Role",
    nominees: [
      { nominee: "Yalitza Aparicio", movie: "Roma" },
      { nominee: "Glenn Close", movie: "The Wife" },
      { nominee: "Lady Gaga", movie: "A Star Is Born" },
      { nominee: "Olivia Colman", movie: "The Favourite" },
      { nominee: "Melissa McCarthy", movie: "Can You Ever Forgive Me?" }
    ]
  },

  {
    category: "Best Supporting Actor",
    nominees: [
      { nominee: "Mahershala Ali", movie: "Green Book" },
      { nominee: "Adam Driver", movie: "BlackKKlansman" },
      { nominee: "Sam Elliot", movie: "A Star Is Born" },
      { nominee: "Richard E. Grant", movie: "Can You Ever Forgive Me" },
      { nominee: "Sam Rockwell", movie: "Vice" }
    ]
  },
  {
    category: "Best Supporting Actress",
    nominees: [
      { nominee: "Amy Adams", movie: "Vice" },
      { nominee: "Marina de Tavira", movie: "Roma" },
      { nominee: "Regina King", movie: "If Beale Street Could Talk" },
      { nominee: "Emma Stone", movie: "The Favourite" },
      { nominee: "Rachel Weisz", movie: "The Favourite" }
    ]
  },
  {
    category: "Best Original Screenplay",
    nominees: [
      { nominee: "First Reformed", movie: "First Reformed" },
      { nominee: "Green Book", movie: "Green Book" },
      { nominee: "Roma", movie: "Roma" },
      { nominee: "The Favourite", movie: "The Favourite" },
      { nominee: "Vice", movie: "Vice" }
    ]
  },

  {
    category: "Best Adapted Screenplay",
    nominees: [
      {
        nominee: "The Ballad of Buster Scruggs",
        movie: "The Ballad of Buster Scruggs"
      },
      { nominee: "BlacKkKlansman", movie: "BlacKkKlansman" },
      {
        nominee: "Can You Ever Forgive Me?",
        movie: "Can You Ever Forgive Me?"
      },
      {
        nominee: "If Beale Street Could Talk",
        movie: "If Beale Street Could Talk"
      },
      { nominee: "A Star Is Born", movie: "A Star Is Born" }
    ]
  },
  {
    category: "Best Animated Feature Film",
    nominees: [
      { nominee: "Incredibles 2", movie: "Incredibles 2" },
      { nominee: "Isle of Dogs", movie: "Isle of Dogs" },
      { nominee: "Mirai", movie: "Mirai" },
      {
        nominee: "Ralph Breaks the Internet",
        movie: "Ralph Breaks the Internet"
      },
      {
        nominee: "Spider-Man: Into the Spider-Verse",
        movie: "Spider-Man: Into the Spider-Verse"
      }
    ]
  },
  {
    category: "Best Foreign Language Film",
    nominees: [
      { nominee: "Capernaum", movie: "Capernaum" },
      { nominee: "Cold War", movie: "Cold War" },
      { nominee: "Never Look Away", movie: "Never Look Away" },
      { nominee: "Roma", movie: "Roma" },
      { nominee: "Shoplifters", movie: "Shoplifters" }
    ]
  },
  {
    category: "Best Documentary Feature",
    nominees: [
      { nominee: "Free Solo", movie: "Free Solo" },
      {
        nominee: "Hale County This Morning, This Evening",
        movie: "Hale County This Morning, This Evening"
      },
      { nominee: "Minding the Gap", movie: "Minding the Gap" },
      { nominee: "Of Fathers and Sons", movie: "Of Fathers and Sons" },
      { nominee: "RBG", movie: "RBG" }
    ]
  },
  {
    category: "Best Documentary - Short Subject",
    nominees: [
      { nominee: "Black Sheep", movie: "Black Sheep" },
      { nominee: "End Game", movie: "End Game" },
      { nominee: "Lifeboat", movie: "Lifeboat" },
      { nominee: "A Night at the Garden", movie: "A Night at the Garden" },
      { nominee: "Period. End of Sentence.", movie: "Period. End of Sentence." }
    ]
  },
  {
    category: "Best Live Action Short Film",
    nominees: [
      { nominee: "Detainment", movie: "Detainment" },
      { nominee: "Fauve", movie: "Fauve" },
      { nominee: "Marguerite", movie: "Marguerite" },
      { nominee: "Mother", movie: "Mother" },
      { nominee: "Skin", movie: "Skin" }
    ]
  },
  {
    category: "Best Animated Short Film",
    nominees: [
      { nominee: "Animal Behaviour", movie: "Animal Behaviour" },
      { nominee: "Bao", movie: "Bao" },
      { nominee: "Late Afternoon", movie: "Late Afternoon" },
      { nominee: "One Small Step", movie: "One Small Step" },
      { nominee: "Weekends", movie: "Weekends" }
    ]
  },
  {
    category: "Best Original Score",
    nominees: [
      { nominee: "Black Panther", movie: "Black Panther" },
      { nominee: "BlacKkKlansman", movie: "BlacKkKlansman" },
      {
        nominee: "If Beale Street Could Talk",
        movie: "If Beale Street Could Talk"
      },
      { nominee: "Isle of Dogs", movie: "Isle of Dogs" },
      { nominee: "Mary Poppins Returns", movie: "Mary Poppins Returns" }
    ]
  },
  {
    category: "Best Original Song",
    nominees: [
      { nominee: "All The Stars", movie: "Black Panther" },
      { nominee: "I'll Fight", movie: "RBG" },
      { nominee: "Shallow", movie: "A Star Is Born" },
      {
        nominee: "The Place Where Lost Things Go",
        movie: "Mary Poppins Returns"
      },
      {
        nominee: "When A Cowboy Trades His Spurs For Wings",
        movie: "The Ballad of Buster Scruggs"
      }
    ]
  },
  {
    category: "Best Sound Editing",
    nominees: [
      { nominee: "A Quiet Place", movie: "A Quiet Place" },
      { nominee: "Black Panther", movie: "Black Panther" },
      { nominee: "Bohemian Rhapsody", movie: "Bohemian Rhapsody" },
      { nominee: "First Man", movie: "First Man" },
      { nominee: "Roma", movie: "Roma" }
    ]
  },
  {
    category: "Best Sound Mixing",
    nominees: [
      { nominee: "Black Panther", movie: "Black Panther" },
      { nominee: "Bohemian Rhapsody", movie: "Bohemian Rhapsody" },
      { nominee: "First Man", movie: "First Man" },
      { nominee: "Roma", movie: "Roma" },
      { nominee: "A Star Is Born", movie: "A Star Is Born" }
    ]
  },
  {
    category: "Best Production Design",
    nominees: [
      { nominee: "Black Panther", movie: "Black Panther" },
      { nominee: "The Favourite", movie: "The Favourite" },
      { nominee: "First Man", movie: "First Man" },
      { nominee: "Mary Poppins Returns", movie: "Mary Poppins Returns" },
      { nominee: "Roma", movie: "Roma" }
    ]
  },
  {
    category: "Best Cinematography",
    nominees: [
      { nominee: "Cold War", movie: "Cold War" },
      { nominee: "The Favourite", movie: "The Favourite" },
      { nominee: "Never Look Away", movie: "Never Look Away" },
      { nominee: "Roma", movie: "Roma" },
      { nominee: "A Star Is Born", movie: "A Star Is Born" }
    ]
  },
  {
    category: "Best Makeup and Hairstyling",
    nominees: [
      { nominee: "Border", movie: "Border" },
      { nominee: "Mary Queen of Scots", movie: "Mary Queen of Scots" },
      { nominee: "Vice", movie: "Vice" }
    ]
  },
  {
    category: "Best Costume Design",
    nominees: [
      {
        nominee: "The Ballad of Buster Scruggs",
        movie: "The Ballad of Buster Scruggs"
      },
      { nominee: "Black Panther", movie: "Black Panther" },
      { nominee: "The Favourite", movie: "The Favourite" },
      { nominee: "Mary Poppins Returns", movie: "Mary Poppins Returns" },
      { nominee: "Mary Queen of Scots", movie: "Mary Queen of Scots" }
    ]
  },
  {
    category: "Best Film Editing",
    nominees: [
      { nominee: "BlacKkKlansman", movie: "BlacKkKlansman" },
      { nominee: "Bohemian Rhapsody", movie: "Bohemian Rhapsody" },
      { nominee: "Green Book", movie: "Green Book" },
      { nominee: "The Favourite", movie: "The Favourite" },
      { nominee: "Vice", movie: "Vice" }
    ]
  },
  {
    category: "Best Visual Effects",
    nominees: [
      { nominee: "Avengers: Infinity War", movie: "Avengers: Infinity War" },
      { nominee: "Christopher Robin", movie: "Christopher Robin" },
      { nominee: "First Man", movie: "First Man" },
      { nominee: "Ready Player One", movie: "Ready Player One" },
      { nominee: "Solo: A Star Wars Story", movie: "Solo: A Star Wars Story" }
    ]
  }
];

export default data;
