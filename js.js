
$('.dropdown-menu a').click(function(){
    $(this).parents('.dropdown').find('.btn').html($(this).text());
    $(this).parents('.dropdown').find('.btn').val($(this).text());
  });

$('#yes, #no').click(function(e){
    let clicked = e.target.id;
    let val = $('#dropdownMenuButton').text();
    let data = {
        val: val,
        clicked: clicked
    };

    $('#dropdownMenuButton').html('Bitte wählen');

    $.ajax({
        type: 'POST',
        url: 'php.php',
        data: data
    })
})
