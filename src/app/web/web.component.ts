import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WebComponent {

  @ViewChild('medios') medios: ElementRef = new ElementRef(null);
  @ViewChild('artes') artes: ElementRef = new ElementRef(null);
  @ViewChild('musica') musica: ElementRef = new ElementRef(null);
  @ViewChild('grabacion') grabacion: ElementRef = new ElementRef(null);
  @ViewChild('ministerial') ministerial: ElementRef = new ElementRef(null);

  nosotrosPanelStyles = {
    opacity: '0',
    transform: 'scale(0.5)'
  };

  showNosotrosPanel: boolean = false;

  panelText: string = '';
  nosotrosText: string = '';

  mediosData = {
    styles: {
      transform: 'none'
    },
    isActive: false
  };
  artesData = {
    styles: {
      transform: 'none'
    },
    isActive: false
  };
  musicaData = {
    styles: {
      transform: 'none'
    },
    isActive: false
  };
  grabacionData = {
    styles: {
      transform: 'none'
    },
    isActive: false
  };
  ministerialData = {
    styles: {
      transform: 'none'
    },
    isActive: false
  };

  panelStyle = {
    top: '0',
    left: '0',
    width: '0vw'
  };

  sectionsLeft = {
    inicio: '0',
    nosotros: '-110vw',
    formacion: '-100vw',
    staff: '-100vw',
    sedes: '-100vw'
  }

  sectionsColor = {
    nosotros: false,
    formacion: false,
    staff: false,
    sedes: false,
  }

  canToggleSections: boolean = true;

  constructor() { }

  toggleSection(section: string) {

    if (this.canToggleSections) {

      this.canToggleSections = false;

      this.restartInitialState();

      switch(section) {
        case 'nosotros': {
          this.restartSections();
          this.sectionsColor.nosotros = true;

          setTimeout(()=>{
            this.sectionsLeft.nosotros = '0';
            this.canToggleSections = true;
          }, 500);

          break;
        }

        case 'formacion': {
          this.restartSections();
          this.sectionsColor.formacion = true;

          setTimeout(()=>{
            this.sectionsLeft.formacion = '0';
            this.canToggleSections = true;
          }, 500);

          break;
        }

        case 'staff': {
          this.restartSections();
          this.sectionsColor.staff = true;

          setTimeout(()=>{
            this.sectionsLeft.staff = '0';
            this.canToggleSections = true;
          }, 500);

          break;
        }

        case 'sedes': {
          this.restartSections();
          this.sectionsColor.sedes = true;

          setTimeout(()=>{
            this.sectionsLeft.sedes = '0';
            this.canToggleSections = true;
          }, 500);

          break;
        }

        default: {
          this.restartSections();

          setTimeout(()=>{
            this.sectionsLeft.inicio = '0';
            this.canToggleSections = true;
          }, 500);

          break;
        }
      }
    }
  }

  restartInitialState() {
    this.panelStyle.width = '0';

    this.mediosData.styles.transform = 'none';
    this.artesData.styles.transform = 'none';
    this.musicaData.styles.transform = 'none';
    this.grabacionData.styles.transform = 'none';
    this.ministerialData.styles.transform = 'none';

    this.mediosData.isActive = false;
    this.artesData.isActive = false;
    this.musicaData.isActive = false;
    this.grabacionData.isActive = false;
    this.ministerialData.isActive = false;
  }

  expandSection(element: ElementRef, section: string) {
    const elementInfo = element.nativeElement.getBoundingClientRect();
    this.panelStyle.width = '0';
    this.panelText = '';

    setTimeout(() => {

      this.getIsActive(section) ? this.panelStyle.width = '0' : this.panelStyle.width = '30vw';
      this.transformArrow(section);
      this.setActive(section);

      setTimeout(() => {
        if (this.getIsActive(section)) {
          this.setPanelText(section);
        }
      }, 150);
    }, 150);

    this.panelStyle.left = elementInfo.right + 'px';
    this.panelStyle.top = 'calc(0px - 4.3%)';
  }

  getIsActive(section: string) {
    switch(section) {
      case 'medios': {
        return this.mediosData.isActive;
      };
      case 'artes': {
        return this.artesData.isActive;
      };
      case 'musica': {
        return this.musicaData.isActive;
      };
      case 'grabacion': {
        return this.grabacionData.isActive;
      };
      case 'ministerial': {
        return this.ministerialData.isActive;
      };
      default: {
        return null;
      }
    }
  }

  setActive(section: string) {
    switch(section) {
      case 'medios': {
        this.mediosData.isActive = !this.mediosData.isActive;
        this.artesData.isActive = false;
        this.musicaData.isActive = false;
        this.grabacionData.isActive = false;
        this.ministerialData.isActive = false;
      };
      break;
      case 'artes': {
        this.mediosData.isActive = false;
        this.artesData.isActive = !this.artesData.isActive;
        this.musicaData.isActive = false;
        this.grabacionData.isActive = false;
        this.ministerialData.isActive = false;
      };
      break;
      case 'musica': {
        this.mediosData.isActive = false;
        this.artesData.isActive = false;
        this.musicaData.isActive = !this.musicaData.isActive;
        this.grabacionData.isActive = false;
        this.ministerialData.isActive = false;
      };
      break;
      case 'grabacion': {
        this.mediosData.isActive = false;
        this.artesData.isActive = false;
        this.musicaData.isActive = false;
        this.grabacionData.isActive = !this.grabacionData.isActive;
        this.ministerialData.isActive = false;
      };
      break;
      case 'ministerial': {
        this.mediosData.isActive = false;
        this.artesData.isActive = false;
        this.musicaData.isActive = false;
        this.grabacionData.isActive = false;
        this.ministerialData.isActive = !this.ministerialData.isActive;
      };
      break;
    }
  }

  transformArrow(section: string) {
    switch(section) {
      case 'medios': {
        this.mediosData.styles.transform = this.getIsActive(section) ? 'rotate(0deg)' : 'rotate(90deg)';
        this.artesData.styles.transform = 'none';
        this.musicaData.styles.transform = 'none';
        this.grabacionData.styles.transform = 'none';
        this.ministerialData.styles.transform = 'none';
      };
      break;
      case 'artes': {
        this.mediosData.styles.transform = 'none';
        this.artesData.styles.transform = this.getIsActive(section) ? 'rotate(0deg)' : 'rotate(90deg)';
        this.musicaData.styles.transform = 'none';
        this.grabacionData.styles.transform = 'none';
        this.ministerialData.styles.transform = 'none';
      };
      break;
      case 'musica': {
        this.mediosData.styles.transform = 'none';
        this.artesData.styles.transform = 'none';
        this.musicaData.styles.transform = this.getIsActive(section) ? 'rotate(0deg)' : 'rotate(90deg)';
        this.grabacionData.styles.transform = 'none';
        this.ministerialData.styles.transform = 'none';
      };
      break;
      case 'grabacion': {
        this.mediosData.styles.transform = 'none';
        this.artesData.styles.transform = 'none';
        this.musicaData.styles.transform = 'none';
        this.grabacionData.styles.transform = this.getIsActive(section) ? 'rotate(0deg)' : 'rotate(90deg)';
        this.ministerialData.styles.transform = 'none';
      };
      break;
      case 'ministerial': {
        this.mediosData.styles.transform = 'none';
        this.artesData.styles.transform = 'none';
        this.musicaData.styles.transform = 'none';
        this.grabacionData.styles.transform = 'none';
        this.ministerialData.styles.transform = this.getIsActive(section) ? 'rotate(0deg)' : 'rotate(90deg)';
      };
      break;
    }
  }

  openNosotrosPanel(item: string) {
    this.togglePanel(item);
  }

  togglePanel(item: string) {

    if (this.nosotrosPanelStyles.opacity === '0') {
      this.showNosotrosPanel = true;
      setTimeout(() => {
        this.nosotrosPanelStyles = {
          opacity: '1',
          transform: 'scale(1)'
        }
        this.switchNosotrosText(item);
      }, 50);
    } else {
      this.nosotrosPanelStyles = {
        opacity: '0',
        transform: 'scale(0.5)'
      }

      setTimeout(() => {
        this.showNosotrosPanel = false;
      }, 250);
    }
  }

  restartSections() {
    this.sectionsLeft.inicio = '-100vw';
    this.sectionsLeft.nosotros = '-110vw';
    this.sectionsLeft.formacion = '-100vw';
    this.sectionsLeft.staff = '-100vw';
    this.sectionsLeft.sedes = '-100vw';

    this.sectionsColor.nosotros = false;
    this.sectionsColor.formacion = false;
    this.sectionsColor.staff = false;
    this.sectionsColor.sedes = false;
  }

  setPanelText(section: string) {
    switch(section) {
      case 'medios': {
        this.setMediosText();
      };
      break;
      case 'artes': {
        this.setArtesText();
      };
      break;
      case 'musica': {
        this.setMusicaText();
      };
      break;
      case 'grabacion': {
        this.setGrabacionText();
      };
      break;
      case 'ministerial': {
        this.setMinisterialText();
      };
      break;
    }
  }

  switchNosotrosText(item: string) {
    switch(item) {
      case 'mision': {
        this.setMisionText();
      }
      break;
      case 'vision': {
        this.setVisionText();
      }
      break;
      case 'historia': {
        this.setHistoriaText();
      }
      break;
      case 'pilares': {
        this.setPilaresText();
      }
      break;
      default:
      this.nosotrosText = '';
      break;
    }
  }

  setMisionText() {
    this.nosotrosText = `
      <div class="panel-nosotros-container-mision">
        <div class="panel-nosotros-container-mision-title"><h2>MISIÓN</h2></div>
        <div class="panel-nosotros-container-mision-content"><h3>Formar adoradores.</h3></div>
      </div>
    `;
  }

  setVisionText() {
    this.nosotrosText = `
      <div class="panel-nosotros-container-vision">
        <div class="panel-nosotros-container-vision-title"><h2>VISIÓN</h2></div>
        <div class="panel-nosotros-container-vision-content">
          <h3 class="subtitle">Brindar los fundamentos bíblicos y técnicos sobre los cuales el alumno pueda:</h3>
          </br>
          <h3><span>.</span>Desarrollar una vida de adoración e intimidad con Dios</h3>
          <h3><span>.</span>Levantar el nombre de Jesús a través de las diferentes expresiones artísticas.</h3>
        </div>
      </div>
    `;
  }

  setHistoriaText() {
    this.nosotrosText = `
      <div class="panel-nosotros-container-historia">
        <div class="panel-nosotros-container-historia-title"><h2>HISTORIA</h2></div>
        <div class="panel-nosotros-container-historia-content">
          <p>
            El Instituto SuperArte nació del anhelo del corazón de Dios a través de los pastores Pedro y Gertrudis Ibarra.
            Como pastores principales de la Iglesia del Puente en Quilmes desde 1974, se han caracterizado por ser verdaderos
            adoradores de Dios en todas las áreas de sus vidas. Bajo el lema "FORMANDO ADORADORES",
            SuperArte se enfoca en el desarrollo y edificación de hijos de Dios que puedan levantar el nombre de Jesús a través de sus vidas.
            En un mundo en el que el arte es muchas veces mal utilizada, el fin central del Instituto es formar adoradores que edifiquen la iglesia
            e impacten todos los ámbitos a través de las diferentes expresiones artísticas.
          </p>
        </div>
      </div>
    `;
  }

  setPilaresText() {
    this.nosotrosText = `
      <div class="panel-nosotros-container-pilares">
        <div class="panel-nosotros-container-pilares-title"><h2>PILARES FORMATIVOS</h2></div>
        <div class="panel-nosotros-container-pilares-content">
          <h3><span>.</span>Tiempo devocional:</h3>
          <p>Tiempo de ministración y relación íntima con Dios a través de la adoración, la oración, y la reflexión bíblica.</p>
          <h3><span>.</span>Formación ministerial:</h3>
          <p>Con base en la Biblia, formamos a los alumnos en los fundamentos clave para desarrollar una vida y ministerio de adoración.</p>
          <h3><span>.</span>Formación técnica:</h3>
          <p>De acuerdo a la modalidad elegida, desde el Instituto creemos en la búsqueda de la superación y la excelencia y a ello debemos nuestro nombre.
          Es en esa dirección que entrenamos a nuestros alumnos para que se desarrollen de la mejor forma.</p>
        </div>
      </div>
    `;
  }

  setMediosText() {
    this.panelText = `
      <div class="panel-info-medios">
        <h2>1.</h2>
        <h3>
          Para potenciar tu formación técnica, estamos asociados con ORU (Oral Roberts University)
          y con Gospel Media cuyo director es Pablo Muñíz. ORU es una importante universidad de los Estados Unidos
          con una vasta trayectoria en la formación profesional de distintas disciplinas.
          En tu cursada, vas a disponer de un cuerpo docente liderado por Pablo y vas a tener acceso a la
          plataforma virtual de ORU para poder ver distintos cursos de Medios como parte del programa.
        </h3>
        <h2>2.</h2>
        <h3>
          Hay un programa técnico de 2 años diseñado especialmente para el instituto
          el cual consta de diferentes materias por cuatrimestre que abarcan diversos temas
          relacionados con Producción, Post-producción, Diseño, Social media, Radio y Fotografía entre otros.
        </h3>
      </div>
    `;
  }

  setArtesText() {
    this.panelText = `
      <div class="panel-info-artes">
        <h2>TÉMATICAS PRINCIPALES:</h2>
        <h4>La formación base del Instituto consta de 4 niveles cuatrimestrales.</h4>
        <h3>Grabado</h3>
        <h3>Pintura</h3>
        <h3>Escultura</h3>
        <span></span>
        <h4>Cada cuatrimestre corresponde a una temática. En el último cuatrimestre de cursada se realiza un proyecto integrador.</h4>
      </div>
    `;
  }

  setMusicaText() {
    this.panelText = `
      <div class="panel-info-musica">
        <h2>1.</h2>
        <h3>La formación base del Instituto consta de 4 niveles cuatrimestrales.</h3>
        <h2>2.</h2>
        <h3>Los instrumentos que se enseñan en el instituto son: Bajo, Bateria, Guitarra, Piano, Violin y Canto.</h3>
        <h2>3.</h2>
        <h3>Todos los instrumentos tienen en común la materia Teoria musical.</h3>
        <h2>4.</h2>
        <h3>Los alumnos de canto y batería de 2° nivel, deberán cursar un instrumento armónico.</h3>
        <h2>5.</h2>
        <h3>A partir del 3° cuatrimestre, todos los instrumentos tienen ensamble musical.</h3>
      </div>
    `;
  }

  setGrabacionText() {
    this.panelText = `
      <div class="panel-info-grabacion">
        <h2>GRABACIÓN DE AUDIO PRO</h2>
        <span>.</span> <h3>La formación base del Instituto consta de 4 niveles cuatrimestrales.</h3>
          </br>
        <span>.</span>
        <h3>
          Los alumnos trabajan a través de la plataforma CUBASE para grabar, mezclar, editar y producir audio análogo digital.
          El perfil del curso es Home Studio, es decir, está focalizado a grabar música desde tu casa con herramientas más que accesibles.
        </h3>
      </div>
    `;
  }

  setMinisterialText() {
    this.panelText = `
      <div class="panel-info-ministerial">
        <h3>
          La Formación ministerial se divide en 4 bloques.
          El bloque contiene 2 materias y dura 1 cuatrimestre.
        </h3>

        <h2>CUATRIMESTRE 1</h2>
          <span>.</span> <h3>Principios bíblicos de la adoración</h3>
          </br>
          <span>.</span> <h3>Principios de vida devocional</h3>
        <h2>CUATRIMESTRE 2</h2>
          <span>.</span> <h3>Liderazgo</h3>
          </br>
          <span>.</span> <h3>Carácter cristiano</h3>
        <h2>CUATRIMESTRE 3</h2>
          <span>.</span> <h3>Materia IBE 1 (rotativa)</h3>
          </br>
          <span>.</span> <h3>Materia IBE 2 (rotativa)</h3>
        <h2>CUATRIMESTRE 4</h2>
          <span>.</span> <h3>Materia IBE 3 (rotativa)</h3>
      </div>
    `;
  }

  navigate(section: string) {

    switch(section) {
      case 'wp': {
        window.open('https://api.whatsapp.com/send?phone=5491122728456');
      }
      break;
      case 'fb': {
        window.open('https://www.facebook.com/ISAformandoadoradores');
      }
      break;
      case 'ig': {
        window.open('https://www.instagram.com/institutosuperarte/');
      }
      break;
      case 'tw': {
        window.open('https://twitter.com/_SuperArte');
      }
      break;
      case 'yt': {
        window.open('https://www.youtube.com/c/InstitutoSuperArte');
      }
      break;
    }
  }
}
