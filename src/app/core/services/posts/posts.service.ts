import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../environment/Base_Url';
import { IPost } from '../../interfaces/posts/ipost';
import { IAllPost } from '../../interfaces/posts/iallposts';
import { IPostById } from '../../interfaces/posts/ipost-by-id';


@Injectable({
  providedIn: 'root'
})

export class PostsService {
  endPoint = `posts`

  constructor(private readonly _httpClient:HttpClient) { }

  createPost(postData:FormData){
    this._httpClient.post<IPost>(`${baseUrl}${this.endPoint}`,postData)
  }
  getAllPosts(){
    this._httpClient.get<IAllPost>(`${baseUrl}${this.endPoint}`)
  }
  getPostById(postId:string){
    this._httpClient.get<IPostById>(`${baseUrl}${this.endPoint}/${postId}`)
  }
}
