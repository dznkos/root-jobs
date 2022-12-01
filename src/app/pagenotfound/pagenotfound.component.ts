import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

interface Posts {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  listPosts?: Posts[]

  constructor(private postService: PostService) {

    this.postService.obtenerPosts()
    .subscribe( resp => {
      this.listPosts = resp as Posts[]
      console.log(resp)
    })
  }

  ngOnInit(): void {
  }

}
