import { Card } from "react-bootstrap"
const Player=({el})=>{

    return(
        <Card style={{ width: '18rem' }} className="card-body">
           <Card.Img variant="top" src={el.image} />
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
           
            {el.age}
            {el.nationality}
            {el.jurseyNumber}
            {el.team}
            </Card.Text>
           
          </Card.Body>
        </Card>
               
        )}

Player.defaultProps={
  el : {name : "Aziz",age:20,nationality:"Tunisian",team:"CA",jurseyNumber:8,image:"https://www.google.com/search?q=Mohamed+Salah&tbm=isch&ved=2ahUKEwi4zt6XxuD_AhW9picCHVZmBCAQ2-cCegQIABAA&oq=Mohamed+Salah&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BwgAEIAEEApQvgdYvgdghyBoAHAAeACAAawCiAG5A5IBBzAuMS4wLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=ZFCZZLiMN73NnsEP1syRgAI&bih=625&biw=1366#imgrc=XJkKJqs1G7nnMM"}
}
        export default Player