import styled from "styled-components"


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(220, 72%, 10%);
    height: 100vh;

    box-sizing: border-box;
`
export const SecondaryContainer = styled.div`
    display: grid;
    justify-content: center;
    background-color: hsl(220, 72%, 10%);
    height: 60vh;
    width: 75vw;
    grid-template-columns: 20% 20% 20% 20%;
    grid-template-areas: "user stats stats stats"
                         "user stats stats stats";
    grid-gap: 1rem;
    padding: 20px;
`
export const UserPanel = styled.div`
    grid-area: user;

    background: hsl(230, 70%, 25%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
`
export const UserPanelButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 40%;
`
export const UserPanelButton = styled.button`
    margin: 0.5rem 0.5rem 0.5rem 1rem;
    border: none;
    background-color: hsl(230, 70%, 25%);
    color: hsl(238, 31%, 68%);
    cursor: pointer;

    &:hover {
        color: white;
    }
`
export const UserSubpanel = styled.div`
    background: hsl(238, 94%, 69%);
    height: 60%;
    border-radius: 10px;
    text-align: left;

    width: 100%;
`

export const UserSubpanelImage = styled.img`
    width: 60px;
    height: auto;
    border-radius: 50%;
    margin: 1rem;
`

export const UserSubpanelTextContainer = styled.div``
export const UserSubpanelTitle = styled.h2`
    margin: 1rem;
    font-weight: 200;
    color: white;
`
export const UserSubpanelSubtitle = styled.p`
    margin: 1rem;
    font-size: 14px;
    color: hsl(238, 51%, 38%);
`
export const StatsPanel = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: flex-end;    
    background-color: ${props => props.background};
    border-radius: 10px;
    position: relative;
`
export const StatsImage = styled.img`
    height: 50px;
    width: auto;
    transform: translate(0%, -15%);
`
export const StatsSubpanel = styled.div`
    height: 80%;
    background: hsl(230, 70%, 25%);
    border-radius: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    
`
export const StatsSubpanelHeaderContainer = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
`
export const StatsSubpanelHeaderImage = styled.img`
    height: 4px;
    width: auto;
`
export const StatsSubpanelInfoContainer = styled.div`
`
export const StatsSubpanelInfoTitle = styled.h2`
    margin: 0 1rem 0 1rem;
    font-weight: 300;
    color: white;
`
export const StatsSubpanelInfoSubtitle = styled.p`
    margin: 1rem 1rem 0 1rem;
    font-size: 14px;
    color: hsl(238, 31%, 68%);;
`