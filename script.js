const getAdviceButton = document.getElementById('getAdvice');
const userInput = document.getElementById('userInput');
const adviceOutput = document.getElementById('adviceOutput');

getAdviceButton.addEventListener('click', async () => {
    const query = userInput.value.trim();

    if (!query) {
        adviceOutput.textContent = 'Please enter a query.';
        return;
    }

    adviceOutput.textContent = 'Fetching advice...';

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer your_openai_api_key`
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: `You are a decision-making assistant. Provide concise, actionable advice: ${query}`,
                max_tokens: 100,
                temperature: 0.7
            })
        });

        const data = await response.json();
        adviceOutput.textContent = data.choices[0].text.trim();
    } catch (error) {
        adviceOutput.textContent = 'Error fetching advice. Please try again.';
    }
});
