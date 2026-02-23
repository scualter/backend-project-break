const getNavBar = () => {

return `
<nav>
    <a href="/products/view">Productos</a>
    <a href="/products/view?category=Camisetas">Camisetas</a>
    <a href="/products/view?category=Pantalones">Pantalones</a>
    <a href="/products/view?category=Zapatos">Zapatos</a>
    <a href="/products/view?category=Accesorios">Accesorios</a>
</nav>`
}

module.exports = getNavBar