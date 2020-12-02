sortable('.js-sortable-disabled', {
    forcePlaceholderSize: true,
    items: ':not(.disabled)',
    handle: '.js-handle',
    placeholderClass: 'border border-orange mb1'
});


[$('#btn-1'), $('#btn-2')].forEach((el, index) => {
    el.click(function() {
        const table = $(`#table-${index + 1}`);
        const tr = $('#tempRow').clone();
        let numb = $('.js-sortable-disabled').children().length;
        // need to be fixed
        tr.find('#javascript').attr('id',`javascript${numb + 10}`);
        tr.find("[for='javascript']").attr('for',`javascript${numb + 10}`);
        tr.find('#button-3').attr('id', `button-3${numb + 10}`);
        tr.find('#toggle-3').attr('id', `toggle-3${numb + 10}`);
        tr.find("[for='toggle-3']").attr('for', `toggle-3${numb + 10}`);
        tr.find('#button-4').attr('id', `button-4${numb + 10}`);
        tr.find('#toggle-4').attr('id', `toggle-4${numb + 10}`);
        tr.find("[for='toggle-4']").attr('for', `toggle-4${numb + 10}`);
        appendRowToTable(table, tr);
    });
})

function appendRowToTable(table, row) {
    table.append(row);
}