from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/cadastro', methods=['GET', 'POST'])
def cadastro():
    # Processar o formulário de curriculo
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        return redirect(url_for('home'))
    return render_template('cadastro.html')

@app.route('/usuario')
def usuario():
    return render_template('usuario.html')

@app.route('/vagas')
def vagas():
    return render_template('vagas.html')

if __name__ == '__main__':
    app.run(debug=True)
