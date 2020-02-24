$(document).ready(function () {
    $('.modal').modal();
});

$('.collection')
    .on('click', '.collection-item', function () {
        var adicionado = this.firstChild.textContent + ' adicionado!';
        M.toast({html: adicionado, classes: 'rounded'});
        
        var $badge = $('.badge', this);
        if ($badge.length === 0) {
            $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
        }

        $badge.text(parseInt($badge.text()) + 1);
    })
    .on('click', '.badge', function () {
        $(this).remove();
        return false;
    });

$('#confirmar').on('click', function () {
    var texto = "";

    $('.badge').parent().each(function () {
        texto += this.firstChild.textContent + ': ';
        texto += this.lastChild.textContent + ', ';
    });

    $('#resumo').empty().text(texto);
});

$('.acao-limpar').on('click', function () {
    $('#numero-mesa').val('');
    $('.badge').remove();
});
