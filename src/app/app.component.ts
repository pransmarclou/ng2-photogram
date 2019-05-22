import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-photogram';

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyCcjHd0Nn3Myjx6E_8mMw45tvBGljy8HpE",
      authDomain: "photogram-ng2.firebaseapp.com",
      databaseURL: "https://photogram-ng2.firebaseio.com",
      projectId: "photogram-ng2",
      storageBucket: "photogram-ng2.appspot.com",
      messagingSenderId: "386541177145",
      appId: "1:386541177145:web:082f887c4c8cd755"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
