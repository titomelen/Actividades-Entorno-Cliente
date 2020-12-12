class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }

  getTitulo() {
    return `Titulo: ${this.titulo}`;
  }

  getAutor() {
    return `Autor: ${this.autor}`;
  }
}

const PP = new Libro('Pride and Prejudice', 'Jane Austen');
const H = new Libro('Hamlet', 'William Shakespeare');
const WP = new Libro('War and Peace', 'Leo Tolstoy');

