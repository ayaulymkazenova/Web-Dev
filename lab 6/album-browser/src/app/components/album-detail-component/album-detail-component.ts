import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail-component.html',
  styleUrls: ['./album-detail-component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  editing = false;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAlbum(id);
  }

  loadAlbum(id: number): void {
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching album:', error);
        this.loading = false;
      }
    });
  }

  startEditing(): void {
    this.editing = true;
  }

  saveTitle(): void {
    if (!this.album) return;

    const updatedAlbum = { ...this.album, title: this.editedTitle };
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (data) => {
        this.album = data;
        this.editing = false;
        alert('Album title updated successfully!');
      },
      error: (error) => {
        console.error('Error updating album:', error);
        alert('Failed to update album. Please try again.');
      }
    });
  }

  cancelEdit(): void {
    if (this.album) {
      this.editedTitle = this.album.title;
    }
    this.editing = false;
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  viewPhotos(): void {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
}