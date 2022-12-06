import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { AuthService } from '../services/auth.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produits! : Produit[];

  constructor(private produitService: ProduitService, public authService: AuthService) { 
    //this.produits = this.produitService.listeProduits();
  }

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits(){
    this.produitService.listeProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
    });
  }
    

  supprimerProduit(p: Produit)
  {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log("produit supprimé");
        this.chargerProduits();
        });
        
  }

}
