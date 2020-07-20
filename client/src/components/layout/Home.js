import React from 'react';

const Home = () => {
    const slideIndex = 0;
    showSlides();
    const showSlides = () => {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        const i = 0;
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2000);
    }
        
    return (
        <div className='container'>
            <h3>Welcome</h3>

        </div>
    )
}

export default Home;
