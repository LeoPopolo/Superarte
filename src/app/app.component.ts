import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Instituto SuperArte');
    this.metaService.addTags([
      { name: 'description', content: 'Formando adoradores' },
      { name: 'keywords', content: 'instituto, educación, cursos, musica, arte, adoración, grabacion, audio, carrera, danza, pintura, guitarra, piano, canto, bateria, cristiano' },
      { name: 'author', content: 'Instituto SuperArte' },
      { name: 'robots', content: 'index, follow' },
      { 'http-equiv': 'content-language', content: 'es' },
      { property: 'og:title', content: 'Instituto SuperArte' },
      { property: 'og:description', content: 'Formando adoradores' },
      { property: 'og:image', content: '../assets/superarteLogoBlack.jpeg' },
      { property: 'og:url', content: 'https://institutosuperarte.com.ar' }
    ]);
  }
}
