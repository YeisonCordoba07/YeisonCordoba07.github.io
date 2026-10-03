import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit, OnDestroy {
    showImage: boolean = false;
    selectedImage: number  = -1;
    zoomScale: number = 1;

    images = [
        'https://picsum.photos/1200/700',
        'https://picsum.photos/1200/800',
        'https://picsum.photos/500/500',
        'https://picsum.photos/200/700',
        'https://picsum.photos/1900/1080',
        'https://picsum.photos/200/300',
    ]

  constructor() { }

  ngOnInit(): void {

      //window.scrollTo(0, 0);
  }

    openVisor(index: number ) {
        this.showImage = true;
        this.selectedImage = index;

        document.body.classList.add('no-scroll');

    }
    closeVisor(){
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

        const zoomStep = 0.1;
        if ($event.deltaY < 0) {
            if (this.zoomScale < 3) {
                this.zoomScale += zoomStep;
            }
        } else {
            if (this.zoomScale > 0.5) {
                this.zoomScale -= zoomStep;
            }
        }
    }

    resetZoom() {
        this.zoomScale = 1;
    }
}
