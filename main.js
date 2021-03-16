// Creare un oggetto
var student1 = {
  name: 'Dora',
  surname: 'Budić',
  age: 31
};

// Stampare le proprietà dell'oggetto
for (var key in student1) {
  document.getElementById('properties').innerHTML += "<li>" + key + ": " + student1[key] + "</li>";
}

// Creare un array di oggetti
var students = [
  {
    name: 'Dora',
    surname: 'Budić',
    age: 31
  },
  {
    name: 'Giuditta',
    surname: 'Marino',
    age: 31
  },
  {
    name: 'Sonia',
    surname: 'Cerasaro',
    age: 30
  }
];

// Stampare nome e cognome di ogni oggetto dell'array
for (var i = 0; i < students.length; i++) {
  document.getElementById('students').innerHTML += "<li>" + students[i].name + " " + students[i].surname + "</li>";
}

// Prendere i valori inseriti dall'utente
$('#add').click(function () {
  var userName = $('#name').val();
  var userSurname = $('#surname').val();
  var userAge = parseInt($('#age').val());

  // Creare un oggetto con quelle proprietà
  var user = {
    name: userName,
    surname: userSurname,
    age: userAge
  };

  // Inserire il nuovo oggetto nell'array
  students.push(user);
  $('#students').append("<li>" + user.name + " " + user.surname + "</li>");
  $('#students li:last-child').css('color', 'blue');
});
