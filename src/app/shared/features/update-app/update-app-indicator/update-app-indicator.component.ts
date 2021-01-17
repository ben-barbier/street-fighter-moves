import { Component } from '@angular/core';
import { PromptUpdateService } from '../prompt-update.service';

@Component({
    selector: 'app-update-app-indicator',
    templateUrl: './update-app-indicator.component.html',
    styleUrls: ['./update-app-indicator.component.scss'],
})
export class UpdateAppIndicatorComponent {
    constructor(public update: PromptUpdateService) {}
}
