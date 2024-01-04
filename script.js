document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
      {
        quote: "Life is a journey, not a destination.",
        author: "Ralph Waldo Emerson"
      },
      {
        quote: "Dreams are like puzzles. When all the pieces are missing, it is up to us to find them and decide where and how they fit in.",
        author: "Imania Margria"
      },
      {
        quote: "When regret and shame fades away, beauty will be in your heart to forever stay.",
        author: "Imania Margria"
      },
      {
        quote: "Today is a good day to have a great day",
        author: "Germany Kent"
      },
      {
        quote: "Read a thousand books, and your words will flow like a river.",
        author: "Lisa See"
      },
      {
        quote: "One sure window into a person’s soul is his reading list.",
        author: "Mary B. W. Tabor"
      }
    ];
  
    // Function to get a random quote
    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }
  
    // Event listener for button click
    document.getElementById('generateQuoteButton').addEventListener('click', function() {
      const quoteDisplay = document.getElementById('quoteDisplay');
      const randomQuote = getRandomQuote();
      quoteDisplay.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;
    });
  });