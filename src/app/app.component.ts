import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxFileManagerModule, DxPopupModule } from 'devextreme-angular';
import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';


@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
})
export class AppComponent {
  remoteProvider: RemoteFileSystemProvider;

  imageItemToDisplay: any = {};

  popupVisible = false;

  constructor() {
    this.remoteProvider = new RemoteFileSystemProvider({
      endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-images',
    });
  }

  displayImagePopup(e) {
    this.imageItemToDisplay = e.file;
    this.popupVisible = true;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxFileManagerModule,
    DxPopupModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
