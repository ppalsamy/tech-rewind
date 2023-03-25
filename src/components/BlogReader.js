import { useParams } from 'react-router-dom';
import Article from './Article';

function BlogReader() {

    const params = useParams();
    const { title } = params;
    return (

        <Article name={title} />

    )
}

export default BlogReader