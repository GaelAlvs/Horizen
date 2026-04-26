import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from '../../features/components/toast/toast';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Footer, ToastComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
