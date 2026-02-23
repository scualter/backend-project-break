const getProductCards = (products, isDashboard = false) => {
  let html = '<div style="display:flex; flex-wrap:wrap; gap:20px;">'; // contenedor tipo grid

  products.forEach(product => {
    html += `
      <div style="
        border:1px solid #ccc;
        border-radius:5px;
        padding:10px;
        width:220px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between;
        box-shadow:0 2px 5px rgba(0,0,0,0.1);
        background:#f9f9f9;
      ">
        <h2 style="font-size:18px; text-align:center;">${product.name}</h2>
        <img src="${product.image}" width="200" style="object-fit:cover; border-radius:5px;" alt="${product.name}">
        
        ${!isDashboard ? `
          <p style="text-align:center;">${product.description}</p>
          <p><strong>Precio:</strong> ${product.price} €</p>
          <p><strong>Categoría:</strong> ${product.category}</p>
          <p><strong>Talla:</strong> ${product.size}</p>
        ` : ``}

        <div style="display:flex; flex-direction:column; gap:5px; width:100%; margin-top:10px;">
          <a href="/products/view/${product._id}" style="
            display:inline-block;
            padding:5px 10px;
            background:#007bff;
            color:white;
            text-decoration:none;
            border-radius:3px;
            text-align:center;
          ">Ver</a>

          ${isDashboard ? `
            <a href="/dashboard/${product._id}/edit" style="
              display:inline-block;
              padding:5px 10px;
              background:#28a745;
              color:white;
              text-decoration:none;
              border-radius:3px;
              text-align:center;
            ">Editar</a>
            <form action="/products/${product._id}?_method=DELETE" method="POST" style="margin:0;">
              <button type="submit" style="
                width:100%;
                padding:5px 10px;
                background:#dc3545;
                color:white;
                border:none;
                border-radius:3px;
                cursor:pointer;
              ">Eliminar</button>
            </form>
          ` : ``}
        </div>
      </div>
    `;
  });

  html += '</div>';
  return html;
};

module.exports = getProductCards;