import Markdown from "markdown-to-jsx";
import { Component } from "react";
import Container from "react-bootstrap/esm/Container";

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { md: '' }
    }

    async componentDidMount() {
        const articleName = this.props.name;
        const file = await import(`./posts/${articleName}.md`);
        const response = await fetch(file.default);
        const text = await response.text();

        this.setState({
            md: text
        })
    }

    render() {
        return (
            <Container>
                <Container>
                    <Markdown children={this.state.md} />
                </Container>
            </Container>
        )
    }
}
export default Article;
