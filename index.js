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
        appendRowToTable(table, tr);
    });
})

function appendRowToTable(table, row) {
    table.append(row);
}