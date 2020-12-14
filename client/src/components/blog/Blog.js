
import React, {Fragment, useEffect} from "react";
import { connect } from "react-redux";
import {getAllPosts} from "../../actions/blog";


const Blog = ({getAllPosts, posts: {posts, loading}}) => {
    useEffect(() => {
        getAllPosts()
    }, []);
    return(
        //1. ation to import the posts
        //2. loop through all the posts. 
        <Fragment>
            {loading ? (<p>Loading</p>) : (
                <ul>
                   {posts.map((p)=>
                        p.post.map(par => 
                            <Fragment key={par._id}>
                                <p>{par.title}</p>
                                {par.body != null ? (<Fragment>{par.body.map(
                                    (p, index) => <p key={index}>{p.paragraph}{Object.keys(p)}</p>
                                )}</Fragment>):(<Fragment></Fragment>)}
                            </Fragment>                            
                        )
                    )}
               </ul>         
            )}
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts
});

export default connect(mapStateToProps, {getAllPosts})(Blog);