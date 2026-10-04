import {ChangeDetectorRef, Component, HostListener, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import projectsData from "../../shared/contants/proyectos.json";
import {Project} from "../../shared/contants/project.constants";
import {TECHNOLOGY_MAP} from "../../shared/contants/tag.constants";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-proyectos',
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit, OnDestroy {
    showImage: boolean = false;
    selectedImage: number = -1;
    zoomScale: number = 1;
    indexProject!: number;
    urlSubscription!: Subscription;


    projectsList: Project[] = projectsData as Project[];
    project: Project | null = null;
    techMapIcon = TECHNOLOGY_MAP;


    images = [
        'https://picsum.photos/4096/2160 ',
        'https://picsum.photos/2048/1080',
        'https://picsum.photos/1900/1080',
        'https://picsum.photos/500/500',
        'https://picsum.photos/200/700',
        'https://picsum.photos/200/300',
    ]



    private router = inject(Router);
    private activatedRoute = inject(ActivatedRoute);
    private cdr = inject(ChangeDetectorRef);


    //--------------------------------------------------------

    constructor() {

    }


    ngOnInit(): void {
        this.urlSubscription = this.activatedRoute.params.subscribe((params) => {
            const nuevoIndex = Number(params['indexProject']);

            if (nuevoIndex > 0 && nuevoIndex < this.projectsList.length) {
                this.indexProject = nuevoIndex;
                this.project = this.projectsList[this.indexProject - 1];
                this.cdr.detectChanges();
            } else {
                console.log('El índice del proyecto no es válido:', nuevoIndex);
                // this.router.navigate(['/']);
            }
        });
    }




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



    //--------------------------------------------------------
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



    //--------------------------------------------------------
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



    //--------------------------------------------------------
    previousProject() {
        if (this.indexProject > 1){
            this.router.navigate(['/proyectos', this.indexProject - 1]);
        }
    }

    nextProject() {
        if (this.indexProject < this.projectsList.length - 1){
            this.router.navigate(['/proyectos', Number(this.indexProject) + 1]);
        }
    }




    //--------------------------------------------------------
    ngOnDestroy(): void {
        document.documentElement.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll');
        this.urlSubscription.unsubscribe();
    }
}
