const baseHtml = (content) => {
return ` <!DOCTYPE html>
<html>
        <head>
            <title>Tienda</title>
        </head>
    <body>
        ${content}
    </body>
</html>`
}

module.exports = baseHtml