// eslint-disable-next-line no-unused-vars
import React,{useEffect,useState} from 'react';
import Container from '../components/container/Container.jsx';
import PostForm from '../components/post-form/PostForm.jsx';
import appwriteService from '../appwrite/config';
import { useParams,useNavigate } from 'react-router-dom';

function EditPost() {
    const [post,setPosts]=useState(null)
    const  {slug} = useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])
    return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>
  ) : null
}

export default EditPost