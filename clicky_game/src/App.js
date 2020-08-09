import React from "react";
import Navbar from "./components/Navbar/index";
import Jumbotron from "./components/Jumbotron/index";
import Images from "./images.json";
import ImageCard from "./components/ImageCard/index"
import Wrapper from "./components/Wrapper/index"



class App extends React.Component {
    state = {
        currentScore: 0,
        highScore: 0,
        Images
        // value: false
    }


    handleIncrement = () => {
        // We always use the setState method to update a component's state
        // if (this.state.value === false) {
            this.setState({ currentScore: this.state.currentScore + 1 });
            // this.setState({ value: true})
            // This wouldn't work as expected
            // this.state.count = this.state.count + 1;
            this.handleHighScore();
            this.handleRandom();
        // }
        // else {
        //     this.setState({ currentScore: 0 });
        // }

    };

    handleHighScore = () => {
        this.setState({ highScore: this.state.highScore + 1 })
    }

    handleRandom = () => {
        let image = this.state.Images;
        for(let i = image.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = image[i]
            image[i] = image[j]
            image[j] = temp
          }
          this.setState({ Images: image})
    }



    render() {
        const images = Images.map((image) =>
            <ImageCard key={image.id.toString()}
                name={image.name}
                image={image.image}
                click={this.handleIncrement}
                // value={this.state.value}
            />

        )
        return (
            <div>
                <Navbar current={this.state.currentScore} high={this.state.highScore} />
                <Jumbotron />
                <Wrapper>
                    {images}
                </Wrapper>

            </div>

        );
    }
}
export default App;