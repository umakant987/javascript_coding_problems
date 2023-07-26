const input = {
    "questions": [
        {
            "id": 1,
            "title": "question 1",
            "category_name": "sports"
        },
        {
            "id": 2,
            "title": "question 2",
            "category_name": "sports"
        },
        {
            "id": 3,
            "title": "question 3",
            "category_name": "General Knowledge"
        },
        {
            "id": 4,
            "title": "question 4",
            "category_name": "General Knowledge"
        },
        {
            "id": 5,
            "title": "question 5",
            "category_name": "Geography"
        }
    ]
};

// groupTitlesByCategory  => groupQuestionsByCategory
function groupTitlesByCategory(questionsArray) {
    const groupedTitles = {};

    questionsArray.forEach((question) => {
        const { category_name, title } = question;

        if (groupedTitles[category_name]) {
            groupedTitles[category_name].push(title);
        } else {
            groupedTitles[category_name] = [title];
        }
    });

    return groupedTitles;
}

const result = groupTitlesByCategory(input.questions);
console.log(result);
