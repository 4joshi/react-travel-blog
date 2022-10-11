import React from "react";

const blogDetails = {
    graphicUrl : "https://tiesinstitute.com/wp-content/uploads/2021/01/shutterstock_268004744-2.jpg",
    content : "This is a sample travel blog element. The content is just a placeholder for any dynamic data that will be used in the future.",
    title : "Sample Blog"
}

const BlogItem = () =>{
    let graphicUrl = "https://tiesinstitute.com/wp-content/uploads/2021/01/shutterstock_268004744-2.jpg";
    
    let blog = blogDetails;

    return(
        <div className="blog-item-container">
            <img src={graphicUrl} alt="blog graphic"/>
            <h1>{blog.title}</h1>
            <p className="blog-item-content-data">{blog.content}</p>
        </div>
    )
}

export default BlogItem;