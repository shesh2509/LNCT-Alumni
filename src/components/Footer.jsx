import styled from "styled-components";

const Container = styled.div`
    height: 140px;
    background-color: black;
`

const Text = styled.p`
    color: white;
    margin-left: 400px;
    margin-top: 20px;
`

const ImageL = styled.img`
    height: 20px;
    width: 20px;
`

const ImageI = styled.img`
    height: 20px;
    width: 20px;
`

const Wrapper = styled.div`
    display: flex;
`

const Wrapper2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`

export default function Footer(){
    return(
        <Container>
            <Wrapper>
                <Text>
                    *Note: This is not an offical webiste, it's just for helping our juniors.
                </Text>
            </Wrapper>

            <Wrapper2>
                <a href = "https://www.linkedin.com/in/shesh2509/" rel="noreferrer" target="_blank" style={{color:"white", marginRight:"20px", textDecoration:"none"}}>
                    <ImageL src = "../Image/linkedin.png" /> /shesh2509
                </a>
                <p style={{color:"white"}}>Copyright @ SHESH</p>
                <a href = "https://www.instagram.com/shesh2509/" rel="noreferrer" target="_blank" style={{color:"white", marginLeft:"20px", textDecoration:"none"}}>
                    <ImageI src = "../Image/instagram.png"/> @shesh2509
                </a>
            </Wrapper2>
            
           

        </Container>
    )
}