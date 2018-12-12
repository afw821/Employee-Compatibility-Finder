$(function () {
  const validateForm = function () {
    let isValid = true;

    // Using jQuery's each method, loop through the inputs
    // Sets isValid to false if any are empty
    $('input').each(function () {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    // Using jQuery's each method, loop through the select elements
    // Sets isValid to false if any are unchosen
    $('.custom-select').each(function (i, element) {
      if (!$(this).val()) {
        isValid = false;
      }
    });

    return isValid;
  }



  const submit = function (e) {
    e.preventDefault();


    if (validateForm()) {


      const userData = {
        name: $('#name').val().trim(),
        photo: $('#photo').val().trim(),
        scores: [
          $('#qOne').val(),
          $('#qTwo').val(),
          $('#qThree').val(),
          $('#qFour').val(),
          $('#qFive').val(),
          $('#qSix').val(),
          $('#qSeven').val(),
          $('#qEight').val(),
          $('#qNine').val(),
          $('#qTen').val()
        ]
      };

      console.log(userData);
      $.post('/api/employees', userData).done(function (data) {
        console.log(data);
        $('.modal-content').empty();
        $(".modal-content").append(`
        <div class="modal-header">
        <h2 class="modal-title"><strong>Best Match</strong></h2>
        <button class="close float-right" data-dismiss="modal">×</button>
    </div>
    <div class="modal-body">
        <h2 id="match-name">Name: ${data.name}</h2>
        <img id="match-img" src="${data.photo}" alt="${data.name}" width="100%">
    </div>
    <div class="modal-footer">
        <button class="btn btn-default" data-dismiss="modal">Close</button>
    </div>`);
        $("#results-modal").modal("show");

      });

    } else {


      $('#error')
        .text('Please complete everything before submitting!')
        .addClass('alert alert-danger');
    }
  }

  $('#submit').on('click', submit)


})

