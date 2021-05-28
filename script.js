/*
#Summary
inspirer is an object that contains:
1. _quotes is an array of some(50) random qoutes.
2. getRandomQuotes is a getter method that pick a random quote from array and return it.
3. borderGenerator is a simple method that generates a border with respect to the quote length.
*/
const inspirer = {
    // 1.An array
    _quotes: [
        "Love For All, Hatred For None. – Khalifatul Masih III",
        "Change the world by being yourself. – Amy Poehler",
        "Every moment is a fresh beginning. – T.S Eliot",
        "Never regret anything that made you smile. – Mark Twain",
        "Everything you can imagine is real. – Pablo Picasso",
        "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
        "Whatever you do, do it well. – Walt Disney",
        "What we think, we become. – Buddha",
        "All limitations are self-imposed. – Oliver Wendell Holmes",
        "Tough times never last but tough people do. – Robert H. Schiuller",
        "Problems are not stop signs, they are guidelines. – Robert H. Schiuller",
        "One day the people that don’t even believe in you will tell everyone how they met you. – Johnny Depp",
        "If I’m gonna tell a real story, I’m gonna start with my name. – Kendrick Lamar",
        "If you tell the truth you don’t have to remember anything. – Mark Twain",
        "Have enough courage to start and enough heart to finish. – Jessica N. S. Yourko",
        "Hate comes from intimidation, love comes from appreciation. – Tyga",
        "I could agree with you but then we’d both be wrong. – Harvey Specter",
        "Oh, the things you can find, if you don’t stay behind. – Dr. Seuss",
        "Determine your priorities and focus on them. – Eileen McDargh",
        "Be so good they can’t ignore you. – Steve Martin",
        "Dream as if you’ll live forever, live as if you’ll die today. – James Dean",
        "Yesterday you said tomorrow. Just do it. – Nike",
        "I don’t need it to be easy, I need it to be worth it. – Lil Wayne",
        "Never let your emotions overpower your intelligence. – Drake",
        "Nothing lasts forever but at least we got these memories. – J. Cole",
        "Don’t you know your imperfections is a blessing? – Kendrick Lamar",
        "Reality is wrong, dreams are for real. – Tupac",
        "To live will be an awfully big adventure. – Peter Pan",
        "Try to be a rainbow in someone’s cloud. – Maya Angelou",
        "There is no substitute for hard work. – Thomas Edison",
        "Strive for greatness. – Lebron James",
        "Wanting to be someone else is a waste of who you are. – Kurt Cobain",
        "And still, I rise. – Maya Angelou",
        "The time is always right to do what is right. – Martin Luther King Jr.",
        "Let the beauty of what you love be what you do. – Rumi",
        "May your choices reflect your hopes, not your fears. – Nelson Mandela",
        "A happy soul is the best shield for a cruel world. – Atticus",
        "White is not always light and black is not always dark. – Habeeb Akande",
        "Life becomes easier when you learn to accept the apology you never got. – R. Brault",
        "Happiness depends upon ourselves. – Aristotle",
        "Turn your wounds into wisdom. – Oprah Winfrey",
        "Change the game, don’t let the game change you. – Macklemore",
        "It hurt because it mattered. – John Green",
        "If the world was blind how many people would you impress? – Boonaa Mohammed",
        "The meaning of life is to give life meaning. – Ken Hudgins",
        "When words fail, music speaks. – Shakespeare",
        "Embrace the glorious mess that you are. – Elizabeth Gilbert",
        "Normality is a paved road: it’s comfortable to walk but no flowers grow. – Vincent van Gogh",
        "I have nothing to lose but something to gain. – Eminem"
     ],
     // 2. A getter method
     get getRandomQuotes()
     {
         let quote = this._quotes[Math.floor(Math.random()*51)];
         return this.borderGenerator(quote.length)+"\n"+quote+"\n"+this.borderGenerator(quote.length);
     },
     // 3. A simple method
     borderGenerator(n){
        return "-".repeat(n);
     }     
}

/* 
If we are invoking a getter method of object, 
than there is no need to add paenthesis after the method name.
*/
console.log(inspirer.getRandomQuotes);