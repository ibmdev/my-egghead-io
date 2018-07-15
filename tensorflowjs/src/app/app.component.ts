import { Component, OnInit } from '@angular/core';

import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'tf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TensorFlow JS';
  linearModel: tf.Sequential;
  prediction: any;

  async ngOnInit() {
    console.log('call method ngOnInit before');
    await this.trainNewModel();
    console.log('call method ngOnInit after');
  }

  async trainNewModel() {
    console.log('call method trainNewModel before');
    await this.delay(2000);
    console.log('call method trainNewModel after');
  }

  delay(time: number) {
    return new Promise((resolve) => {setTimeout(resolve, time ); });
  }
}
