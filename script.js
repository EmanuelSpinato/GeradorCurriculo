// Função para adicionar um novo item ao currículo
function addItem() {
    // Obtém o conteúdo e o tipo do novo item do formulário
    var content = document.getElementById('content').value;
    var type = document.getElementById('type').value;
    var resume = document.getElementById('resume');

    // Cria um novo elemento com base no tipo selecionado
    var newItem;
    if (type === 'name') {
        newItem = document.createElement('h1'); // Se for o nome, cria um título de primeiro nível (h1)
    } else if (type === 'personalInfo') {
        newItem = document.createElement('p'); // Se for informação pessoal, cria um parágrafo (p)
    } else if (type === 'title') {
        newItem = document.createElement('h2'); // Se for título, cria um título de segundo nível (h2)
        newItem.classList.add('resume-section'); // Adiciona a classe para estilo específico
    } else if (type === 'subTitle') {
        newItem = document.createElement('p'); // Se for subtítulo, cria um parágrafo (p)
        newItem.classList.add('resume-item'); // Adiciona a classe para estilo específico
    }
    newItem.textContent = content; // Define o texto do novo item
    resume.appendChild(newItem); // Adiciona o novo item ao currículo
}

// Função para atualizar a imagem do currículo
function updateImage() {
    // Obtém a URL, largura e altura da imagem do formulário
    var imageURL = document.getElementById('imageURL').value;
    var imageWidth = document.getElementById('imageWidth').value;
    var imageHeight = document.getElementById('imageHeight').value;

    // Cria um novo elemento de imagem
    var image = document.createElement('img');
    image.src = imageURL; // Define a URL da imagem
    image.style.width = imageWidth + 'px'; // Define a largura da imagem
    image.style.height = imageHeight + 'px'; // Define a altura da imagem
    image.classList.add('circle-image'); // Adiciona a classe para estilo específico

    document.body.appendChild(image); // Adiciona a imagem ao corpo do documento
}

// Função para trocar o tema do currículo
function changeTheme() {
    // Obtém a cor do formulário
    var color = document.getElementById('color').value;
    var colorStripe = document.getElementById('colorStripe');
    colorStripe.style.backgroundColor = color; // Define a cor da faixa lateral

    // Obtém todos os elementos que devem ter sua cor de fundo alterada
    var themeElements = document.querySelectorAll('.theme, .resume-section, .circle-image');
    themeElements.forEach(function(element) {
        element.style.borderColor = color; // Define a cor de fundo
        if (element.classList.contains('circle-image')) {
            element.style.borderColor = color; // Se for uma imagem circular, define a cor da borda
        }
    });
}

// Função para finalizar e imprimir o currículo
function completeResume() {
    var form = document.getElementById('resumeForm');
    form.style.display = 'none'; // Esconde o formulário
    window.print(); // Abre a janela de impressão
}
