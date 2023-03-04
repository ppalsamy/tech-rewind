import React, { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx';

function ContentReader() {


    const file_name = 'tdd.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./markdown/${file_name}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    });

    return (
        <Markdown>{post}</Markdown>

    );
}
export default ContentReader;