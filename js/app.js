const URL_JSON = "json/productos.json"

$('#boton').click( () => {
    $.getJSON( URL_JSON, (response, status) => {

        if ( status !== 'success') {
            throw new Error('error')
        }
        for ( const cuadro of response ) {

            $('#contenido').prepend(`
                <div>
                    <!-- OJO si usan localhost que cambian las propiedades -->
                    <h3> ${ cuadro.titulo } </h3>
                    <p> ${ cuadro.stock } </p>
                </div>
            `)
        }
    })
})
