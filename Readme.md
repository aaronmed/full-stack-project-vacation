<br />
<p align="center">
  
  <a align="center" href="https://github.com/aaronmed/full-stack-project-vacation">
    <img src="images/logo.png" alt="Logo" width="100" height="75">
  </a>
  <h3 align="center">Vacational Rental</h3>

  <p align="center">
    A simple application about Vacational Rental
    <br />
    <a href="https://github.com/aaronmed/full-stack-project-vacation"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/aaronmed/full-stack-project-vacation">View Demo</a>
    ·
    <a href="https://github.com/aaronmed/full-stack-project-vacation/issues">Report Bug</a>
    ·
    <a href="https://github.com/aaronmed/full-stack-project-vacation/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#entity-relationship-diagram">Entity Relationship Diagram</a></li>
        <li><a href="#use-case-diagram">Use Case Diagram</a></li>
        <li><a href="#mockup">Mockup</a></li>
        <li><a href="#usability">Usability</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#planning">Planning</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
A simple application in which users will be able to view advertisements for holiday rental. Registered users can book advertisements and publish reviews about them.

#### Entity-Relationship Diagram
<p align="center">
    <img src="images/er.png" alt="Entity-Relationship Diagram">
  </p>

  * **Entities**
    - User whose primary key is an ID, name, surname, DNI, contact phone, username and password.
    - Advert that has as primary key an identifying id, a basic description about the ad, the address of the ad, the price per night to rent it, the number of: rooms, guests allowed, beds and bathrooms.
    - Reviews that have as a primary key an identifying id, a description of the review and some stars as a numerical evaluation.

  * **Relatioships**
    - The publish relationship is about when a user publishes a certain advertisement on a certain date
    - The book relationship is about when a user books a certain ad by choosing a start date and an end date
    - The make relationship is about when a user makes a criticism about a certain ad on a certain date

#### Use case Diagram
  <p align="center">
    <img src="images/usecase.png" alt="Use Case Diagram">
  </p>

#### User Requirements
* Platform
  - Mobile application

* Users will be able to search for ads to book by indicating the location where they want to stay, the dates they want and the number of guests that will be

* In order to make a book, the user must be registered

* Once you are registered and logged in, you can both book ads and create your own

*  Registered users will be able to leave a review of the ads they have booked

#### Mockup
<p align="center">
<img src="images/mockup1.png" alt="Mockup1">
 </p>

*Screen 1:* First screen as soon as we enter the application in which we find a small form to be able to make searches of announcements

<p align="center">
<img src="images/mockup2.png" alt="Mockup2">
</p>

 *Screen 2:* The menu that appears when we are not logged in to the application that simply allows us to search and log in

<p align="center">
<img src="images/mockup3.png" alt="Mockup3">
</p>

 *Screen 3:* The menu that appears when we are logged in to the application that allows us to go to the search, see our ads, view our reservations and log out

<p align="center">
<img src="images/mockup4.png" alt="Mockup4">
</p>

*Screen 4:* Menu to login where we will have to give our user name and password, if we do not have an account, we have the button to register

<p align="center">
<img src="images/mockup5.png" alt="Mockup5">
</p>

*Screen 5:* When you do a search, this would be the screen where the entire list of ads meeting the search criteria would be displayed

<p align="center">
<img src="images/mockup6.png" alt="Mockup6">
</p>

*Screen 6:* This is the window that shows the details of the ads. We can see all the attributes of the ads, such as the beds, guests, rooms, etc. We also see the reviews that this ad has and an average of them. There is also a button to book the ad if you wish.

<p align="center">
<img src="images/mockup7.png" alt="Mockup7">
</p>

*Screen 7:* In this window we can see the reservations associated to our user once we are logged in, it only allows us to cancel the booking.

<p align="center">
<img src="images/mockup8.png" alt="Mockup8">
</p>

*Screen 8:* In this window you can see your own advertisements created once the user is logged in, you have the option to edit or delete each of the advertisements. Then you have the option to create a new advertisement in the button below the advertisement list.

#### Usability
1. **The user must be able to customize the interface:** there is a toggle to select the theme we want between: light and dark
<p align="center">
<img src="images/usability1.png" alt="Usability1">
<img src="images/usability2.png" alt="Usability2">
</p>

