import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitsComponent } from '../produits/produits.component';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

allProduits! : Produit[];
searchTerm!: string;

  nomProduit! : string;
  produits!:Produit[];
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {

    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
      
  }

  onKeyUp(filterText : string){
    this.produits = this.allProduits.filter(item =>
    item.nomProduit!.toLowerCase().includes(filterText));
    }
    

  

  rechercherProds(){
    this.produitService.rechercherParNom(this.nomProduit).
    subscribe(prods => {
    this.produits = prods;
    console.log(prods)});
    }

    
    

}
