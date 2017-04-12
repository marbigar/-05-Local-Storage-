(function() {

    var questions = JSON.parse( localStorage.getItem('questions') );
    var $body = $('body');
    var code = '<form>';

    for ( var i in questions ) {
        number = parseInt(i) + 1;

        code += "<ul><li>" + number + ') ' + questions[i].question;
        code += "<ul>";

        for ( var j in questions[i].answers ) {
            answer = questions[i].answers[j];
            code += "<li><label><input required type='radio' name='" + i +  "' value='" + j + "'> " + answer + '</label></li>';
        }

        code += "</ul>";
        code += "</li></ul>";
    }
    code += '<input id="check" type="submit" value="Перевірити">';
    code += '</form>';
    $body.append(code);

    $('form').submit(function(event) {
        event.preventDefault(); // відміняє дію (в даному випадку відправка форми)
        var answers = $(this).serializeArray(); // перетворює дані форми в масив об'єктів

        var correct = 0;
        for ( i in questions ) {
            if ( questions[i].correct == answers[i].value ) {
                correct++;
            }
        }

        alert('Правильних відповідей: ' + correct);

        $('input[type=radio]').prop('checked', false);
    })

})();
