function focus_input(input) {
    $(input).addClass('active');
    $(input).children().children('input')[0].focus();
}

function unfocus_input(input) {
    if ($(input).val() === "")
        $(input).parent().parent().removeClass('active');
    $(input).parent().parent().removeClass('incorrect');
}

function unfocus_select(select) {
    $(select).parent().removeClass('incorrect');
}

function is_checked(checkbox) {
    if ($(checkbox).is(':checked'))
        $(checkbox).parent().removeClass('incorrect');
}

function validate_form() {
    var email = $("#email"),
        name = $("#name"),
        country = $("#country"),
        country_val = $("#country option:selected").val(),
        checkbox = $("#checkbox-agree"),
        email_test = /.+@.+\..+/i,
        name_test = /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/;
    if (!email_test.test(email.val())) {
        focus_input(email.parent().parent());
        email.parent().parent().addClass('incorrect');
        return false;
    }
    if (!name_test.test(name.val())) {
        focus_input(name.parent().parent());
        name.parent().parent().addClass('incorrect');
        return false;
    }
    if (country_val === "0") {
        country.parent().addClass('incorrect');
        return false;
    }
    if (!checkbox.is(':checked')) {
        checkbox.parent().addClass('incorrect');
        return false;
    }
    return true;
}
$('.form__reset').click(function() {
    var input = $(this).prev('input:first');
    input.val('');
    input.parent().parent().removeClass('incorrect');
});