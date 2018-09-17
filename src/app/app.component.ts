import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpeakService } from './speakService/speak.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    enableSpeechButton: boolean;

    constructor(private speechRecognitionService: SpeakService, private router: Router) {
        this.enableSpeechButton = true;
    }

    ngOnInit() { }

    ngOnDestroy() {
        this.speechRecognitionService.DestroySpeechObject();
    }

    speechBasedNavigation(): void {
        this.enableSpeechButton = false;
        this.speechRecognitionService.record()
            .subscribe(
            // listener
            (value) => {
                this.router.navigateByUrl(value);
            },
            // error
            (err) => {
                console.log(err);
                if (err.error === 'no-speech') {
                    this.speechBasedNavigation();
                }
            },
            // completion
            () => {
                this.enableSpeechButton = true;
                // this.speechBasedNavigation();
            });
    }

    disableSpeechBasedNavigation() {
        this.enableSpeechButton = true;
        this.speechRecognitionService.DestroySpeechObject();
    }

  }
