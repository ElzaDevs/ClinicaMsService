# ClinicaMsService
Front-end | Back-end | 
# MsClínica — site institucional

Este projeto acompanha a etapa de front-end da playlist: menu e logomarca,
carrossel de destaque, serviços, sobre nós, especialidades, médicos,
depoimentos, blog, rodapé e layout responsivo. O código foi organizado para
continuar simples de editar: cada página tem HTML próprio, os estilos
compartilhados ficam em `assets/CSS/syte.css` e os comportamentos em
`assets/JS/`.

## Páginas

- `index.html`: página inicial e destaques.
- `empresa.html`: apresentação e valores da clínica.
- `servicos.html`: serviços e especialidades.
- `medicos.html`: equipe médica.
- `depoimentos.html`: área reservada a relatos autorizados.
- `blog.html`: artigos informativos.
- `contato.html`: contato e solicitação de atendimento.

As informações sobre serviços, especialidades e profissionais são exemplos de
apresentação. Confirme e substitua o conteúdo pelo que a clínica realmente
oferece antes de publicar.

## Executar

Pode estar abrindo: `https://elzadevs.github.io/ClinicaMsService/`

Abra `index.html` no navegador ou inicie um servidor local na pasta do projeto:

```powershell
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Configurar agendamento pelo WhatsApp

Edite `assets/JS/config.js` e informe o número comercial no formato internacional,
somente com dígitos e código do país, por exemplo `5511999999999`. O formulário
não envia dados a um servidor nem guarda informações: ele abre uma conversa no
WhatsApp com o pedido de contato. Sem um número válido configurado, a página
mostra uma mensagem clara em vez de simular um envio bem-sucedido.

O formulário solicita apenas nome, telefone e serviço de interesse; não inclua
informações clínicas ou dados de saúde.

## Etapa Laravel da playlist

A playlist continua com uma etapa de CMS/back-end em Laravel. Este diretório
original não contém uma aplicação PHP, e este ambiente não tem PHP/Composer
instalados. Por isso, o resultado aqui corresponde ao site institucional
responsivo; não apresenta um CMS ou painel falso. Para continuar a etapa de
back-end da série será necessário preparar o ambiente Laravel e integrar o
conteúdo do site a esse CMS.
