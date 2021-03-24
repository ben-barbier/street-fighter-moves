import { Component } from '@angular/core';
import { slideInLeftOnEnterAnimation } from 'angular-animations';
import { motions } from 'src/assets/motions/motions';
import { Move } from '../../data';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-moves-editor-page',
    templateUrl: './moves-editor-page.component.html',
    styleUrls: ['./moves-editor-page.component.scss'],
    animations: [slideInLeftOnEnterAnimation({ anchor: 'enter', duration: 600 })],
})
export class MovesEditorPageComponent {
    public addMoveForm: FormGroup;
    public motions = motions;
    public moves: Move[] = [];
    public currentMove: Move = { name: '', originalName: '', motions: [] };

    // TODO: formbuilder
    constructor() {
        this.addMoveForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            originalName: new FormControl(''),
        });
    }

    addMotionToMove(motion: string): void {
        this.currentMove.motions = this.currentMove.motions?.concat(motion.split('.')[0]);
    }

    addMove(): void {
        // 💡 : force properties order
        this.moves = this.moves.concat({
            name: this.currentMove.name,
            originalName: this.currentMove.originalName,
            motions: this.currentMove.motions,
        });
        this.resetForm();
    }

    removeLastMotionOfMove(): void {
        this.currentMove.motions = this.currentMove.motions?.slice(0, this.currentMove.motions?.length - 1);
    }

    private resetForm(): void {
        this.currentMove = { name: '', originalName: '', motions: [] };
        this.addMoveForm.reset({ name: '', originalName: '' });
    }
}
