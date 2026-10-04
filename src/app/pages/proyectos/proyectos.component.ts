import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit, OnDestroy {
    showImage: boolean = false;
    selectedImage: number = -1;
    zoomScale: number = 1;
    indexProject: string | null = null;


    private route = inject(ActivatedRoute);

    images = [
        'https://picsum.photos/4096/2160 ',
        'https://picsum.photos/2048/1080',
        'https://picsum.photos/1900/1080',
        'https://picsum.photos/500/500',
        'https://picsum.photos/200/700',
        'https://picsum.photos/200/300',
    ]


    @HostListener('window:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (!this.showImage) {
            return;
        }

        switch (event.key) {
            case 'Escape':
                this.closeVisor();
                break;
            case 'ArrowRight':
                this.nextImage();
                break;
            case 'ArrowLeft':
                this.previousImage();
                break;
        }
    }


    constructor() {
        this.indexProject = this.route.snapshot.paramMap.get('indexProject');
    }

    ngOnInit(): void {

        //window.scrollTo(0, 0);
    }

    openVisor(index: number) {
        this.showImage = true;
        this.selectedImage = index;
        this.resetZoom();
        document.body.classList.add('no-scroll');

    }
    closeVisor() {
        this.showImage = false;
        this.selectedImage = -1;
        this.resetZoom();
        document.body.classList.remove('no-scroll');
    }


    previousImage() {
        if (this.selectedImage !== -1) {
            this.selectedImage = (this.selectedImage - 1 + this.images.length) % this.images.length;
            this.resetZoom();
        }
    }

    nextImage() {
        if (this.selectedImage !== -1) {
            this.selectedImage = (this.selectedImage + 1) % this.images.length;
            this.resetZoom();
        }
    }

    ngOnDestroy(): void {
        document.documentElement.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll');
    }

    onZoomScroll($event: WheelEvent) {
        $event.preventDefault();

        const zoomStep = 0.2;
        if ($event.deltaY < 0) {
            if (this.zoomScale < 5) {
                this.zoomScale += zoomStep;
            }
        } else {
            if (this.zoomScale > 0.5) {
                this.zoomScale -= zoomStep;
            }
        }
    }

    zoomIn() {
        if (this.zoomScale < 5) {
            this.zoomScale += 0.25;
        }
    }

    zoomOut() {
        if (this.zoomScale > 0.5) {
            this.zoomScale -= 0.25;
        }
    }

    resetZoom() {
        this.zoomScale = 1;
    }




    previousProject() {

    }

    nextPrevious() {

    }
}
