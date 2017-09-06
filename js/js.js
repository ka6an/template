function focus_input(input) {
    $(input).addClass('active');
    $(input).children().children('input')[0].focus();
}

function unfocus_input(input) {
    if ($(input).val() === "")
        $(input).parent().parent().removeClass('active');
    $(input).parent().parent().removeClass('incorrect');
}

function validate_form() {
    var email = $("#email"),
        name = $("#name"),
        country = $("#country option:selected").val(),
        checkbox = $("#checkbox-agree"),
        email_test = /.+@.+\..+/i,
        name_test = /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/;
    if (!email_test.test(email.val())) {
        console.log("no email");
        focus_input(email.parent().parent());
        email.parent().parent().addClass('incorrect');
        return false;
    }
    if (!name_test.test(name.val())) {
        focus_input(name.parent().parent());
        name.parent().parent().addClass('incorrect');
        return false;
    }
    if (country === "0") return false;
    if (!checkbox.is(':checked')) return false;
    return true;
}
$('.form__reset').click(function() {
    var input = $(this).prev('input:first');
    input.val('');
    input.parent().parent().removeClass('incorrect');
});