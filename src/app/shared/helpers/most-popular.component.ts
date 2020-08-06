import { OnInit, Component, Input } from '@angular/core';
import { YoutubeService } from '../services';
import { Video } from '../models';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html'
})
export class MostPopularComponent implements OnInit {

  @Input() limit: Number;

  items: Video[];
  loading: Boolean = false;

  constructor(
    private youtubeService: YoutubeService
  ) { }

  ngOnInit(): void {

    this.loading = true;
    this.items = [];
    this.youtubeService.popularMusics(this.limit).subscribe((data) => {
      this.items = data.items;
      this.loading = false;
    });

  }

}
