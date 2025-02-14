import React from 'react'
import CustomLayout from '../components/CustomLayout'
import Footer from '../components/Footer'
import BlogPostHeader from '../components/BlogPostHeader';

const blogpost = () => {
    return (
        <div>
            <BlogPostHeader />
            <CustomLayout/>
            <Footer />
            
        </div>
    );
};
export default blogpost
