import styled from "styled-components";
import {Link} from 'react-router-dom';


const Div1 = styled.div`
    height: 200px;
    width: 200px;
    background-color: #cce8e8;
    cursor: pointer;

    &:hover {
        background-image: linear-gradient(#431d5a, #52104a);
        transform: scale(1.1);
    }
`

const Circle = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    margin-top: 25px;
    margin-left: 25px;
`

const Image = styled.img`
    height: 100px;
    width: 100px;
    margin-top: 25px;
    margin-left: 25px;
    position: absolute;
`

export default function ListItem({item}) {
    return (
        <Div1>
            <Link to={`find/${item.cat}`}>
            <Circle>
                <Image src = {item.img} alt="no img"></Image>
            </Circle>
            </Link>
        </Div1>

    )
}