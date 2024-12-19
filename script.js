const getAdviceButton = document.getElementById('getAdvice');
const userInput = document.getElementById('userInput');
const adviceOutput = document.getElementById('adviceOutput');

getAdviceButton.addEventListener('click', async () => {
    const query = userInput.value.trim();

    if (!query) {
        adviceOutput.textContent = '🎅 Please enter a query to get advice! 🎄';
        return;
    }

    adviceOutput.textContent = '🎁 Fetching your festive advice... 🎁';

    // Simulate a festive response for now
    setTimeout(() => {
        adviceOutput.textContent = `🎄 Holiday advice: Make everything sparkle and enjoy! 🎄`;
    }, 2000);
});
