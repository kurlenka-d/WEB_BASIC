(function ($) {

  //// ---> Check issue element
  jQuery.fn.exists = function () {
    return jQuery(this).length;
  }

  $(function () {

    if (!is_mobile()) {

      if ($('.phonefield').exists()) {
        $('.phonefield').mask('+375-99-999-99-99');
      }

      if ($('.form_check').exists()) {

        $('.form_check').each(function () {

          var form = $(this),
            btn = form.find('.btnsubmit');

          // Функция проверки полей формы      
          function checkInput() {

            form.find('.rfield').each(function () {

              if ($(this).hasClass('phonefield')) {

                var pmc = $(this);
                if ((pmc.val().indexOf("_") != -1) || pmc.val() == '') {
                  pmc.addClass('empty_field');
                } else {
                  pmc.removeClass('empty_field');
                }

              } else if ($(this).hasClass('mailfield')) {

                var mailfield = $(this);
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (pattern.test(mailfield.val())) {
                  mailfield.removeClass('empty_field');
                } else {
                  mailfield.addClass('empty_field');
                }

              } else if ($(this).is(':checkbox')) {
                var checkBox = $(this);
                if (checkBox.is(':checked')) {
                  checkBox.removeClass('empty_field')
                } else {
                  checkBox.addClass('empty_field')
                }
              } else if ($(this).val() != '') {

                $(this).removeClass('empty_field');

              } else {

                $(this).addClass('empty_field');
              }

            });
          }

          // Функция подсветки незаполненных полей
          function lightEmpty() {
            form.find('.empty_field')
            alert("Заполните все обязательные поля");


          }

          //  Полсекундная проверка
          setInterval(function () {
            checkInput();
            var sizeEmpty = form.find('.empty_field').length;
            if (sizeEmpty > 0) {
              if (btn.hasClass('disabled')) {
                return false
              } else {
                btn.addClass('disabled')
              }
            } else {
              btn.removeClass('disabled')
            }
          }, 500);

          //  Клик по кнопке
          btn.click(function () {
            if ($(this).hasClass('disabled')) {
              lightEmpty();
              return false
            } else {
              form.submit();
            }
          });

        });

      }
    }

  });

})(jQuery);