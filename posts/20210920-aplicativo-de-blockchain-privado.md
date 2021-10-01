---
date: 2021-10-01 08:54:23
title: Aplicativo de blockchain privado
description: Primeiro projeto concluído da curso Blockchain Developer da Udacity.
---

Quando li sobre web 3.0, fiquei fascinado. As possibilidades de uma nova era da Internet está para surgir, aliás, já está acontecendo. Foi então que resolvi comprar o curso [Become a Blockchain Developer](https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309) da Udacity.

O curso é dividido em 4 módulos, em cada módulo um projeto.

<div class="__code">

- Blockchain Fundamentals (04/10)
  - Create your own private blockchain
- Etherem Smart Contracts, Tokens and Dapps (25/10)
  - Build crypstar dapp on ethereum
- Blockchain Architecture (15/11)
  - Ethereum Dapp for tracking items through supply chain
- Dapp with autonomous smart contracts and oracles (04/12)
  - Flight delay insurance dapp
- Capstone (25/12)
  - Build your own a descentralized application
  </div>

(Em parentêses o deadline para concluir cada projeto)

Diferentemente dos cursos on-line, como Udemy ou YouTube, não existe o famoso copia e cola. Lá são apresentados as ferramentas necessárias para concluir o projeto, e não uma pessoa programando na sua frente. Há um fórum de discussão para retirar dúvidas, e um feedback bem detalhado do instrutor sobre o seu projeto quando submetido.

Isso força a você pensar primeiro antes de ver a resposta, o que é excelente para a aprendizagem!

No meu [primeiro projeto](https://github.com/ddfonseca/udacity-private-blockchain-project), forneceram-me um template básico dos métodos que as classes Block e Blockchain precisavam ter. Veja um exemplo aqui:

<div class="__code">
Criteria: Modify the validate() function to validate
if the block has been tampered or not.

Meets Specifications:

- Return a new promise to allow the method be called asynchronous.
- Create an auxiliary variable and store the current hash of the block
  in it (this represent the block object)
- Recalculate the hash of the entire block (Use SHA256 from crypto-js library)
- Compare if the auxiliary hash value is different from the calculated one.
- Resolve true or false depending if it is valid or not.
</div>

Enfim, vamos testar o [o meu projeto](https://github.com/ddfonseca/udacity-private-blockchain-project).

## Como testar o aplicativo?

Faça um git clone na sua máquina e rode com `node app.js`.

Temos as seguintes rotas para serem testadas:

<div class="__code">

- GET: /block/height/:height
  - Retorna o bloco de acordo com a altura (sequência da blockchain)
- GET: /block/hash/:hash
  - Retorna o bloco de acordo com o hash
- POST: /requestValidation com address no body
  - Retorna uma mensagem atrelada ao timestamp para verificação de autoria
- POST: /submitstar com address, message, signature e star no body
  - Adiciona a informação da estrela na blockchain verificando se o blockchain não foi modificado
- GET: /blocks/:address
  - Retorna os blocos de acordo com a wallet address
- GET: /validatechain
  - Valida se todos os blocos da blockchain não foram modificados

</div>

E vamos de testes!

### GET /block/height/:height

Assim que a aplicação estiver no ar, o primeiro block, chamado 'Genesis' será criado.
Então podemos fazer um GET do /block/height/0

![Height_0](/assets/img/height_0.png)

### GET: /block/hash/:hash

Veja que o meu bloco possui o hash de `38d4f689db7b8357724e2863b9d3e4b3f7bdbd6449ebc5d7336a3549349e4529`,
o seu será diferente, já que o timestamp terá mudado. Esse hash compõe todo o objeto, considerando a altura,
a mensagem no body, o tempo, o preivousHash, etc.

![Hash_0](/assets/img/hash_0.png)

### POST: /requestValidation com address no body

Para esse teste, você precisa de um endereço de uma wallet, vou gerar uma com o Bitcoin Core Testnet:

```
getnew address "" legacy
n4jt3GN2gGMdt6nnSFnEMUyQLLuZU773u6
```

![Request validation](/assets/img/request_validation.png)

Logo em seguida, vamos enviar a estrela com essa mensagem.

### POST: /submitstar com address, message, signature e star no body

Precisamos além o address, da mensagem (gerada em cima), também da assinatura. Com o Bitcoin Core, você consegue assinar a mensagem com a sua wallet:

```
signmessage n4jt3GN2gGMdt6nnSFnEMUyQLLuZU773u6 n4jt3GN2gGMdt6nnSFnEMUyQLLuZU773u6:1633098488:starRegistry￼
H82oyBr16Hytj8BLHFaknyH9qAkvx3FPm3f9CVHcfvdKV22DHUeuRwDyJfOO5T0AEkZBKGAOev4FZ2Sh0M5St4U=

```

Com a assinatura, fiz quatro submitstars apenas para fins de teste:

![Stars submit](/assets/img/submit_stars.png)

Veja que o tamanho do blockchain agora é 4 (height: 4).

### GET: /blocks/:address

Agora vamos resgatar todas as estrelas submetidas pela address:

![Blocks by owner](/assets/img/json_blocks.png)

### GET: /validatechain

Por fim, validar toda a cadeia.

![Validate chain](/assets/img/validatechain.png)

## Conclusão

Esse foi meu primeiro projeto com blockchain e estou muito animado com o que está por vir! Agora que entendi os fundamentos e o porquê da blockchain ser tão confiável, vamos aprender sobre Ethereum, Solidity, Smart Contracts e Dapps!
