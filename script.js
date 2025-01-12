let books = JSON.parse(localStorage.getItem('books')) || [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ]



// Zugriff auf das Div-Element, in das die Bücher eingefügt werden
const inputBookDiv = document.getElementById('input_book');

// Funktion, um die Bücher anzuzeigen
function displayBooks() {
  let booksHTML = ''; // Leere Variable für die HTML-Inhalte
  books.forEach((book, index) => {
    booksHTML += `
      <div class="book">
        <h2>${book.name}</h2>
        <img src="./img/book-bindings-3348945_640.jpg" alt="Book_Picture">
        <p><strong>Autor:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Erscheinungsjahr:</strong> ${book.publishedYear}</p>
        <p><strong>Preis:</strong> €${book.price.toFixed(2)}</p>
        <p><strong>Likes:</strong> ${book.likes}</p>
        <button class="like-button" onclick="toggleLike(${index})">
          <img src="./img/Icon/${book.liked ? 'heart-filled' : 'heart-empty'}.png" alt="Like-Icon" class="like-icon">
        </button>
        <h3>Kommentare:</h3>
        <ul>
          ${book.comments.map(comment => `<li><strong>${comment.name}:</strong> ${comment.comment}</li>`).join('')}
        </ul>
        <div class="save-button-logo">
        <input type="text" id="comment-input-${index}" placeholder="Kommentar hinzufügen">
        <button onclick="addComment(${index})"><img src="./img/Icon/memory-card.png" alt="Save-Button-Logo"></button>
        </div>
      </div>
    `;
  });
  inputBookDiv.innerHTML = booksHTML; // HTML-Inhalte einfügen
}

// Funktion, um Like-Status zu toggeln
function toggleLike(index) {
  books[index].liked = !books[index].liked;
  books[index].likes += books[index].liked ? 1 : -1;
  displayBooks(); // Aktualisiert die Ansicht
  saveToLocalStorage(); // Änderungen speichern
}

// Funktion, um einen Kommentar hinzuzufügen
function addComment(index) {
  const commentInput = document.getElementById(`comment-input-${index}`);
  const newComment = commentInput.value.trim();
  if (newComment) {
    books[index].comments.push({ name: "Anonym", comment: newComment });
    commentInput.value = ''; // Eingabefeld zurücksetzen
    saveToLocalStorage(); // Änderungen speichern
    displayBooks(); // Aktualisiert die Ansicht
  } else {
    alert("Bitte geben Sie einen Kommentar ein.");
  }
}

// Bücher beim Laden der Seite anzeigen
displayBooks();

// Funktion, um die Bücher im Local Storage zu speichern
function saveToLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}





// To Do's:

// CSS Styling
// Scrollbar bei den Kommentaren hinzufügen
