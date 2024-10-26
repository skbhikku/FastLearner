import React from 'react'
import homecss from '../Styles/homecss.css';
function About() {
    return (
        <>  


<footer class="bg-body-tertiary text-center text-lg-start">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Book Store: A Sample E-commerce Website</h5>
            <p>Welcome to Boot Store, a sample e-commerce website designed to provide users with an intuitive platform to search for and browse books. This project showcases my skills in front-end development using modern web technologies.</p>
            <h5 className="text-uppercase">Technologies Used</h5>
            <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>API (Google Books API)</li>
            </ul>
      </div>
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Features</h5>
            <ul>
                <li>Home Page: A welcoming interface that introduces users to the Boot Store.</li>
                <li>Books Page: A comprehensive list of books that users can search for and view details.</li>
                <li>Responsive Design: Optimized for both desktop and mobile views.</li>
                <li>Search Functionality: Users can search for specific books using a search bar.</li>
            </ul>
            <h5 class="text-uppercase">Conclusion</h5>
            <p>Boot Store serves as a demonstration of my ability to create functional and user-friendly web applications. I am continually looking to improve and expand my skills in web development.</p>
      </div>
      {/* <!--Grid column--> */}
    </div>
    {/* <!--Grid row--> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
  You can also do it like this. The project code is available :    <a className="text-green a " href="https://github.com/skbhikku/FastLearner" target='_blanck'>GitHub</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
            <footer class="bg-primary text-white text-center text-lg-start">
                {/* <!-- Grid container --> */}
                <div class="container p-4">
                    {/* <!--Grid row--> */}
                    <div class="row">
                        {/* <!--Grid column--> */}
                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Fast Learner</h5>

                            <p>
                            Your Ultimate Destination for Famous and Learning Books. Dive into a diverse collection of popular books across genres, from bestsellers to must-read classics. Whether you're looking to expand your knowledge, develop new skills, or simply enjoy a great read, Fast Learner has something for everyone. Explore our curated learning resources, stay inspired, and embark on a journey of continuous growth and discovery. Happy reading and learning!

                            </p>
                        </div>
                        {/* <!--Grid column-->

                        <!--Grid column--> */}
                        
                        {/* <!--Grid column-->

                        <!--Grid column--> */}
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase mb-0">Links</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="https://github.com/skbhikku/FastLearner" target='_blanck' class="text-white">GitHub</a>
                                </li>
                                <li>
                                    <a href="https://facebook.com" target='_blanck' class="text-white">Face Book</a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" target='_blanck' class="text-white">Instagram</a>
                                </li>
                                
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}
                    </div>
                    {/* <!--Grid row--> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                
                {/* <!-- Copyright --> */}
            </footer>

        </>
    )
}
export default About;
