import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})

export class TestComponent {
    name = "Ajay Manikanta";
    work= "Designer/ Thinker/ Coder";
    like = 0;

    pageLiked() {
        this.like = this.like + 1;
    }
}