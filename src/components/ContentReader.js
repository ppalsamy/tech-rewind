import React, { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx';

function ContentReader() {


    const file_name = 'pairprogramming.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./posts/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
            })
            .catch(err => console.log(err));
    });

    return (
        <div>
            <Markdown>{post}</Markdown>
        </div>

    );
}
export default ContentReader;