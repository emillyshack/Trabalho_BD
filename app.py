from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app = Flask(__name__, template_folder='template')

config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'root',
    'database': 'sapataria'
}

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    nome = request.form['nome']
    idade = request.form['idade']  # Alterado para idade

    try:
        conexao = mysql.connector.connect(**config)
        cursor = conexao.cursor()
        cursor.execute("SELECT * FROM pessoa WHERE nome=%s AND idade=%s", (nome, idade))  # Alterado para idade
        usuario = cursor.fetchone()
        cursor.close()
        conexao.close()

        if usuario:
            return redirect(url_for('welcome'))
        else:
            return "Nome ou idade incorretos, tente novamente."  # Mensagem atualizada
    except mysql.connector.Error as erro:
        return f"Erro ao conectar ao banco de dados: {erro}"

@app.route('/welcome')
def welcome():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
