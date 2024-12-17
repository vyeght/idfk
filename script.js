const getAdviceButton = document.getElementById('getAdvice');
const userInput = document.getElementById('userInput');
const adviceOutput = document.getElementById('adviceOutput');

// Replace with YOUR OpenAI API Key
const OPENAI_API_KEY = "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";

getAdviceButton.addEventListener('click', async () => {
    const query = userInput.value.trim();

    if (!query) {
        adviceOutput.textContent = '🎅 Please enter a query to get advice! 🎄';
        return;
    }

    adviceOutput.textContent = '🎁 Fetching your festive advice... 🎁';

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: `You are a holiday-themed decision-making assistant. Provide festive, concise, and actionable advice: ${query}`,
                max_tokens: 150,
                temperature: 0.8
            })
        });

        const data = await response.json();
        adviceOutput.textContent = `🎄 ${data.choices[0].text.trim()} 🎄`;
    } catch (error) {
        console.error("Error fetching advice:", error);
        adviceOutput.textContent = '❄️ Error fetching advice. Please check your connection or try again! ❄️';
    }
});
