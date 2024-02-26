import {Card,Col,Row} from 'react-bootstrap'
import './Blogitem.css'
export default function Blogitem({blog}) {

const handleLen=(text,max)=>{
    console.log(text.length);
    if(text.length>max){
        var maxText=text.substring(0,max);
        var lastSpace=maxText.lastIndexOf(' ');
        var truncatedText=maxText.substring(0,lastSpace)+'[...]';
        return truncatedText;
    }
     return text;
}

    return (
      
        <>
        <Row className='blog-list'>
            {blog.map((blog,index)=>(
                
             <Col lg="4" key={index}>
             <Card style={{height:'400px'}} className='card-blog'>
                 <Card.Img src={blog.img} />
                 <Card.Body>
                     <Card.Text className='card-title'>{handleLen(blog.title,100)} </Card.Text>
                     <Card.Text> {handleLen(blog.des,200)} </Card.Text>
                 </Card.Body>
             </Card>
     
             </Col>
            ))}

        </Row>
       
        </>
    )
}