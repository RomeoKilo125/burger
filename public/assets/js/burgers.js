$(function() {

  $('#makerForm').on('submit', (event) => {
    event.preventDefault()

    let newBurger = {
      name: $('#burgerName').val().trim()
    }

    $('#burgerName').val("")

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(() => {
      console.log("new burger on the menu");
      location.reload()
    })
  })

  $('.btnServeEat').on('click', function (event) {
    let id = $(this).data('id')
    let status = $(this).data('devoured')
    status = status == 0 ? 1: 0;
    let newStatus = {
      devoured: status
    }

    $.ajax('/api/burgers/' + id, {
      type: "PUT",
      data: newStatus
    }).then(() => {
      console.log("served")
      location.reload()
    })
  })

  $('.delete').on('click', function(event) {
    let id = $(this).data('id')
    $.ajax('/api/burgers/' + id, {
      type: "DELETE",
    }).then(
      () => {
        console.log('deleted: ' + id)
        location.reload()
      }
    )
  })

})
