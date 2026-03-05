import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos-component.html',
  styleUrls: ['./album-photos-component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  loading = true;
  albumId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching photos:', error);
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}