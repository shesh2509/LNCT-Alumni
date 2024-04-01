import styled from "styled-components";

const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background-color: rgb(17 17 17 );
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Text = styled.h1`
    color: #e2498a;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: white;
    //background-image: radial-gradient(at center center, #e2498a 0%, #6830c8 70%);
    font-family: "Raleway", Sans-serif;
    font-size: 50px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 0px;
    margin-bottom: 0;
`

const ListB = styled.div`
    height: 200px;
    width: 200px;
    cursor: pointer;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #212121;
    margin: 30px;
    &:hover{
        transform: scale(1.05);
        border: solid white 0.8px;
    }
`

const List = styled.div`
    height: 150px;
    width: 200px;
    cursor: pointer;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #343434;
    margin: 0 30px;

    &:hover{
        transform: scale(1.05);
    }
`

const ListW = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 30px;

`

export default function Batch() {
    return(
        <Container>
            <Wrapper>
                <div><Text>Batch Wise List</Text></div>

                <ListW>
                    <ListB>
                        <List>
                            <a href = "https://lnct.ac.in/wp-content/uploads/2023/05/LNCT-GROUP-Placed-Students-2022-23-BATCH.pdf" rel="noreferrer" target="_blank" style={{color:"white", textDecoration:"none", fontSize:"20px"}}>BATCH <br/>2022-2023</a>
                        </List> 
                    </ListB>
                     
                    <ListB>
                        <List>
                            <a href = "https://lnct.ac.in/wp-content/uploads/2022/10/Placment-Records.pdf" rel="noreferrer" target="_blank" style={{color:"white", textDecoration:"none", fontSize:"20px"}}>BATCH <br/> 2021-2022</a>
                        </List>  
                    </ListB>
                    

                    <ListB>
                        <List>
                            <a href = "https://lnct.ac.in/wp-content/uploads/2021/07/LNCT-GROUP-PLACEMENT-RECOARD-2020-21-BATCH.pdf" rel="noreferrer" target="_blank" style={{color:"white", textDecoration:"none", fontSize:"20px"}}>BATCH <br/> 2020-2021</a>
                        </List> 
                    </ListB>
                     

                    <ListB>
                        <List>
                            <a href = "https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-GROUP-PLACEMENT-RECORD-2019-20.pdf" rel="noreferrer" target="_blank" style={{color:"white", textDecoration:"none", fontSize:"20px"}}>BATCH <br/>2019-2020</a>
                        </List>
                    </ListB>
                      
                </ListW>    
            </Wrapper>
        </Container>
    )
}
