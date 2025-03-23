document.getElementById('generate-a-poem').addEventListener('click', generatePoem);
document.getElementById('prompt').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generatePoem();
    }
});

function generatePoem() {
    const prompt = document.getElementById('prompt').value;
    const poemDiv = document.getElementById('poem');

    // Arrays of words and phrases to create a poem
    const subjects = ["love", "dreams", "nature", "life", "hope"];
    const verbs = ["whispers", "dances", "shines", "flows", "awakens"];
    const adjectives = ["gentle", "bright", "endless", "mystical", "vibrant"];
    const endings = [
        "in the heart of the night.",
        "under the stars so bright.",
        "with every heartbeat.",
        "in the silence of the dawn.",
        "where the spirit soars."
    ];

    // Generate a random poem based on the user's prompt
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];

    const poem = `In the realm of ${prompt}, ${randomVerb} like a ${randomAdjective} ${randomSubject},\n
    ${randomVerb.charAt(0).toUpperCase() + randomVerb.slice(1)} ${randomEnding}\n
    The whispers of the night, a gentle embrace,\n
    Where dreams take flight, in this sacred space.\n
    With every heartbeat, the story unfolds,\n
    Of love and hope, of adventures untold.\n
    So let your spirit soar, let your heart ignite,\n
    For in the world of poetry, everything feels right.`;

    poemDiv.innerText = poem;
}
