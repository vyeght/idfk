const getAdviceButton = document.getElementById('getAdvice');
const userInput = document.getElementById('userInput');
const adviceOutput = document.getElementById('adviceOutput');

// Array of festive advice messages
const festiveResponses = [
    "🎄 Wrap yourself in joy and choose what makes you smile! 🎁",
    "🎅 Ho ho ho! Trust your gut—it knows the way. ❄️",
    "🎁 The sparkliest choice is often the most fun! ✨",
    "❄️ Listen to your heart and spread some cheer! 🎶",
    "🎄 Go for the option that feels like a cozy fireplace! 🔥",
    "🎅 Rudolph says: Lead the way with confidence! 🦌",
    "🎁 Sometimes, the simplest choice is the best gift. 🎀",
    "✨ Add a little glitter and go for it! 🌟",
    "🎄 Like snowflakes, every choice is unique. Pick your favorite! ❄️",
    "🎅 Take a sleigh ride towards what feels right. 🛷",
    "🎁 Don’t overthink—choose the one that brings you joy! 🎄",
    "✨ Santa’s tip: Trust yourself, you’ve got this! 🎅",
    "❄️ Choose what fills your stocking with happiness. 🎁",
    "🎄 Spread kindness, and the right choice will follow. ❤️",
    "🎅 Believe in magic—it’s always the answer! 🎄",
    "🎁 A little hot cocoa and some faith will guide you! ☕",
    "❄️ Pick the path that sparkles the most! ✨",
    "🎄 Joy is the answer—always go with joy! 🎉",
    "🎅 Be as bold as Rudolph’s red nose! 🦌",
    "🎁 Life is short, so go for the extra sprinkles! 🍪",
    "❄️ Cozy up to the idea that feels warmest. 🔥",
    "🎄 Deck the halls with your favorite decision! 🎶",
    "🎅 Trust the magic—it’s all around you. 🎄",
    "🎁 The best gift is your confidence—pick what feels right! 🎁",
    "❄️ Ho ho ho! Trust the choice that jingles the most. 🎶",
    "🎄 Choose with love, and you’ll never go wrong. ❤️",
    "🎅 Leap like Dasher—go for what excites you! 🦌",
    "🎁 Life’s a party—pick the decision with the best lights! 🎇",
    "❄️ Snowball fights are fun—so is taking chances! ☃️",
    "🎄 Follow the star—it always leads to something magical! ⭐",
    "🎅 Joy to the world—pick the joyful option! 🎶",
    "🎁 The choice with the biggest bow is the winner! 🎀",
    "❄️ Don’t be a Grinch—pick the cheerful choice! 💚",
    "🎄 Trust yourself—you’re as wise as Santa! 🎅",
    "🎅 Celebrate your decision—it’s all part of the journey! 🎄",
    "🎁 The jolliest choice is always the best one. 🎅",
    "✨ Think sparkles, think fun, and go for it! ✨",
    "🎄 Life is like a candy cane—sweet and twisty. Pick your flavor! 🍭",
    "🎅 Have courage—it’s the gift that keeps on giving! 🎁",
    "🎁 Jingle all the way to the decision that makes you laugh! 🎶",
    "❄️ Be frosty and cool—make the bold move! ❄️",
    "🎄 Choose what makes your sleigh bells ring. 🛷",
    "🎅 Believe in yourself—you’re magical too! 🎄",
    "🎁 The happiest choice is usually the right one. 🎉",
    "✨ You’re the star on top of the tree—shine bright! ⭐",
    "🎄 Celebrate every choice—it’s all part of the holiday cheer! 🎅",
    "🎅 Santa says: Trust the first idea—it’s usually the best! ❄️",
    "🎁 Be brave, like the elves making toys—pick with care! 🎁"
];

getAdviceButton.addEventListener('click', () => {
    const query = userInput.value.trim();

    if (!query) {
        adviceOutput.textContent = '🎅 Please enter a query to get advice! 🎄';
        return;
    }

    adviceOutput.textContent = '🎁 Fetching your festive advice... 🎁';

    // Randomly select a response after a short delay
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * festiveResponses.length);
        adviceOutput.textContent = festiveResponses[randomIndex];
    }, 2000);
});
