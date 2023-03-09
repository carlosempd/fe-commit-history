import { Injectable } from '@angular/core';
import { Commit } from '../models/commit.model';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  constructor() { }

  getCommits(): Commit[] {
    return [
      {
          "sha": "c04e209b3796232ed113c34e21c73e42fee88974",
          "message": "update controller with service and add types",
          "date": "2023-03-08T15:22:21Z",
          "author": {
              "login": "carlosempd",
              "name": "Carlos",
              "email": "carlosempd@gmail.com",
              "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
          }
      },
      {
          "sha": "8510e9d06a97ddce19ba3ae9dde93a4f95860bd0",
          "message": "create model for commit object",
          "date": "2023-03-08T15:22:01Z",
          "author": {
              "login": "carlosempd",
              "name": "Carlos",
              "email": "carlosempd@gmail.com",
              "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
          }
      },
      {
          "sha": "a6e9d6332d33f3f07cbf29df0816c4e82f338d7a",
          "message": "implement commits service and connect with github api to retrieve the commits list",
          "date": "2023-03-08T15:21:51Z",
          "author": {
              "login": "carlosempd",
              "name": "Carlos",
              "email": "carlosempd@gmail.com",
              "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
          }
      },
      {
          "sha": "6742c10006a811a4032aae2d5f90801761b1ea16",
          "message": "Create commits controlles and connect with github api",
          "date": "2023-03-08T14:57:19Z",
          "author": {
              "login": "carlosempd",
              "name": "Carlos",
              "email": "carlosempd@gmail.com",
              "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
          }
      },
      {
          "sha": "cf053c231f7405a7082ac06bf0d726969fec4548",
          "message": "configure app module with commits module",
          "date": "2023-03-08T14:56:54Z",
          "author": {
              "login": "carlosempd",
              "name": "Carlos",
              "email": "carlosempd@gmail.com",
              "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
          }
      },
      {
          "sha": "b6b3b170844b6d51f4abf282ad9c18a77bbdc79b",
          "message": "create commits module",
          "date": "2023-03-08T14:56:41Z",
          "author": {
              "login": "carlosempd",
              "name": "Carlos",
              "email": "carlosempd@gmail.com",
              "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
          }
      },
      {
          "sha": "212b5939c3a90a15f9945641d791dc1b928b94c5",
          "message": "create commits service",
          "date": "2023-03-08T14:56:28Z",
          "author": {
              "login": "carlosempd",
              "name": "Carlos",
              "email": "carlosempd@gmail.com",
              "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
          }
      },
      {
          "sha": "712cc0ea46e1e9fc06de0472424a53d4103275f8",
          "message": "install octokit. Remove unused dependencies",
          "date": "2023-03-08T14:56:12Z",
          "author": {
              "login": "carlosempd",
              "name": "Carlos",
              "email": "carlosempd@gmail.com",
              "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
          }
      },
      {
          "sha": "74e444c4937aa6afb2284b3a06b609e73bb1b908",
          "message": "delete prettier and eslint files",
          "date": "2023-03-08T14:55:44Z",
          "author": {
              "login": "carlosempd",
              "name": "Carlos",
              "email": "carlosempd@gmail.com",
              "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
          }
      },
      {
          "sha": "e3d1d49a6437cfca588b4e48ca97e41f3b28f44f",
          "message": "First commit",
          "date": "2023-03-08T03:09:57Z",
          "author": {
              "login": "carlosempd",
              "name": "Carlos",
              "email": "carlosempd@gmail.com",
              "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
          }
      }
  ]
  }
}
