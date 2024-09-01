import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, Input } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { Marvel } from '../../model/interface';
import { Observable } from 'rxjs';
import { dataFake } from '../../repository/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  photoCover: string = 'https://drive.google.com/thumbnail?sz=w1000&id=14p-EvYCctAIgefcCCtzij0WKuK4BPxKn';
  contentTitle: string = 'MINHA NOTICIA';
  contentDesription: string = 'Lorem ipsomd';
  private id: string | null = '0';
  arrayResult: Marvel[] = [];

  public marvel$!: Observable<Marvel[]>;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    
  }
  ngOnInit(): void {
    this.marvel$ = this.http.get<Marvel[]>('http://localhost:8080/marvel');
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.marvel$.subscribe({
      next: (resposta) => {
        this.arrayResult = resposta.filter(
          (item) => item.id.toString() == this.id
        );
        this.contentTitle = this.arrayResult[0].title;
        this.contentDesription = this.arrayResult[0].description;
        this.photoCover = this.arrayResult[0].photoUrl;
      },
      error: (err) => console.log(err),
    });
  }

  setValuesToComponent(id: string | null): Observable<Marvel[]> {
    return this.http.get<Marvel[]>('http://localhost:8080/marvel');
  }
}
