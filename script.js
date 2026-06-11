/* ===== RESET E ESTILO GLOBAL ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f0f8f5;
    color: #333;
}

a {
    text-decoration: none;
    color: inherit;
}

/* ===== HERO IMAGE ===== */
header {
    position: relative;
    text-align: center;
}

.hero {
    background-image: url('https://images.unsplash.com/photo-1565155288128-1d0da004dd89?auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hero h1 {
    font-size: 2.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
}

.hero p {
    font-size: 1.2rem;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 15px;
    border-radius: 8px;
}

/* ===== MENU ===== */
nav {
    background-color: #1b5e20;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

nav a {
    color: white;
    padding: 15px 25px;
    font-weight: bold;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #4caf50;
}

/* ===== SECTIONS ===== */
section {
    padding: 30px 15px;
    max-width: 1000px;
    margin: auto;
}

h2 {
    color: #2e7d32;
    margin-bottom: 15px;
}

p {
    text-align: justify;
    margin-bottom: 15px;
}

/* ===== BOTÃO ===== */
.btn {
    display: inline-block;
    padding: 12px 25px;
    margin: 15px 0;
    background-color: #4caf50;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #388e3c;
}

/* ===== BOX INFORMATIVO ===== */
.info-box {
    background-color: #e8f5e9;
    border-left: 5px solid #2e7d32;
    padding: 15px;
    margin: 20px 0;
}

/* ===== FOOTER ===== */
footer {
    background-color: #1b5e20;
    color: white;
    text-align: center;
    padding: 20px 10px;
    margin-top: 30px;
}

/* ===== RESPONSIVIDADE ===== */
@media(max-width: 768px) {
    .hero h1 {
        font-size: 2rem;
    }

    .hero p {
        font-size: 1rem;
    }

    nav a {
        padding: 12px 15px;
    }
}

@media(max-width: 480px) {
    .hero {
        height: 40vh;
    }

    .hero h1 {
        font-size: 1.5rem;
    }

    .hero p {
        font-size: 0.9rem;
    }
}
