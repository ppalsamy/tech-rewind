import posts from './tag/posts.json'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
 function BlogReader () {
    return (
     
        <Container>
            <Container>
                {posts.map((data) => {
                    return (
                        <div>
                            <Card border="light" style={{ align: 'center', width: '80%' }}>
                                <Card.Img src={data.img} />
                                <Card.Body>
                                    <a href={data.link}> <Card.Title>{data.title}</Card.Title> </a>
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

export default BlogReader