$(document).ready(function(){
  $('.btn').on('click', openModal);

  $('.modal').on('click', closeModal);
   registerEsc();

  function openModal() {
    var target = $(this).data('target')
    console.log($(target));
      $(target).fadeIn(100, function () {
          $(this).find('.modal').fadeIn(100);

      });
  }

  function closeModal() {
      $('.modal').fadeOut(100, function () {
          $('.overlay').fadeOut(100);

          $(document).off('keyup');
          $('.overlay').off('click', closeModal);
      });

  }

  function registerEsc() {
      $(document).on('keyup', function (e) {
          if (e.keyCode === 27) {
              closeModal();
          }
      });
  }

})
