
$('.dropdown-menu a').click(function(){
    $(this).parents('.dropdown').find('.btn').html($(this).text());
    $(this).parents('.dropdown').find('.btn').val($(this).text());
  });

$('#yes, #no').click(function(e){
    let clicked = e.target.id;
    let val = $('#dropdownMenuButton').text();
    if (val === 'Bitte wählen:'){
        $('#alertGroup').show();
        return;
    }
    let data = {
        val: val,
        clicked: clicked
    };

    $.ajax({
        type: 'POST',
        url: 'php.php',
        data: data
    })

    $('#alertGroup').hide();
    $('#alert').show();
    setTimeout(function(){
        $('#dropdownMenuButton').html('Bitte wählen:');
        $('#alert').hide();
    },2000)
})
