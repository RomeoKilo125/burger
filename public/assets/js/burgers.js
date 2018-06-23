$(function() {

  $('#makerForm').on('submit', (event) => {
    event.preventDefault()

    let newBurger = {
      name: $('#burgerName').val().trim()
    }

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(() => {
      console.log("new burger on the menu");
      location.reload()
    })
  })


})
