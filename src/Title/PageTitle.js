
import styled from "styled-components"
const H1=styled.h1`
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`
export default function PageTitle({title}) 
{
    return (
        <>
        <H1>{title}</H1>
        </>
    )
}