import posts from './tags/posts.json'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
function BlogLists() {
    return (

        <Container>
            <Container>
                {posts.map((data) => {
                    return (
                        <div>
                            <Card border="light" style={{ align: 'center', width: '100%' }}>
                                <Card.Img src={data.img} />
                                <Card.Body>
                                    <Link to={data.link} style={{ textDecoration: 'none' }}>
                                        <Card.Title>{data.title}</Card.Title> 
                                        <Card.SubTitle>{data.updated_date}</Card.SubTitle> </Link>
                                    <Card.Text>
                                        <div className="flex-column">{data.description}</div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                        </div>
                    )
                })}
            </Container>
        </Container>

    )
}

export default BlogLists