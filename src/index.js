const { request, response } = require('express');
const express = require('express');

const app = express();
//app.use(express.json)

//app.get("/primeirarota", (request,response) => {
  //  return response.send("Minha primeira API");

//});

app.get("/products", (request,response) => {
    return response.json(
        [
        {
            "id": "1",
            "nome": "Caderno Pequeno",
            "image": "caderno.png",
            "categoria": "7",
            "descricao": "caderno universitario 40 folhas",
            "status": "Ativo"
        },
        {
            "id": "2",
            "nome": "Caderno Pequeno",
            "image": "caderno.png",
            "categoria": "7",
            "descricao": "caderno universitario 40 folhas",
            "status": "Ativo"
        }
    ]
    )    
});

app.post("/products", (request,response) => {    
    const body  = request.body;
    console.log(body)
    const {nome,image,categoria,descricao,status}  = request.body;
    min = Math.ceil(0);
    max = Math.floor(99);
    const id= Math.floor(Math.random() * (max - min)) + min;
    var objeto = {
        id,
        nome,
        image,
        categoria,
        status,
        descricao
    }
    return  response.json(objeto);
});

app.get("/products/index/:id", (request,response) => {    
    const id= request.params.id;
    console.log(id)
    return  response.json(        
       [{
               "id": "1",
               "nome": "Caderno Pequeno",
               "image": "caderno.png",
               "categoria": "7",
               "descricao": "caderno universitario 40 folhas",
               "status": "Ativo"
           }
       ]
   );
});


app.get("/products/list/", (request,response) => {    
    console.log(request.query)
    const { name,categId } = request.query;
    console.log(name)
    console.log(categId)
    const id=1
    const image="imagem 1"
    const status="ativo"
    const descricao="Desc 01"
    var objeto = {
        id,
        name,
        image,
        categId,
        status,
        descricao
    }
    return  response.json(objeto);
});

app.put("/products/:id", (request,response) => {    
    const id= request.params.id;
    const body  = request.body;
    console.log(id)
    const {nome,image,categoria,descricao,status}  = request.body;
    var objeto = {
        id,
        nome,
        image,
        categoria,
        status,
        descricao
    }
    return  response.json(objeto);
});

app.delete("/products/:id", (request,response) => {    
    const id= request.params.id;
    return  response.json({"message": "Produto Excluído com Sucesso"});
});

app.get("/segundarota", (request,response) => {
    return response.send("Minha segunda API");

});


app.post("/cadastroCategoria", (request,response) => {    
    const body  = request.body;
    console.log(body)
    const {nome,descricao}  = request.body;
    min = Math.ceil(0);
    max = Math.floor(99);
    const id= Math.floor(Math.random() * (max - min)) + min;
    var objeto = {
        id,
        nome,
        descricao
    }
    return  response.json(objeto);
});

app.get("/cadastroCategoria/index/:id", (request,response) => {    
    const id= request.params.id;
    console.log(id)
    return  response.json(        
       [{
               "id": "1",
               "nome": "Caderno Pequeno",
               "descricao": "caderno universitario 40 folhas"
           }
       ]
   );
});


app.delete("/cadastroCategoria/:id", (request,response) => {    
    const id= request.params.id;
    return  response.json({"message": "Categoria Excluído com Sucesso"});
});

app.get("/cadastroCategoria/index/:nome", (request,response) => {    
    const id= request.params.nome;
    console.log(nome)
    return  response.json(        
       [{
               "id": "1",
               "nome": "Caderno",
               "descricao": "caderno universitario 40 folhas"
           }
       ]
   );
});


app.post("/cadastroCliente", (request,response) => {    
    const body  = request.body;
    console.log(body)
    const { nome, telefone, email, senha, cpf, endereço, cidade, estado , bairro } = request.body;
    min = Math.ceil(0);
    max = Math.floor(99);
    const id= Math.floor(Math.random() * (max - min)) + min;
    var objeto = {
        id,
        nome,
        telefone,
        email,
        senha,
        cpf,
        endereço,
        cidade,
        estado,
        bairro
    }
    return  response.json(objeto);
});


app.get("/cadastroCliente/index/:id", (request,response) => {    
    const id= request.params.id;
    console.log(id)
    return  response.json(        
       [{
          "id": "1",
          "nome": "Caderno Pequeno",
          "descricao": "caderno universitario 40 folhas",
          "telefone": "96385274",
          "email": "henrique@gmail.com",
          "senha": "1234",
          "cpf": "45612378945",
          "endereço": "rua dos bobos numero 0",
          "cidade": "Russia",
          "estado": "Estados Unidos",
          "bairro": "Chile"
           }
       ]
   );
});

app.delete("/cadastroCliente/:id", (request,response) => {    
    const id= request.params.id;
    return  response.json({"message": "Cliente Excluído com Sucesso"});
});

app.get("/cadastroCliente/index/:nome", (request,response) => {    
    const id= request.params.nome;
    console.log(nome)
    return  response.json(        
       [{
          "id": "1",
          "nome": "Caderno Pequeno",
          "descricao": "caderno universitario 40 folhas",
          "telefone": "96385274",
          "email": "henrique@gmail.com",
          "senha": "1234",
          "cpf": "45612378945",
          "endereço": "rua dos bobos numero 0",
          "cidade": "Russia",
          "estado": "Estados Unidos",
          "bairro": "Chile"      
        }
       ]
   );
});


app.post("/cadastroVendas", (request,response) => {    
    const body  = request.body;
    console.log(body)
    const { produto, cliente, quantidade, totalBruto , desconto, valorTotal } = request.body;
    min = Math.ceil(0);
    max = Math.floor(99);
    const id= Math.floor(Math.random() * (max - min)) + min;
    var objeto = {
        id,
        produto,
        cliente,
        quantidade, 
        totalBruto,
        desconto,
        valorTotal
    }
    return  response.json(objeto);
});


app.get("/cadastroVendas/index/:id", (request,response) => {    
    const id= request.params.id;
    console.log(id)
    return  response.json(        
       [{
          "id": "1",
          "produto" : "Caderno",
          "cliente" : "henrique", 
          "quantidade" : "5",
          "totalBruto" : "100.00",
          "desconto" : "5",
          "valorTotal" : "95"
           }
       ]
   );
});

app.delete("/cadastroVendas/:id", (request,response) => {    
    const id= request.params.id;
    return  response.json({"message": "Venda Excluído com Sucesso"});
});

app.get("/cadastroVendas/index/:nome", (request,response) => {    
    const id= request.params.nome;
    console.log(nome)
    return  response.json(        
       [{
         "id": "1",
          "produto" : "Caderno",
          "cliente" : "henrique", 
          "quantidade" : "5",
          "totalBruto" : "100.00",
          "desconto" : "5",
          "valorTotal" : "95"
        }
       ]
   );
});



app.listen(3000);
