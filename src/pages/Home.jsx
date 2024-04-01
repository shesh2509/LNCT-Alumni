import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Batch from "../components/Batch";
import List from "../components/List";
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Container1 = styled.div``

const Container = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(#431d5a, #52104a);
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Sdiv = styled.div`
    margin-left: 50px;
`

const Idiv = styled.div`
    margin-right: 50px;
    margin-left: 20px;
`

const Adiv = styled.div`
    margin-right: 30px;
`

const Text = styled.h1`
    color: white;
    font-size: 35px;
    font-weight: 600;

    &:hover{
        transform: scale(1.1);
    }
`
const Button = styled.button`
    width: 80%;
    border: none;
    border-radius: 5px;
    padding: 15px 20px;
    border-style: solid;
    border-color: white;
    border-radius: 5px;
    background-color: white;
    color: blueviolet;
    font-weight: bold;
    font-size: medium;
    cursor: pointer;
    margin-top: 30px;
    margin-bottom: 20px;
    align-items: center;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5), 0 6px 20px 0 rgba(0,0,0,0.19);

    &:hover{
        background-image: linear-gradient(#431d5a, #52104a);
        color: white;
        transform: scale(1.1);
    }
`
const Image = styled.img`
    width: 500px;
    height: 350px;
`



export default function Home() {
    const enrollmentNumber = localStorage.getItem('enrollmentNumber');
    const navigate = useNavigate();

    const getProfile = async() => {
        try{
            const enrollmentNumber = localStorage.getItem('enrollmentNumber');
            //const res = await axios.get(`http://localhost:5000/api/find?enrollment=${enrollmentNumber}`);
            const res = await axios.get(`https://alumni-app-beryl.vercel.app/api/find?enrollment=${enrollmentNumber}`);
            const user = res.data.find(user => user.enrollmentNumber === enrollmentNumber);
            navigate(`/profile/${user._id}`);
        }catch(err){
          console.error(err);
        }
    };

    return (
        <Container1>
            <Navbar/>
            <Container>
                <Wrapper>
                <Sdiv>
                    <Text>Know Your Alumni And Their Interview Experience</Text>
                    <Link to = "/find">
                        <Button>FIND ALUMNI</Button>
                    </Link>
                    
                </Sdiv>

                <Idiv>
                    <Image src = "../Image/home.png" alt = ""/>
                </Idiv>

                <Adiv>
                    <Text>Guide Your Juniors By Sharing Your Interiew Experience</Text>

                    {enrollmentNumber ? (
                        
                        <Button onClick={getProfile}>Your Profile</Button>
                        
                    ) : (
                        <Link to="/register">
                        <Button>REGISTER AS ALUMNI</Button>
                        </Link>
                    )}
                </Adiv>
                </Wrapper>
                
            </Container>

            <List/>
            <Batch/>
            <Footer/>
        </Container1>
        

    )
}