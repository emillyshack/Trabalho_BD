
import mysql.connector


config = {
    'host': 'localhost',      
    'user': 'root',    
    'password': 'root',  
    'database': 'sapataria'   
}


try:
    conexao = mysql.connector.connect(**config)
    if conexao.is_connected():
        print("Conexão estabelecida com sucesso!")
except mysql.connector.Error as erro:
    print(f"Erro ao conectar: {erro}")