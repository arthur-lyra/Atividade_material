import { Component } from '@angular/core';
import { Produto } from './Models/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Atividade1';
  produtos: Produto[] = [];
  novoProduto: Produto = new Produto(0, '', 0, 0);
  idCounter: number = 1;

  adicionarProduto() {
    if (this.novoProduto.nome && this.novoProduto.preco > 0 && this.novoProduto.quantidade > 0) {
      this.novoProduto.id = this.idCounter++;
      this.produtos.push(new Produto(
        this.novoProduto.id,
        this.novoProduto.nome,
        this.novoProduto.preco,
        this.novoProduto.quantidade
      ));
      this.novoProduto = new Produto(0, '', 0, 0);
    }
  }

  removerProduto(id: number) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  }
}
