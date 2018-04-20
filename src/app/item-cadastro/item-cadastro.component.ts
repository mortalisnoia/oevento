import { Component, OnInit } from '@angular/core';

import { itemService } from '../item.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];

  constructor(private itemService: itemService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.itemService.listar().subscribe(dados => this.itens = dados);
  }

  adicionar(frm: FormControl) {
    console.log(frm.value);

    this.itemService.adicionar(frm.value).subscribe(() => {
      frm.reset();
      this.consultar();
    });
  }

  remover() {
      this.itemService.remover(this.itens).subscribe(() => {
      this.consultar();
    });

  }

}
