import React from "react";
import Navbar from "./components/Navbar/index";
import Jumbotron from "./components/Jumbotron/index";
import Images from "./images.json";
import ImageCard from "./components/ImageCard/index"
import Wrapper from "./components/Wrapper/index"

const images = Images.map((image)=>
<ImageCard key={image.id.toString()}
name = {image.name}
image = {image.image}
/>

)

function App() {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Wrapper>
            {images}
            </Wrapper>

        </div>

    );
}

export default App;