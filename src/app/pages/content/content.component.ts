import { ActivatedRoute, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentServiceService } from '../../service/content-service.service';
import { HttpClient } from '@angular/common/http';
import { Marvel } from '../../model/interface';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  
  photoCover: string =
    'https://drive.google.com/thumbnail?sz=w1000&id=14p-EvYCctAIgefcCCtzij0WKuK4BPxKn';
  contentTitle: string = 'MINHA NOTICIA';
  contentDesription: string = 'Lorem ipsomd';
  
  private contentId: string | null = '0';
  arrayResult: Marvel[] = [];
  contentMarvel?: Marvel;

  constructor(
    private route: ActivatedRoute,
    private service: ContentServiceService
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => (this.contentId = value.get('id'))
    );
    console.log(this.contentId)
    this.getContentById(this.contentId);
  }
  getContentById(contentId: string | any) {
    this.service.getContentById(contentId).subscribe({
      next: (resposta) => {
        this.contentMarvel ={
          description: resposta.description,
          id: resposta.id,
          photoUrl: resposta.photoUrl,
          title: resposta.title
        }
        console.log(resposta);
      },
      error: (err) => console.log(err),
    });
  }
  
}




// this.ob = this.setValuesToComponent(this.id);
    // this.route.data.subscribe((data) => {
    //   this.arrayResult = data['contentData'];
    //   this.contentTitle = this.arrayResult.title;
    //   this.contentDesription = this.arrayResult.description;
    //   this.photoCover = this.arrayResult.photoUrl;
    // });