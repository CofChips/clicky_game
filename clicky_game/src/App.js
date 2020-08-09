import React from "react";
import Navbar from "./components/Navbar/index";
import Jumbotron from "./components/Jumbotron/index";
import Images from "./images.json";
import ImageCard from "./components/ImageCard/index"
import Wrapper from "./components/Wrapper/index"



class App extends React.Component {
    state = {
        currentScore: 0
    }


    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ currentScore: this.state.currentScore + 1 });
        // This wouldn't work as expected
        // this.state.count = this.state.count + 1;
    };



    render() {
        const images = Images.map((image) =>
            <ImageCard key={image.id.toString()}
                name={image.name}
                image={image.image}
                click={this.handleIncrement}
            />

        )
        return (
            <div>
                <Navbar current={this.state.currentScore}/>
                <Jumbotron />
                <Wrapper>
                    {images}
                </Wrapper>

            </div>

        );
    }
}
export default App;