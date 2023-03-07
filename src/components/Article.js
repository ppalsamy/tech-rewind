import Markdown from "markdown-to-jsx";
import { Component } from "react";

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = { md: '' }
    }

    async componentDidMount() {
        const articleName = this.props.name;
        const file = await import(`./posts/${articleName}`);
        const response = await fetch(file.default);
        const text = await response.text();

        this.setState({
            md: text
        })
    }

    render() {
        return (
            <div className="article">
                <Markdown children={this.state.md} />
            </div>
        )
    }
}
export default Article;