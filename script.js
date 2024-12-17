$(document).ready(function() {
    const $result = $('#result');
  
    $('.btn').click(function() {
      const value = $(this).text();
  
      if ($.isNumeric(value)) {
        $result.val($result.val() + value);
      } else if (value === '=') {
        try {
          $result.val(eval($result.val()));
        } catch (error) {
          $result.val('Error');
        }
      } else if (value === 'C') {
        $result.val('');
      } else if (value === '←') {
        $result.val($result.val().slice(0, -1));
      } else {
        $result.val($result.val() + value);
      }
    });
  });