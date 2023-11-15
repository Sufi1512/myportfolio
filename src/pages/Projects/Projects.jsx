import React from 'react'
import "./Projects.css"
import ReccomentImage from "../../components/resources/Images/recommnend.jpg"
import Leaf from "../../components/resources/Images/leaf.jpeg"
import chahca from "../../components/resources/Images/chacha.jpg"

const Projects = () => {
  return (
      <>
          <div className="container project">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top Recent Projects</h2>
          <hr />
  
          <p className="col-12 mt-3 mb-1 text-center">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis velit quibusdam iure consectetur blanditiis maiores, id iste reiciendis totam incidunt nobis ut dolorem alias itaque harum cupiditate aut optio quisquam nemo, dolor unde perspiciatis recusandae quos. Aspernatur corporis non libero illo itaque voluptas perferendis nam delectus, amet assumenda, officia labore.
              </p>
              {/* card design */}
              <div className="row" id="ads">
                  <div className="col-md-4">
                      <div className="card rounded">
                          <div className="card-image">
                              <span className="card-notify-badge">
                              WebDev & ML
                              </span>
                              <img src={ReccomentImage} alt="project" />

                          </div>
                          <div className="class-image-overly m-auto mt-3">
                              <span className="card-detail-badge">HTML</span>
                              <span className="card-detail-badge">CSS</span>
                              <span className="card-detail-badge">JavaScript</span>
                              <span className="card-detail-badge">Machine Learning</span>
                          </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className='text-uppercase'>Movie Recommendation + sentiment Analysis System</h5>
                              </div>
                              <a className="ad-btn" href="https://github.com/Sufi1512/completeMovieRecommendationSystem"> View</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="card rounded">
                          <div className="card-image">
                              <span className="card-notify-badge">
                                  Al & ML
                              </span>
                              <img src={ chahca} alt="project" />

                          </div>
                          <div className="class-image-overly m-auto mt-3">
                              <span className="card-detail-badge">Flutter</span>
                              <span className="card-detail-badge">ChatGPT</span>
                              <span className="card-detail-badge">Dall E</span>
                              
                          </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className='text-uppercase'>Chaha.AI</h5>
                              </div>
                              <a className="ad-btn" href="https://react-icons.github.io/react-icons/search?q=flut"> View</a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="card rounded">
                          <div className="card-image">
                              <span className="card-notify-badge">
                                  Android & ML
                              </span>
                              <img src={Leaf} alt="project" />

                          </div>
                          <div className="class-image-overly m-auto mt-3">
                              <span className="card-detail-badge">Flutter</span>
                              <span className="card-detail-badge">Machine Learning</span>

                          </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className='text-uppercase'>Leaf Health Analysis</h5>
                              </div>
                              <a className="ad-btn" href="https://github.com/Sufi1512/Leaf-health-Analyzer-using-flutter" target="_blank" rel="noopener noreferrer">
  View
</a>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      
    </>
  )
}

export default Projects
