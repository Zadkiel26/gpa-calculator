/**
 * Title: gpa.component.ts
 * Author: Zadkiel Rodriguez Alvarado
 * Date: 4/28/2024
 * Description: GPA component
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
