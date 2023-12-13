import React from "react";
import './testimonials.css'

function Testimonials() {
    return (
        <>
<div class="site-section block-14 bg-light">

<div class="container">
  
  <div class="row">
    <div class="col-md-6 mx-auto text-center mb-5 section-heading">
      <h2>What People Say</h2>
    </div>
  </div>

  <div class="nonloop-block-14 owl-carousel">
    
    <div class="p-4">
      <div class="d-flex block-testimony">
        <div class="person mr-3">
          <img src="images/person_1.jpg" alt="Image" class="img-fluid rounded"/>
        </div>
        <div>
          <h2 class="h5">Katie Johnson</h2>
          <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="d-flex block-testimony">
        <div class="person mr-3">
          <img src="images/person_2.jpg" alt="Image" class="img-fluid rounded"/>
        </div>
        <div>
          <h2 class="h5">Jane Mars</h2>
          <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="d-flex block-testimony">
        <div class="person mr-3">
          <img src="images/person_3.jpg" alt="Image" class="img-fluid rounded"/>
        </div>
        <div>
          <h2 class="h5">Shane Holmes</h2>
          <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
        </div>
      </div>
    </div>
    <div class="p-4">
      <div class="d-flex block-testimony">
        <div class="person mr-3">
          <img src="images/person_4.jpg" alt="Image" class="img-fluid rounded"/>
        </div>
        <div>
          <h2 class="h5">Mark Johnson</h2>
          <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!&rdquo;</blockquote>
        </div>
      </div>
    </div>

  </div>

</div>

</div>





            {/* <div className="nonloop-block-14 owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                    <div className="owl-stage" style={{ transform: 'translate3d(-1130px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '100%' }}>
                        <div className="owl-item cloned" style={{ width: '545px', marginRight: '20px' }}>
                            <div className="p-4">
                                <div className="d-flex block-testimony">
                                    <div className="person mr-3">
                                        <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded" />
                                    </div>
                                    <div>
                                        <h2 className="h5">Shane Holmes</h2>
                                        <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!”</blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: '545px', marginRight: '20px' }}>
                            <div className="p-4">
                                <div className="d-flex block-testimony">
                                    <div className="person mr-3">
                                        <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded" />
                                    </div>
                                    <div>
                                        <h2 className="h5">Mark Johnson</h2>
                                        <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!”</blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '100%' }}>
                            <div className="p-4">
                                <div className="d-flex block-testimony">
                                    <div className="person mr-3">
                                        <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded" />
                                    </div>
                                    <div>
                                        <h2 className="h5">Katie Johnson</h2>
                                        <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!”</blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: '100%' }}>
                            <div className="p-4">
                                <div className="d-flex block-testimony">
                                    <div className="person mr-3">
                                        <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded" />
                                    </div>
                                    <div>
                                        <h2 className="h5">Jane Mars</h2>
                                        <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!”</blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: '545px', marginRight: '20px' }}>
                            <div className="p-4">
                                <div className="d-flex block-testimony">
                                    <div className="person mr-3">
                                        <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded" />
                                    </div>
                                    <div>
                                        <h2 className="h5">Shane Holmes</h2>
                                        <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!”</blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: '545px', marginRight: '20px' }}>
                            <div className="p-4">
                                <div className="d-flex block-testimony">
                                    <div className="person mr-3">
                                        <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded" />
                                    </div>
                                    <div>
                                        <h2 className="h5">Mark Johnson</h2>
                                        <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!”</blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: '545px', marginRight: '20px' }}>
                            <div className="p-4">
                                <div className="d-flex block-testimony">
                                    <div className="person mr-3">
                                        <img src="images/person_1.jpg" alt="Image" className="img-fluid rounded" />
                                    </div>
                                    <div>
                                        <h2 className="h5">Katie Johnson</h2>
                                        <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!”</blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: '545px', marginRight: '20px' }}>
                            <div className="p-4">
                                <div className="d-flex block-testimony">
                                    <div className="person mr-3">
                                        <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded" />
                                    </div>
                                    <div>
                                        <h2 className="h5">Jane Mars</h2>
                                        <blockquote>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias accusantium qui optio, possimus necessitatibus voluptate aliquam velit nostrum tempora ipsam!”</blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-nav">
                    <div className="owl-prev">
                        <span className="icon-arrow_back">
                        </span>
                    </div>
                    <div className="owl-next">
                        <span className="icon-arrow_forward">
                        </span>
                    </div>
                </div>
                <div className="owl-dots">
                    <div className="owl-dot active">
                        <span>
                        </span>
                    </div>
                    <div className="owl-dot">
                        <span>
                        </span>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Testimonials;