import styled from "styled-components";
import { categories } from "../data"
import ListItem from "../components/ListItem"


const Container = styled.div`
    height: 80vh;
    padding: 10px;
    
`

const Heading = styled.h1`
    color: white;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: transparent;
    background-image: radial-gradient(at center center, #e2498a 0%, #6830c8 70%);
    font-family: "Raleway", Sans-serif;
    font-size: 50px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 30px;
    margin-left: 370px;
`

const Wrapper = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10px;
`




export default function List() {
    return (
        <Container>
            <Heading>Our Alumni From </Heading>
            <Wrapper>
                {categories.map(item => (
                    <ListItem item ={item} key = {item.id}/>
                ))}
            </Wrapper>
        </Container>
    )
}