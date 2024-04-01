import styled from "styled-components";
import Navbar from "../components/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Batch from "../components/Batch";
import Footer from "../components/Footer";
import ProfileAll from "../components/ProfilesAll";
import {Link, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = styled.div`
    
`
const Container = styled.div`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(#431d5a, #52104a);
`

const Wrapper = styled.div`
    padding: 50px;
    width: 60%;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0px 8px 16px 0 rgba(0,0,0,0.5), 10px 6px 20px 0px rgba(0,0,0,0.5);
`

const Text = styled.h1`
    color: #e2498a;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-color: transparent;
    background-image: radial-gradient(at center center, #e2498a 0%, #6830c8 70%);
    font-family: "Raleway", Sans-serif;
    font-size: 40px;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SearchSection = styled.div`
    padding: 20px 0;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
const SearchBar = styled.div`
    background-color: rgb(227, 227, 227);
    border-radius: 30px;
    width: 500px;
    min-height: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Input = styled.input`
    flex: 1;
    padding: 0 20px;
    font-size: 20px;
    background-color: transparent;
    border: none;

    &:focus{
        outline: none;
    }
`
const SearchResult = styled.div`
    background: rgb(227, 227, 227);
    width: 400px;
    margin-top: 10px;
    position: absolute;
    top: 70px;
    ::-webkit-scrollbar{
        display: none;
    }
`

const A = styled.p`
    padding: 5px 20px;
    cursor: pointer;
    font-size: 18px;
    display: block;
    text-decoration: none;
    color: black;
    margin-top: 2px;
    margin-bottom: 2px;

    &:hover {
        background: rgb(227, 227, 227);
    }
`

const Icon = styled.div`
    background-color: rgb(227, 227, 227);
    padding: 0 25px;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
`


const ContainerImage = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(170deg, #8d77b3 0%, #be95a6 70%);
`
const Image = styled.img`
    padding: 5px;
    margin-top: 70px;
    margin-bottom: 70px;
    height: 500px;
    width: 900px;
    /* outline: white; */
    border: solid white 10px;
    box-shadow: 0px 8px 16px 0 rgba(0,0,0,0.5), 10px 6px 20px 0px rgba(0,0,0,0.5);
`


export default function Find(){
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState([]);

    useEffect (() => {
        // if(search !== ""){
        //     fetch(`http://localhost:5000/api/find?company=${search}`)
        //     .then(res => res.json())
        //     .then(data => setSearchData(data));
        // }
        if(search !== ""){
            fetch(`https://alumni-app-beryl.vercel.app/api/find?company=${search}`)
            .then(res => res.json())
            .then(data => setSearchData(data));
        }
    }, [search])

    const handleChange = e => {
        setSearch(e.target.value);
    }

    const handleClose = () => {
        setSearch("");
        setSearchData([]);
    }


    return (
        <Nav>
            <Navbar/>
            <Container>
                <Wrapper>
                    <Text>Search Alumni by Company</Text>
                    <SearchSection>
                        <SearchBar>
                            <Input 
                                type = 'text'
                                placeholder="Search..."
                                autoComplete="off"
                                onChange = {handleChange}
                                value = {search}
                            />
                            <Icon>
                                {search === "" ? (
                                    <Link to = {`/find/${search}`} style={{textDecoration:"none"}}>
                                        <SearchIcon/>
                                    </Link>
                                ) : (
                                    <CloseIcon onClick={handleClose}/>
                                )}
                            </Icon>
                        </SearchBar>
                        <SearchResult>
                            {
                                searchData
                                .filter(data => data.company.toLowerCase().startsWith(search.toLowerCase()))
                                .map((data, index) => (
                                    <Link to={`/find/${data.company}`} style={{textDecoration: "none"}} key={index}>
                                        <A>{data.company}</A>
                                    </Link>
                                ))
                            }
                            
                        </SearchResult>
                    </SearchSection> 

                </Wrapper>
            </Container>
            
            {cat && <Text>{decodeURIComponent(cat)}</Text>}
            <ProfileAll cat = {cat}/>

            <ContainerImage>
                <Image src = "../Image/Placment-Records.jpg" alt = "" />
            </ContainerImage>
            <Batch/>
            <Footer/>
        </Nav>
    )
}