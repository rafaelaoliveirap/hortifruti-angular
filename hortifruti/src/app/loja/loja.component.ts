import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  listaProdutos: Produto []
  produto: Produto = new Produto
 
  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void{
    this.findAllProdutos()
    }

  findAllProdutos(){
   this.produtosService.getAllProdutos().subscribe((resp: Produto[])=>{
     this.listaProdutos = resp
   })
  }
  publicar(){
    this.produtosService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      this.produto = new Produto()
      location.assign('/loja')
      this.findAllProdutos()
    })
  }
  
}
