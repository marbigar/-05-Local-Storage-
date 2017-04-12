/**
 * Created by Maryasha on 06.04.17.
 */
var questions = [
    {
        question: 'Небо синє?',
        answers: ['Так', 'Ні', 'Оранжеве'],
        correct: 0
    },
    {
        question: 'Скільки пальців у людини?',
        answers: ['5', '20', '10'],
        correct: 1
    },
    {
        question: 'Чи буде безвіз в Україні?',
        answers: ['Так', 'Ні','Невідомо'],
        correct: 2
    },
    {
        question: 'Скільки струн у класичній гітарі?',
        answers: ['12','10', '6'],
        correct: 2
    },
    {
        question: 'JavaScript - це?',
        answers: ['Серверна мова програмування', 'Клієнтська мова програмування'],
        correct: 1
    }
];
localStorage.setItem('questions', JSON.stringify(questions));