import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano-angular';// titulo que se muestra en el navegador


  suenaNota(numero: number): void{ //se crea un metedo para hacer sonas las noas guardadas
      var audio = new Audio;// creamis una nueva instancia de audio
      audio.src ="../assets/sonidos/note"+ numero+ ".wav"// buscamos la fuente del audio
      audio.load();//carga el audio con el metodo load del objeto audio
      audio.play();//permite que el audio se repoduzca
  }
}
