import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  title: string;
  content: Content;

  constructor() { }

  ngOnInit() {
    this.title = 'Threefold dashboard';

    this.content = {
      firstText: 'Lorem ipsum dolor sit amet, zril dicant mollis sed in, nibh laoreet repudiare at sed. ' +
      'Cu eum laudem nostrum voluptatum, exerci soleat platonem ne cum. Dicta iudico admodum ex ius. ' +
      'His te ferri facer pericula, pro an saepe tempor, usu liber sententiae ad. ' +
      'Te sed putent delectus definitionem, sit ceteros forensibus ea.',

      secondText: 'Qui te purto utamur, ex his tale accumsan expetendis, illud imperdiet dissentias ex vix. Sit timeam latine apeirian et. ' +
      'Sed quodsi reprehendunt cu, eu est vocibus corrumpit vituperata, sea nobis dicunt te. Esse ludus eu mei, in tritani ' +
      'oblique vix, ut quo omnes nusquam. Ei pro similique omittantur. Consetetur dissentias no qui.',

      listHead: 'Lorem ipsum dolor sit amet:',

      listItem: ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet'],

      thridText: 'Quo cu suscipit sensibus, his graecis principes voluptatibus no, nam agam detracto constituto an. ' +
      'In tacimates conceptam forensibus sit, eos et iudicabit ullamcorper. Antiopam platonem in mei, id ' +
      'clita cetero nec, in euismod accusata honestatis eum. Sed quas numquam imperdiet ut.',

      forthText: 'Regione hendrerit eos id, ne eum iuvaret hendrerit, posse electram dissentiunt vim eu. ' +
      'His elit pericula at. Vide rebum lucilius ne sea, veri instructior cu pri. Ad debet qualisque ' +
      'complectitur eos, legimus maluisset tincidunt nec ea. Decore numquam nusquam pri te, fierent eloquentiam mei ad.'
    }
  }


}

interface Content {
    firstText: string,
    secondText: string,
    listHead: string,
    listItem: string[],
    thridText: string,
    forthText: string
}