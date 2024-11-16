<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo Atualizado com Menu</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        .cem {
            height: 100vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(to bottom, aquamarine, lightblue);
        }

        .caixa {
            width: 60vw;
            background-color: aliceblue;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border: 1px solid #ddd;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
        }

        .navbar {
            display: flex;
            gap: 20px;
            font-size: 16px;
            color: #333;
            cursor: pointer;
        }

        .navbar li {
            list-style: none;
        }
    </style>
</head>
<body>
    <div class="cem">
        <div class="caixa">
            <h1>Bem-Vindo</h1>
            <ul class="navbar">
                <li onclick="showHome()">Home</li>
                <li onclick="showStores()">Lojas</li>
                <li onclick="showHistory()">História</li>
                <li onclick="showComment()">Comentário</li>
            </ul>
            <br>
            <div id="explorer">
                <!-- Aqui ficará o conteúdo dinâmico alterado pelas funções JavaScript -->
                <img id="img" src="https://cdnv2.moovin.com.br/iriacalcados/imagens/produtos/det/tenis-nike-air-max-ap-preto--3b57407d094672b0de3207c49a730b1c.jpg" alt="Imagem do produto">
                <div class="info-container">
                    <div id="product-name"><h2>Nike - Padrão</h2></div>
                    <div class="informacoes">
                        <p>Fangs-Sapataria, nosso compromisso vai além de vender sapatos — buscamos proporcionar uma experiência de compra única...</p>
                        <br>
                        <h3>Quantidade em Estoque - 10 </h3>
                        <br>
                        <h3><a href="pagamento.html" class="payment-button">R$ 300,00</a></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        function showHome() {
            const explorer = document.getElementById('explorer');
            explorer.innerHTML = `
                <img id="img" src="https://cdnv2.moovin.com.br/iriacalcados/imagens/produtos/det/tenis-nike-air-max-ap-preto--3b57407d094672b0de3207c49a730b1c.jpg" alt="Imagem do produto">
                <div class="info-container">
                    <div id="product-name"><h2>Nike - Padrão</h2></div>
                    <div class="informacoes">
                        <p>Fangs-Sapataria, nosso compromisso vai além de vender sapatos — buscamos proporcionar uma experiência de compra única...</p>
                        <br>
                        <h3>Quantidade em Estoque - 10 </h3>
                        <br>
                        <h3><a href="pagamento.html" class="payment-button">R$ 300,00</a></h3>
                    </div>
                </div>
            `;
        }

        function showStores() {
            const explorer = document.getElementById('explorer');
            explorer.innerHTML = `
                <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                    <h2>Mapa das Lojas</h2>
                </div>
                <div style="width: 100%; height: 30vh; background-color: lightgray; display: flex; justify-content: center; align-items: center; border-radius: 10px;">
                    <p>Localização da loja Fang - Posição fictícia</p>
                </div>
            `;
        }

        function showHistory() {
            const explorer = document.getElementById('explorer');
            explorer.innerHTML = `
                <div style="width: 100%; height: 50vh; display: flex; justify-content: center; align-items: center; border-radius: 10px; overflow: hidden;">
                    <p style="padding: 20px; font-size: 18px; text-align: center;">
                        Em uma competição emocionante, os alunos do 2º ano do ensino médio conseguiram conquistar o primeiro lugar na gincana escolar...
                    </p>
                </div>
            `;
        }

        function showComment() {
            const explorer = document.getElementById('explorer');
            explorer.innerHTML = `
                <div class="comment-section" id="comment-section">
                    <h3>Deixe seu Comentário:</h3>
                    <textarea id="comment-box" class="comment-box" placeholder="Digite seu comentário..."></textarea>
                    <button class="submit-button" onclick="submitComment()">Enviar</button>
                    <div id="comments-display" class="comment-display"></div>
                </div>
            `;
        }

        function submitComment() {
            const commentBox = document.getElementById('comment-box');
            const commentDisplay = document.getElementById('comments-display');
            const comment = commentBox.value.trim();

            if (comment !== "") {
                const newComment = document.createElement('p');
                newComment.textContent = comment;
                commentDisplay.appendChild(newComment);
                commentBox.value = "";
            }
        }
    </script>
</body>
</html>
