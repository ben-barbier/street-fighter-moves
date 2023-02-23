import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from '@jest/globals';
import { TranslateModule } from '@ngx-translate/core';
import { GithubButtonModule } from 'ng-github-button';
import { PromptUpdateService } from '../features/update-app/prompt-update.service';
import { UpdateAppIndicatorComponent } from '../features/update-app/update-app-indicator/update-app-indicator.component';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                NavComponent,
                UpdateAppIndicatorComponent,
                NoopAnimationsModule,
                FormsModule,
                GithubButtonModule,
                HttpClientModule,
                LayoutModule,
                MatButtonModule,
                MatDialogModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatMenuModule,
                MatSidenavModule,
                MatToolbarModule,
                RouterTestingModule,
                TranslateModule.forRoot(),
            ],
            providers: [{ provide: PromptUpdateService, useValue: { promptUpdateDilog: jest.fn() } }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should compile', () => {
        expect(component).toBeDefined();
    });
});
