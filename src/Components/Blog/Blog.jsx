import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import BlogContent from './BlogContent';

const ref = React.createRef();
const Blog = () => {
    return (
        <div className='container py-5'>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) =><div  className="col-md-12 text-center"><button onClick={toPdf} className='btn btn-danger mx-auto'>Convert into Pdf</button></div>}
            </Pdf>
            <div ref={ref} >
               
                   <BlogContent></BlogContent>
                
            </div>
        </div>
    );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<Blog />, rootElement);
export default Blog;