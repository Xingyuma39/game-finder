# Game Finder

##### Created by Xing Yu (Jason) Ma

## :rocket: Description

Game finder is a must-have app for game enthusiasts to find and leave reviews for their favourite games.

## :link: Links

<details>
  <summary>Deployed Heroku Link</summary>
  <a href="https://game-finder1-49fa7b460902.herokuapp.com/">Click here!</a>
</details>

## :pencil: Wireframes

<details>
  <summary>Wireframes</summary>
  <p align="center"><img src="https://media.git.generalassemb.ly/user/51683/files/a1834c06-4e1e-4fcf-bdb7-fd0635cc8e07" width="800"></p>
  <p align="center"><img src="https://media.git.generalassemb.ly/user/51683/files/20b317ed-f7ed-4a65-b3fa-cb4f8f2587aa" width="800"></p>
  <p align="center"><img src="https://media.git.generalassemb.ly/user/51683/files/56179952-5cf5-4ec6-9c98-93cb2e80f570" width="800"></p>
</details>

## :art: Screenshots

<details>
  <summary>Screenshots</summary>
  <p align="center"><img src="https://github.com/Xingyuma39/game-finder/assets/152853230/7a967fed-0406-41c1-8587-dcc07593b602" width="800"></p>
  <p align="center"><img src="https://github.com/Xingyuma39/game-finder/assets/152853230/87f7388d-fb5f-48b0-8da2-9982be875566" width="800"></p>
  <p align="center"><img src="https://github.com/Xingyuma39/game-finder/assets/152853230/2c462374-f267-462d-aa51-de265c49d20d" width="800"></p>
</details>


## :robot: List of the technologies used
Mongoose
![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)


## :100: User Stories
- [ ] AAU, I want to find games that I'm interested in.
- [ ] AAU, I want to keep track of all the games that I'm interested in (in my wishlist), so that I can organize and prioritize which games to get first.
- [ ] AAU, I want to keep track of all the games that I've already played.
- [ ] AAU, I want to see details of all games, such as prices and where to buy them from.


## :heart_eyes_cat: Installation Instructions

No installation required, create an account to start leaving reviews!


## Route Table
Route table that will define and describe what each route in our application is doing. 

|       **URL**     | **REST Route**    | **HTTP Verb** | **CRUD Action** |   **React Routes**  |  **Models**  |
| ----------------- | ----------------- | ------------- | --------------- | ------------------- | ------------ |
| /                 |                   |               |                 | HomePage            |              |
| /about            |                   |               |                 | AboutPage           |              |
| /details/:id      |                   |               |                 | DetailsPage         |              |
| /auth/:formType   |                   |               |                 | AuthFormPage        |              |
| /*                |                   |               |                 | NotFoundPage        |              |
| /comments/        | create            | POST          | create          |                     | comment.js   |
| /comments/:gameId | find              | GET           | read            |                     | comment.js   |
| /comments/:id     | findByIdAndUpdate | PUT           | update          |                     | comment.js   |
| /comments/:id     | findByIdAndDelete | DELETE        | delete          |                     | comment.js   |
| /users/signup     | create            | POST          | create          |                     | user.js      |
| /users/login      | findOne           | POST          | read            |                     | user.js      |

## ERD
![image](https://github.com/Xingyuma39/game-finder/assets/152853230/ceaa62f1-929e-49ab-90c5-5f9e29573fbb)

        
## :triangular_flag_on_post: Hurdles
- [ ] The API was difficult to implement at first due to the complex structure, however it was really helpful with certain features such as pagination.
- [ ] I spent perhaps too much time on styling, particularly tailwind CSS.

## :dart: Next Steps
- [ ] Search filter for games, including genres/newest/ratings
- [ ] Themes/Dark Mode
- [ ] User wishlists
- [ ] Game Recommendations based on wishlisted games
- [ ] Embedded Google Maps to show where to find stores that sell games