2. **Colour:** only two colours are used throughout the application interface, a light green and either black or white depending on the theme chosen

<p align="center">
<img src="images/usability3.png" alt="Usability3">
<img src="images/usability4.png" alt="Usability4">
</p>

3. **Text writing in the interface:** there is little text in most of the application, especially when we have large lists, either of advertisements or books, we simply display the most necessary data to identify
<p align="center">
<img src="images/usability5.png" alt="Usability5">
</p>

4. **Legibility:** each piece of information given to the user is clearly identified, either within the advertisements specifying the numbers of guests, bathrooms, etc. or in the reservations, specifying the start and arrival dates
<p align="center">
<img src="images/usability6.png" alt="Usability6">
</p>


5. **Icons:** we can see the use of delete and update icons in the section of my bookings, as well as using the icon of a star to make clear the rating given to each of the ads
<p align="center">
<img src="images/usability7.png" alt="Usability7">
</p>


6. **Simplicity of the design:** the interface is simple, the information given at all times is the necessary one, the user is not overloaded with information


7. **Error recovery:** when you get the wrong credentials when logging in, you are informed

<p align="center">
<img src="images/usability8.png" alt="Usability8">
</p>

8. **Feedback:** when the user makes a search and the search does not meet any of the requirements he is informed that there are no results for his search

<p align="center">
<img src="images/usability9.png" alt="Usability9">
</p>

9. **Feedback:** when the user goes to review their reservations or announcements, they inform you when they do not have

<p align="center">
<img src="images/usability10.png" alt="Usability10">
<img src="images/usability11.png" alt="Usability11">
</p>

10. **The user is indicated each time a value changes**, for example, when a book is made, when an advertisement is deleted, when a new advertisement is added, etc
<p align="center">
<img src="images/usability12.png" alt="Usability12">
<img src="images/usability13.png" alt="Usability13">
<img src="images/usability14.png" alt="Usability14">
</p>


11. **The font**: is constant throughout the application always the same and using the bold and the size of the interface to highlight some information, especially in the lists of announcements, books, etc

<p align="center">
<img src="images/usability15.png" alt="Usability14">
</p>

### Built With

  * [Spring](https://spring.io/)
    
    Spring is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE (Enterprise Edition) platform. Although the framework does not impose any specific programming model, it has become popular in the Java community as an addition to the Enterprise JavaBeans (EJB) model. The Spring Framework is open source.

  * [MySql](https://www.mysql.com)

    MySql is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE (Enterprise Edition) platform. Although the framework does not impose any specific programming model, it has become popular in the Java community as an addition to the Enterprise JavaBeans (EJB) model. 

  * [GraphQL](https://graphql.org/)

    GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. It provides an approach to developing web APIs and has been compared and contrasted with REST and other web service architectures. It allows clients to define the structure of the data required, and the same structure of the data is returned from the server, therefore preventing excessively large amounts of data from being returned, but this has implications for how effective web caching of query results can be. 

  * [Ionic](https://ionicframework.com/)

    Ionic is a complete open-source SDK for hybrid mobile app development.
    Provides tools and services for developing hybrid mobile, desktop, and Progressive Web Apps based on modern web development technologies and practices, using Web technologies like CSS, HTML5, and Sass. In particular, mobile apps can be built with these Web technologies and then distributed through native app stores to be installed on devices by utilizing Cordova or Capacitor.

#### Postman

Here we can find the Postman [documentation](https://documenter.getpostman.com/view/13041013/TVspjUS3)

## Technology comparison
<img src="images/comparative.png" alt="Comparative">

<!-- GETTING STARTED -->
## Getting Started


### Installation

You can found [here](https://github.com/aaronmed/full-stack-project-vacation/wiki) the installation manual

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/aaronmed/full-stack-project-vacation/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Planning

You can see my [planning](https://github.com/aaronmed/full-stack-project-vacation/projects/1) that I have done in the github repository itself

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Aarón - aaronmedmel@gmail.com

Project Link: [https://github.com/aaronmed/full-stack-project-vacation](https://github.com/aaronmed/full-stack-project-vacation)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Tiburcio Cruz](https://github.com/tcrurav) 
* [README Template othneildrew](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)


