import { Component, OnInit} from '@angular/core';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { ViewChild } from '@angular/core';
import { ConfigService } from './config.service';
import { Subscriber, Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

  
  constructor() { }

}
